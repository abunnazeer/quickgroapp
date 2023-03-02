const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const globalErrorHandler = require('./controller/error.controller');
//importing routers
const userRouter = require('./routes/user/user.routers');
const productRouter = require('./routes/products/product.routers');

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// app.all('*', (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

app.use(userRouter);
app.use(productRouter);

// Error Handling midleware
app.use(globalErrorHandler);
module.exports = app;
