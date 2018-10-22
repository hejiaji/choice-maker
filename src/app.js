import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';
let app = express();
const port = 3088;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

app.listen(port, function () {
  console.log(`App listening on port ${port}!`)
});