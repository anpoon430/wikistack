const express = require('express');
const router = express.Router();
const {userList, userPages} = require('../views/index');
const {User, Page} = require('../models/index');


router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    const usersListPage = userList(users);
    console.log(usersListPage);
    res.send(usersListPage);
  } catch (err){
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try{
    const id = req.params.id;
    const user = await User.findById(id);
    const pages = await Page.findAll({where:
      {authorId: id
      }
    });
    const userPage = userPages(user, pages);
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
