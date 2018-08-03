const express = require('express');
const app = express();
const morgan = require('morgan');
const layout = require('./views/layout');
const {db, Page, User} = require('./models/index');
app.use(morgan('dev'));
//parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));
// parses json bodies
app.use(express.json());
app.use(express.static(__dirname + '/public'));

db.authenticate().
  then(()=>{
    console.log('connected to the database');
  });





app.get('/', (req, res, next) => {
  res.send(layout(''));
})



const PORT = 3000;
const init = async () => {
  const dbSync = await db.sync({force:true});
  app.listen(PORT, ()=>{
    console.log('Listening on ', PORT);
  });
}


init();
