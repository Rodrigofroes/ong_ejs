const express = require('express');
const pagamentoController = require('../controllers/pagamentoController');

const router = express.Router();
let ctrl = new pagamentoController();
router.get('/', ctrl.screenPagamento);

module.exports = router;