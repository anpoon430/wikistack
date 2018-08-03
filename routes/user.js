const express = require('express');
const router = express.Router();
const userList = require('../views/userList');
const userPages = require('../views/userPages');
const {User, Page} = require('../models/index');


router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    const usersListPage = userList(users);
    res.send(usersListPage);
  } catch (err){
    console.log('ERROR: ', err);
  }
});

router.get('/:id', async (req, res, next) => {
  try{
    const id = req.params.id;
    const userPageInfo = await User.findById(id);
    const userPage = userPages(userPageInfo);

    const pageData = await Page.findById

    res.send(userPage);
  } catch (err){
    console.log('ERROR: ', err);
  }
})

router.post('/', async (req, res, next) => {
  try{
    // const newUser = await User.create({name: req})
    console.log(req.body);

  } catch (err){
    console.log('ERROR: ', err);
  }
});
router.put('/:id', async (req, res, next) => {
  try{
    // const newUser = await User.create({name: req})


  } catch (err){
    console.log('ERROR: ', err);
  }
});
router.delete('/:id', async (req, res, next) => {
  try{
    // const newUser = await User.create({name: req})

  } catch (err){
    console.log('ERROR: ', err);
  }
});



module.exports = router;
