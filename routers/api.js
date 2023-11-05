const { Router, static } = require('express');
const router = Router();

const {Registrar, Consulta,guardarRegistro,listarRegistros } = require('../controller/controller');


router.post('/Registrar', guardarRegistro);
router.get('/Consultar', listarRegistros);

router.post('/RegistrarDB', Registrar);
router.get('/ConsultarDB', Consulta);

module.exports = router;
