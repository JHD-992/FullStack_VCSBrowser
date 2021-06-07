const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {

  let gitLabUrl = "https://gitlab.com/api/v4/users?username=" + req.query.search + "";

  //use fetch API using the url as well as passing the necessary authentication requirements
  fetch(gitLabUrl, {method: 'GET'})
    .then(res => res.json())
    .then(
      (gitLabResult) => {
        res.send(gitLabResult);
      },
      (error) => {
        res.send(error)
      }
    );
});

module.exports = router;
