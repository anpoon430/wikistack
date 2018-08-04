const express = require('express');
const router = express.Router();
const {Page, User} = require('../models/index');
const {addPage, wikiPage, main, editPage} = require('../views/index');
router.post('/', async (req, res, next) => {
  try {
    const user = await User.findOrCreate({ //returns an array
      where: {
        name: req.body.name,
        email: req.body.email
      }
    });
    const newPage = await Page.create(req.body);
    newPage.setAuthor(user[0]);

   res.redirect(`/wiki/${newPage.dataValues.slug}`);
  } catch (err){
    next(err);
  }

});

router.get('/', async (req, res, next) => {
  const pages = await Page.findAll();
  const pageLinks = main(pages);
  res.send(pageLinks);
});

router.get('/add', (req, res, next) => {

  res.send(addPage());
});

router.get('/:slug/edit', async (req, res, next) => {
  try{
    const slug = req.params.slug;
    const page = await Page.findOne({
      where: {slug: slug}
    });
    if (page === null) res.sendStatus(404);
    const author = await page.getAuthor();
    res.send(editPage(page, author));
  } catch(err){
    next(err);
  }
});
router.get("/:slug/delete", async (req, res, next) => {
  try {
    await Page.destroy({
      where: {
        slug: req.params.slug
      }
    });

    res.redirect("/wiki");
  } catch (error) {
     next(error)
  }
});

router.post('/:slug', async (req, res, next) => {
  try{
    const slug = req.params.slug;
    const data = req.body;
    console.log(data);
    const newPage = await Page.update(data,{where: {slug:slug}, returning: true});
   res.redirect(`/wiki/${slug}`);
  } catch(err){
    next(err);
  }
});

router.get('/:slug', async (req, res, next) => {
  try{
    const slug = req.params.slug;
    const page = await Page.findOne({
      where: {slug: slug}
    });
    if (page === null) res.sendStatus(404);
    const author = await page.getAuthor();
    res.send(wikiPage(page, author));
  } catch(err){
    next(err);
  }
});

module.exports = router;
