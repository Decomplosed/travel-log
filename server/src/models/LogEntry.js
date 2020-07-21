const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredString = {
  type: String,
  required: true,
};

const logEntrySchema = new Schema({
  title: { type: String, required: true },
  description: String,
});
