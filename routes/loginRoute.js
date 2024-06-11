const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();
let ctrl = new loginController();
router.get('/', ctrl.screenLogin);
router.get('/cadastro', ctrl.screenCadastro);

module.exports = router;