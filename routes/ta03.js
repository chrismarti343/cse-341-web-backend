//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const products = require('../data/products.json')

router.get('/search', (req, res, next) => {
  const tag = req.query.tag;
  if (tag == "") {
    res.render('pages/ta03', {
      title: 'Team Activity 03',
      path: '/ta03',
      products: []
    })
  }
  console.log(tag);
  let caseTag = tag[0].toUpperCase() + tag.substring(1).toLowerCase();
  console.log(caseTag);
  const updatedProducts = products.filter(products => products.tags.includes(caseTag));
  res.render('pages/ta03', {
    title: 'Team Activity 03',
    path: '/ta03',
    products: updatedProducts
  })
});

router.get('/', (req, res, next) => {
  res.render('pages/ta03', {
    title: 'Team Activity 03',
    path: '/ta03', // For pug, EJS
    products: products
  });
});

module.exports = router;
