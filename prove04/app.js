const path = require('path');

const express = require('express');

const routes = require('./routes/shop')


routes
    .use('/', routes)
    .use((req, res, next) => {
        // 404 page
        res.render('pages/404', { title: '404 - Page Not Found', path: req.url });
    })
    

// router.post('/create-order', shopController.postOrder);

// router.get('/orders', shopController.getOrders);

module.exports = routes;
