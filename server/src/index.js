const express = require('express');
const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
