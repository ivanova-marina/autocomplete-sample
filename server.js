import express from 'express';
import * as url from 'url';

const app = express();
const port = 3000;

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'public/index.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + 'public/login.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
