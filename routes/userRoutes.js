const express = require('express');
const { registerController, loginController } = require('../controller/userController');


const route = express.Router();

route.post('/register',registerController);
route.post('/login',loginController);

module.exports = route