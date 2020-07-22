const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'root route',
  });
});

module.exports = router;
