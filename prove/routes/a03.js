const express = require('express');
const routes = express.Router();
const a03Controller = require('../controllers/a03.js');



 routes
   .use('/', a03Controller)
   .use((req, res, next) => {
       // 404 page
       res.render('pages/404', { title: '404 - Page Not Found', path: req.url });
   })
   



module.exports = routes;