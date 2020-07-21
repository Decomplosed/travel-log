const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.use();

// eslint-disable-next-line no-unused-vars
app.use();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening at port: ${PORT}`);
});
