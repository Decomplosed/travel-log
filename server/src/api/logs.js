const { Router } = require('express');

const LogEntry = require('../models/LogEntry');

const router = Router();

router.get('/', async (req, res) => {});

router.post('/', async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (error) {
    console.log(error.constructor.name);
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;
