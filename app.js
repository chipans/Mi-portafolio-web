require('dotenv').config();
const express     = require('express');
const compression = require('compression');
const path        = require('path');
const routes      = require('./routes/index');

const app  = express();
const PORT = process.env.PORT || 3000;

// SIN HELMET por ahora para probar
app.use(compression());

app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '0',  // Sin cache para pruebas
  etag: false,
}));

app.use('/', routes);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n  ➜  http://localhost:${PORT}\n`);
});

module.exports = app;