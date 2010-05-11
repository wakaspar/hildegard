/* Server.js contains JavaScript code that powers Node's
Express Server & API */

// Express server definition
var express = require('express');
// Defines 'app' as a new Express app.
var app = express();
// Load up MongoDB noSQL data models
var db = require('./models');
// Profile Data: hardcoded to server as it's static and not used often.
var profile = {
  name: "Will Kaspar",
  githubLink: "https://github.com/wakaspar",
  githubProfileImage: "https://avatars2.githubusercontent.com/u/22823273?v=3&s=460",
  personalSiteLink: "https://wakaspar.com/",
  currentProjectName: "Hildegard",
  currentCity: "San Francisco, CA",
  pets: [
    {name: 'Indigo', type: 'dog', breed: 'cattle-beagle'},
    {name: 'Furball', type: 'fish', breed: 'goldfish'}
  ],
  plants: [
    {name: 'Bernard', type: 'plant', breed: 'aeonium arboreum'},
    {name: 'Francis', type: 'plant', breed: 'sempervivum tectorum'}
  ]
};

// Handles CORS errors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Serve static files from /public
app.use(express.static('public'));

/* HTML Endpoints */
// Serves index.html as homepage
app.get('/', function (req, res){
  res.sendFile(__dirname + '/index.html');
})
// Serves 'profile' as .json
app.get('/profile', function (req, res){
  res.send(profile);
})
// Serves html files from /templates
app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});

/* JSON Endpoints */
// Get all projects
app.get('/api/projects', function allBooks(req, res){
  db.Project.find(function(err, projects){
    if(err){console.log('GET /api/projects error: ', err);}
    res.send(projects);
  })
})

/* Server Catch-all */
// redirect all other paths to index
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});

// Listen on port 3000
app.listen(process.env.PORT || 3000, function(){
  console.log('Hilde airborne and listening @ localhost:3000/');
});
