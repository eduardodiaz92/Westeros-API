const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
routerApi(app);
