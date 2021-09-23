//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

let names = [];
let errorMsg = '';
let errorMsg1 = '';

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA02: true, // For HBS
    contentCSS: true, // For HBS
    names: names,
    errorMsg: errorMsg,
    errorMsg1: errorMsg1
  });
});


router.post('/addUser', (req, res, next) => {
  const newUser = req.body.name;
  // for (var i = 0; i++; i > names.length) {
  //   console.log("In for loop!")
  //   console.log(names[i]);
  //   console.log(newUser);
  //   if (names[i] === newUser) {
  //     alert('Error! This user already exists.');
  //     res.redirect('/ta02/');
  //   }
  // }
  if (names.includes(newUser)) {
    errorMsg1 = "Name could not be added because it already exists."
  }
  else {
    names.push(newUser);
    errorMsg1 = ""
  }
    res.redirect('/ta02/')
})

router.post('/remUser', (req, res, next) => {
  const remName = req.body.remName;
  if (names.includes(remName)) {
    // remove item
    names = names.filter(name => name != remName);
    errorMsg = "";
  }
  else {
    errorMsg = `Name "${remName}" could not be removed because it does not exist.`
  }
  res.redirect('/ta02/')
})

module.exports = router;
