// ============================================
//  RUTAS DEL PORTAFOLIO
// ============================================

const express = require('express');
const path    = require('path');
const router  = express.Router();

// Página principal
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// API: datos del portafolio (útil si quieres extender con frontend dinámico)
router.get('/api/info', (req, res) => {
  res.json({
    nombre:    'Jorge Chipana',
    rol:       'Estudiante de Ingeniería de Sistemas',
    semestre:  '7mo semestre',
    universidad: 'Universidad Adventista de Bolivia – Vinto',
    contacto: {
      github:    'https://github.com/dashboard',
      whatsapp:  'https://wa.me/9173719750',
      email:     'jorchistauro@gmail.com'
    }
  });
});

module.exports = router;
