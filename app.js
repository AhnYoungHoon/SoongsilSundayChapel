const express = require('express');
const morgan = require('morgan');
const path = require('path');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser')



const app = express();

app.set('port', process.env.PORT || 8000);
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
});


const pageRouter = require('./routes/page');

app.use(bodyParser.json());
app.use('/', pageRouter);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'js')));




app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
})