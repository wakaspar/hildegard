var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  date: Date,
  author: String,
  body: Array
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
