const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const {Page} = require('../models/index');
router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    let title = data.title.replace(/\s+/g, '_').replace(/\W/g, '');
    //
    const newPage = new Page({
    title: data.title,
    slug: `localhost:3000/wiki/${title}`,
    content: data.content,
    status: data.status,
    createdAt: Date.now(),
    updatedAt: Date.now()
    });
   await newPage.save();
  res.redirect(`/${data.title}`);


  } catch (err){
    next(error);
  }

});

router.get('/', (req, res, next) => {
  res.send('GET /wiki/');
});

router.get('/add', (req, res, next) => {

  res.send(addPage());
});


module.exports = router;
