//publico
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/videojuegos', { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = mongoose;

//privado
const mongoose = require('mongoose');
const opciones = {
  user: "usuario",
  pass: "123",
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.connect('mongodb://localhost:27017/videojuegos?authSource=nombre_base_de_datos_que_contiene_usuario', opciones);
module.exports = mongoose;