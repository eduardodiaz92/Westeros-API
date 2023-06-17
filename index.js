const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});
//Los endpoins que tengas de forma especifica deben ir antes
//de los endpoints que tengas de forma dinamica
//Params
app.get('/kingdoms/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    house: 'Stark',
  });
});
//Query params
app.get('/kingdoms', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
