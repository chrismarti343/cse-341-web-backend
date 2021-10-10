/*******************************************************************************
 * Feel free to remove this comment block and all other comments after pulling.
 * They're for information purposes only.
 *
 * This layout is provided to you for an easy and quick setup to either pull
 * or use to correct yours after working at least 1 hour on Team Activity 02.
 * Throughout the course, we'll be using Express.js for our view engines.
 * However, feel free to use pug or handlebars ('with extension hbs'). You will
 * need to make sure you install them beforehand according to the reading from
 * Udemy course.
 * IMPORTANT: Make sure to run "npm install" in your root before "npm start"
 *******************************************************************************/
// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000; // So we can run on heroku || (OR) localhost:5000
const cors = require('cors') // Place this with other requires (like 'path' and 'express')
const app = express();
var mongoose = require('mongoose');

// Route setup. You can implement more in the future!
const ta01Routes = require('./routes/ta01');
const ta02Routes = require('./routes/ta02');
const ta03Routes = require('./routes/ta03');
const ta04Routes = require('./routes/ta04');


const a03Prove = require('./prove/a03');
const a04Prove = require('./prove04/app');


const corsOptions = {
  origin: "https://cse341-testing-chris.herokuapp.com/",
  optionsSuccessStatus: 200
};

app

.use(cors(corsOptions))
.use(express.static(path.join(__dirname, 'public')))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')
// For view engine as Pug
//.set('view engine', 'pug') // For view engine as PUG.
// For view engine as hbs (Handlebars)
//.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})) // For handlebars
//.set('view engine', 'hbs')
.use(bodyParser({ extended: false })) // For parsing the body of a POST
.get('/', (req, res, next) => {
  // This is the primary index, always handled last.
  res.render('pages/index', {
    title: 'Welcome to my CSE341 repo',
    path: '/',
  });
})
.use('/ta01', ta01Routes)
.use('/ta02', ta02Routes)
.use('/ta03', ta03Routes)
.use('/ta04', ta04Routes)
.use('/a03', a03Prove)
.use('/a04', a04Prove)



.use((req, res, next) => {
  // 404 page
  res.render('pages/404', { title: '404 - Page Not Found', path: req.url });
})


const User = require('./prove04/models/user');


app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('6161f7521f77ce5094e238c9')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});



mongoose
  .connect(
    'mongodb+srv://chris:00yzwBxJUnQr2Il2@cluster0.1v6y8.mongodb.net/shop?retryWrites=true&w=majority'
  )
  .then(result => {
    User.findOne().then(user => {
        if (!user) {
          const user = new User({
            name: 'Max',
            email: 'max@gmail.com',
            cart: {
              items: []
            }
          });
          user.save();
        }
      });
      app.listen(PORT, () => console.log(`Listening on ${PORT}`));
    })
    .catch(err => {
      console.log(err);
    });
