var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/api");

module.exports.Article = require("./article");
module.exports.Project = require("./project");
