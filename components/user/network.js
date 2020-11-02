const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function (req, res) {
  const filterUsers = req.query.name || null;

  controller
    .getUsers(filterUsers)
    .then(usersList => {
      response.success(req, res, usersList, 200);
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500, e);
    });
});

router.post('/', function (req, res) {
  controller
    .addUser(req.body.name)
    .then(data => {
      response.success(req, res, data, 201);
    })
    .catch(e => {
      response.error(req, res, 'Información inválida', 400, e);
    });
});

module.exports = router;
