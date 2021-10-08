//const Product = require('../models/product');
const express = require('express');
const router = express.Router();

//const Product = require('../models/product');


const products = require('../data/products.json')

router.get('/search', (req, res, next) => {
  const tag = req.query.tag;
  if (tag == "") {
    res.render('a03', {
      title: 'Team Activity 03',
      path: '/a03',
      products: []
    })
  }
  console.log(tag);
  let caseTag = tag[0].toUpperCase() + tag.substring(1).toLowerCase();
  console.log(caseTag);
  const updatedProducts = products.filter(products => products.tags.includes(caseTag));
  res.render('a03', {
    title: 'Assigment 03',
    path: '/a03',
    products: updatedProducts
  })
});

router.get('/', (req, res, next) => {
    res.render('a03', {
      title: 'Assigment 03',
      path: '/a03', // For pug, EJS
      products: products
    });
  });

module.exports = router;


