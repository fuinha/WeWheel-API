// Load required packages
var mongoose = require("mongoose");

// Define our user schema
var RateSchema = new mongoose.Schema({
  UserId: {
    type: String
  },
  CarId: String,
  Content: {
    type: Number,
  },
  Date: {
    type: Date,
    default: Date.now
  }
});

// Export the Mongoose model
module.exports = mongoose.model("Rate", RateSchema);