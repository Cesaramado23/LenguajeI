const apiCtrl = {};
const registroModel = require('../model/estudiante');
const Usuario = require('../model/estudiante');


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
  apiCtrl.Registrar = async (req, res) =>{
    const {cedula, nombre, apellido, sexo,matematica,ingles,castellano,biologia} = req.body;
    let Respuesta='Error';
    let Mensaje='Estudiante ya registrado'
    const buscar = await Usuario.findOne({cedula});
    if (buscar===null){
        const nuevo = Usuario({cedula, nombre, apellido, sexo,matematica,ingles,castellano,biologia});
        await nuevo.save()
        Respuesta='Ok';
        Mensaje='Registro exitoso'
    }
    
   
    res.json({Respuesta, Mensaje, fecha:new Date()});
}
apiCtrl.Consulta = async (req, res) =>{
  let registros = await Usuario.find();
  res.json(registros);
}

module.exports = apiCtrl;