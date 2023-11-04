const { Router, static } = require('express');
const router = Router();

const {guardarRegistro,listarRegistros } = require('../controller/controller');


router.post('/Registrar', guardarRegistro);
router.get('/Consultar', listarRegistros);


module.exports = router;
