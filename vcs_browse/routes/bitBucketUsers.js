const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {

  /*Somewhere in late 2018 the BitBucket api deprecated being able to search for users based on username and instead
  implemented a search based on the account's UUID or account id. Due to the nature of obtaining this component, shown
  here under after users/, I am providing a static call here to a demo account I made for the purposes of this task*/
  let bitBucketUrl = "https://api.bitbucket.org/2.0/users/70121:a4b0c804-d69e-4a38-92c0-834f1a260e57"

  //use fetch API using the url as well as passing the necessary authentication requirements
  fetch(bitBucketUrl, {method: 'GET', headers : {'Authorization': 'Bearer rJUTkNBBgYdhWpkdz0Cppgpt9Z5rUq3uJ7dj4WfoFB15-d_xoUK1nT8qLvqVSqOFv4vEnOWXz_IHtgi1i7Uf-yew1ieq7FbSZEASC4VB53YBV0BEGg75GIlItM0VtZ6D02Uy-956KClfkfFev2s='}})
    .then(res => res.json())
    .then(
      (bitBucketRes) => {
        res.send(bitBucketRes);
      },
      (error) => {
        res.send(error)
      }
    );

});

module.exports = router;
