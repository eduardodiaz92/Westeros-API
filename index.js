const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
routerApi(app);
