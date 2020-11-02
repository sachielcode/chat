const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/:userId', function (req, res) {
  controller
    .getChats(req.params.userId)
    .then(chatsList => {
      response.success(req, res, chatsList, 200);
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500, e);
    });
});

router.post('/', function (req, res) {
  controller
    .addChat(req.body.users)
    .then(newChat => {
      response.success(req, res, newChat, 201);
    })
    .catch(e => {
      response.error(req, res, 'Información inválida', 400, e);
    });
});

module.exports = router;
