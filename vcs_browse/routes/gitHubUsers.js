const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();


/* GET gitHubUsers listing. */
router.get('/', function(req, res, next) {

  let gitHubUrl = "https://api.github.com/users/" + req.query.search + "/repos";

  // //use fetch API using the url as well as passing the necessary authentication requirements
  fetch(gitHubUrl, {method: 'GET',  headers : {'Accept': 'application/vnd.github.v3+json'}})
    .then(res => res.json())
    .then(
      (gitHubResult) => {
        res.send(gitHubResult);
      },
      (error) => {
        res.send(error)
      }
    );

});

module.exports = router;
