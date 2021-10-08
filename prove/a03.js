 const express = require('express');
 const routes = require('./routes/a03')


 

  routes
    .use('/', routes)
    .use((req, res, next) => {
        // 404 page
        res.render('pages/404', { title: '404 - Page Not Found', path: req.url });
    })
    

 

 module.exports = routes;