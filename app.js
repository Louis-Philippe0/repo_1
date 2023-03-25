import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import mime from 'mime-types';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/:file', (req, res) => {
  const file = req.params.file;
  const filePath = path.join(__dirname, file);
  const mimeType = mime.lookup(filePath);
  if (!mimeType) {
    res.status(404).send('Not found');
    return;
  }
  res.setHeader('Content-Type', mimeType);
  res.sendFile(filePath);
});

app.listen(9000, () => {
  console.log('app listening on port 9000');
});
