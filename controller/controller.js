const registroModel = require('../model/estudiante');

const apiCtrl = {};

apiCtrl.guardarRegistro = (req, res) =>{
    const { cedula, nombre, apellido } = req.body;
    const registro = { cedula, nombre, apellido };
    registroModel.guardarRegistro(registro);
    res.send('Registro exitoso.');
  }
  apiCtrl.listarRegistros = (req, res) =>{

    const registros = registroModel.obtenerRegistros();
    res.json(registros);
  }


module.exports = apiCtrl;