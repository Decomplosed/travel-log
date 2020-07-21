const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredNumber = {
  type: Number,
  required: true,
};

const defaultRequiredDate = {
  type: Date,
  default: Date.now,
  required: true,
};

const logEntrySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  comments: String,
  image: String,
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
  },
  latitude: requiredNumber,
  longitude: requiredNumber,
  visitDate: {
    required: true,
    type: Date,
  },
  created_at: defaultRequiredDate,
  updated_at: defaultRequiredDate,
});
