const fs = require('fs');
const registroModel = {
  obtenerRegistros: () => {
    try {
      const data = fs.readFileSync('registros.json', 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  },
  guardarRegistro: (registro) => {
    const registros = registroModel.obtenerRegistros();
    registros.push(registro);
    fs.writeFileSync('registros.json', JSON.stringify(registros));
  },
};

module.exports = registroModel;

const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema(
    {
        cedula:  {
            type: String,
            trim: true,
            unique:true
        },
        nombre:  {
            type: String,
            trim: true,
        },
        apellido:  {
            type: String,
            trim: true,
        },
        sexo:String,
        matematica: Number,
        ingles: Number,
        castellano: Number,
        biologia: Number
        

    }, {
        timestamps: true
    });
    usuarioSchema.index({'$**': 'text'});
module.exports = model('Usuario', usuarioSchema);