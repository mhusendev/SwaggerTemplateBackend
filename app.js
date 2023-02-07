var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { initialize } = require('express-openapi');
const swaggerUi = require('swagger-ui-express')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
const port = 8082
app.use(
    "/api-documentation",
    swaggerUi.serve,
    swaggerUi.setup(null, {
      swaggerOptions: {
        url: "http://localhost:3030/api-docs",
      },
    })
  );
app.listen(port ,()=>{
    console.log(`server start on port ${port}`)
});
initialize({
    app,
    apiDoc: require('./api/api-doc'),
    paths:"./api/paths/users"
})

module.exports = app;
