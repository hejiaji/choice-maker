import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use('/', router);

const port = process.env.PORT || 3088

app.listen(port, function () {
  console.log(`App listening on port ${port}!`)
});