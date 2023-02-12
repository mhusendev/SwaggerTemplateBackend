require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const passport = require('passport');
const cookieSession = require('cookie-session')
var logger = require('morgan');
const cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/customers');
const { initialize } = require('express-openapi');
const swaggerUi = require('swagger-ui-express');
const mongoose = require('mongoose')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use(cookieSession({
    name: 'secure-molada',
    keys: ['secure', 'mallada'],
    httpOnly: false
  }))
  app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());
app.use('/', indexRouter);
app.use('/', usersRouter);

mongoose.set('strictQuery', false);
console.log(process.env.DATABASE_URL)
mongoose.connect("mongodb://127.0.0.1:27017/dataPeople",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));
 
initialize({
    app,
    apiDoc: require('./src/api-doc'),
    paths:"./src/"
})
app.use(
    "/api-documentation",
    swaggerUi.serve,
    (req, res,next) => {
      if(req.session.isNew) {
        res.send("Dokumentasi hanya untuk yang memiliki otorisasi sebagai developer")
      }
      next()
   },
    swaggerUi.setup(null,{
      swaggerOptions: {
        url: "http://localhost:3000/api-docs",
      },
    }),
  );

module.exports = app;
