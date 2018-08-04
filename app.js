const express = require('express');
const app = express();
const morgan = require('morgan');

const {db, Page, User} = require('./models/index');
const wiki = require('./routes/wiki');
const user = require('./routes/user');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

db.authenticate().
  then(()=>{
    console.log('connected to the database');
  });


app.use('/users', user);
app.use('/wiki', wiki);
app.use('/', (req, res, next) => {
  res.redirect('/wiki');
});







const PORT = 3000;
const init = async () => {
  const dbSync = await db.sync({force:false});
  app.listen(PORT, ()=>{
    console.log('Listening on ', PORT);
  });
}


init();
