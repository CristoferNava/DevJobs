const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // Hacemos que mongoose nos devuelva promosas
const slug = require('slug');
const shortid = require('shortid');

// Creamos el esquema
const jobsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'El campo es obligatorio',
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true,
    required: 'El campo es obligatorio'
  },
  salary: {
    type: String,
    default: 0
  },
  contract: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    lowercase: true
  },
  skills: [String],
  aspirants: [{
    name: String,
    email: String,
    cv: String
  }]
});
// Hacemos uso de middlwares para poder ejecutar acciones antes 
// Creamos la URL de manera dinámica para cada proyecto
jobsSchema.pre('save', function(next) {
  const url = slug(this.title);
  this.url = `${url}-${shortid.generate}`;

  next();
});

 module.exports = mongoose.model('Jobs', jobsSchema);