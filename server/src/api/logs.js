const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'root route',
  });
});

router.post('/', (req, res) => {})

module.exports = router;
