const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
app.use(morgan('common'));
app.use(helmet());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening at port: ${PORT}`);
});
