const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define( 'page', {
  title: Sequelize.STRING,
  slug: {type: Sequelize.STRING, validate: {isUrl: true}},
  content: Sequelize.TEXT,
  status: Sequelize.ENUM('open', 'closed')
});
const User = db.define( 'user', {
  name: Sequelize.STRING,
  email: {type: Sequelize.STRING, validate: {isEmail: true}}
});




module.exports = {
  db,
  Page,
  User
}
