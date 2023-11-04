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