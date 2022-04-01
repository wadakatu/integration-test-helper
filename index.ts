import * as http from 'http';
import express from 'express'
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/text', (req, res, next) => {
  const length: number = 10;
  res.send('text!');
});

app.post('/img-name', (req, res, next) => {

});

app.post('/image', (req, res, next) => {
  res.send('image!');
});

http.createServer(app).listen(8080, () => {
  console.log('server listening on port 8080');
});