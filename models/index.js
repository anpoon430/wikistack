const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define( 'page', {
  title: {type: Sequelize.STRING , allowNull: false},
  slug: {type: Sequelize.STRING, allowNull: false, unique: true},
  content: {type:Sequelize.TEXT, allowNull: false,},
  status: Sequelize.ENUM('open', 'closed')
});
const slugger = page => {
  if (!page.dataValues.slug){
    let validSlug = page.dataValues.title.replace(/\s+/g, '_').replace(/\W/g, '');
    page.dataValues.slug = validSlug;
  }
};
Page.beforeValidate(slugger);

const User = db.define( 'user', {
  name: {type:Sequelize.STRING, allowNull: false},
  email: {type: Sequelize.STRING, validate: {isEmail: true} , allowNull: false}
});

Page.belongsTo(User, {as: 'author'});



module.exports = {
  db,
  Page,
  User
}
