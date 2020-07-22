const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const middlewares = require('./middlewares');
const logs = require('./api/logs');

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.use(middlewares.notFound);

app.use(middlewares.errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening at port: ${PORT}`);
});
