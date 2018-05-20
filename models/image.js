var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
  caption: String,
  thumb: String,
  source: String,
  slideIndex: Number
});

var Image = mongoose.model("Image", ImageSchema);
module.exports = Image;
