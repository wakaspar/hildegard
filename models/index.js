var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/api");

module.exports.Article = require("./article");
module.exports.Image = require("./image");
module.exports.Project = require("./project");
