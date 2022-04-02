import * as http from 'http';
import express from 'express'
import bodyParser from 'body-parser';
import { getLength, generateRandomStr, isIncluded, showHelpPage } from './text';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/text', (req, res, next) => {
  let text: string;
  const optionArr = req.body.text.split(" ");
  try{
    if(isIncluded(optionArr, '--help')){
      text = showHelpPage();
    }else{
      let length: number = getLength(optionArr);
      text = `text length: ${length}\n ${generateRandomStr(length)}`;
    }
    res.send(text);
  }catch(e: unknown){
    res.send(`エラーが発生しました。\n再度お試しください。`)
  }
});

app.post('/image', (req, res, next) => {
  res.send('image!');
});

http.createServer(app).listen(8080, () => {
  console.log('server listening on port 8080');
});