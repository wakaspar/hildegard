var db = require('./models')

// ARTICLES: Currently [0] projects long
var articleList = [];
// PROJECTS: Currently [6] projects long
var imageList = [];
// PROJECTS: Currently [6] projects long
var projectList = [];

// articleList: newest --> oldest
articleList.push({
  "title": "Hello World!",
  "date": 1526760117095,
  "author": "Will Kaspar",
  "body": [ {"paragraph":"Welcome to my blog!"},
          {"paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
          {"paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
          {"paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} ]
});
articleList.push({
  "title": "Test One",
  "date": 1526764527926,
  "author": "Will Kaspar",
  "body": [ {"paragraph":"This is a test post."},
          {"paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
          {"paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
          {"paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} ]
});

// imageList: art & process gallery
imageList.push({
  "caption":"coding notebook sketches",
  "thumb":"/process/thumb1.jpg",
  "source":"/images/process/p1.jpg",
  "slideIndex":1
})
imageList.push({
  "caption":"coding notebook sketches",
  "thumb":"/process/thumb2.jpg",
  "source":"/images/process/p2.jpg",
  "slideIndex":2
})
imageList.push({
  "caption":"coding notebook sketches",
  "thumb":"/process/thumb3.jpg",
  "source":"/images/process/p3.jpg",
  "slideIndex":3
})
imageList.push({
  "caption":"coding notebook sketches",
  "thumb":"/process/thumb4.jpg",
  "source":"/process/p4.jpg",
  "slideIndex":4
})
imageList.push({
  "caption":"coding notebook sketches",
  "thumb":"/process/thumb5.jpg",
  "source":"/images/process/p5.jpg",
  "slideIndex":5
})
imageList.push({
  "caption":"coding notebook sketches",
  "thumb":"/process/thumb6.jpg",
  "source":"/images/process/p6.jpg",
  "slideIndex":6
})
imageList.push({
  "caption":"coding notebook sketches",
  "thumb":"/process/thumb7.jpg",
  "source":"/images/process/p7.jpg",
  "slideIndex":7
})
imageList.push({
  "caption":"coding notebook sketches",
  "thumb":"/process/thumb8.jpg",
  "source":"/images/process/p8.jpg",
  "slideIndex":8
})
imageList.push({
  "caption":"coding notebook sketches",
  "thumb":"/process/thumb9.jpg",
  "source":"/images/process/p9.jpg",
  "slideIndex":9
})

// projectList: newest --> oldest
projectList.push ({
  "name": "FreeGoldWatch",
  "buttons":[ {"name":"demo","link":"http://freegoldwatch.herokuapp.com/", "icon":"external alternate", "color":"green"},
          {"name":"repo","link":"https://github.com/wakaspar/FreeGoldWatch", "icon":"github", "color":"black"} ],
  "details": [ {"text":"Consumer-facing site for a local screenprinting shop / pinball arcade"},
          {"text":"Functioning state machine controls the movement of print orders in database"},
          {"text":"Improves responsive design / UX of the business's current website"},
          {"text":"Interacts with the PinballMap & Instagram APIs"} ],
  "role": "Full-stack engineer & consulting web designer",
  "tech": [ {"skill":"Ruby on Rails"},
          {"skill":"PostgreSQL"},
          {"skill":"SaSS"},
          {"skill":"jQuery"},
          {"skill":"Semantic UI"},
          {"skill":"CSS3"},
          {"skill":"Heroku"},
          {"skill":"HTML5"} ],
  "glyphs": [ {"icon":"ruby"},
          {"icon":"rails"},
          {"icon":"heroku"},
          {"icon":"postgresql"},
          {"icon":"jquery"},
          {"icon":"sass"},
          {"icon":"css3"},
          {"icon":"html5"} ],
  "image": "fgw"
});
projectList.push ({
  "name": "Flywheel Coffee Roasters",
  "buttons": [ {"name":"in production","link":"https://flywheelcoffee.com/", "icon":"external alternate", "color":"red"} ],
  "details": [ {"text":"Shopify site for local coffee shop in the Haight district"},
          {"text":"Bulit a new logo from custom art using Adobe PS and AI"},
          {"text":"PHP and .liquid experience from digging through legacy code"} ],
  "role": "Consulting web developer & designer",
  "tech": [ {"skill":"Shopify CMS"},
          {"skill":".liquid"},
          {"skill":"Adobe Photoshop"},
          {"skill":"Adobe Illustrator"},
          {"skill":"HTML5"} ],
  "glyphs": [ {"icon":"wordpress"},
          {"icon":"photoshop"},
          {"icon":"illustrator"},
          {"icon":"css3"},
          {"icon":"html5"} ],
  "image": "fcr"
});
projectList.push ({
  "name": "Flywheel Coffee Events",
  "buttons": [ {"name":"in production", "link":"https://www.flywheelcoffeeevents.com/", "icon":"external alternate", "color":"red"} ],
  "details": [ {"text":"Squarespace site for local beverage catering company"},
          {"text":"Functioning state machine controls the movement of print orders in database."},
          {"text":"Improves responsive design / UX of the business's current website."},
          {"text":"Interacts with the PinballMap & Instagram APIs"} ],
  "role": "Consulting web developer & designer",
  "tech": [ {"skill":"Squarespace CMS"},
          {"skill":"Adobe Photoshop"},
          {"skill":"Adobe Illustrator"},
          {"skill":"jQuery"},
          {"skill":"HTML5"} ],
  "glyphs": [ {"icon":"wordpress"},
          {"icon":"photoshop"},
          {"icon":"illustrator"},
          {"icon":"jquery"},
          {"icon":"css3"},
          {"icon":"html5"} ],
  "image": "fce"
});
projectList.push ({
  "name": "WeHuddle",
  "buttons": [ {"name":"demo", "link":"http://wehuddle.herokuapp.com/", "icon":"external alternate", "color":"green"},
          {"name":"repo", "link":"https://github.com/ychoy/wehuddle", "icon":"github", "color":"black"} ],
  "details": [ {"text":"Real-time chat app powered by Rails5's ActionCable and Redis"},
          {"text":"Full-stack application supporting users and sessions"},
          {"text":"Carrierwave uploads and stores user avatars"},
          {"text":"Open-source library Device handles authorization / authentication"},
          {"text":"Built by Thelma Boamah, Yan Yin Choy, and myself at General Assembly"} ],
  "role": "Full-stack engineer, back-end architecture",
  "tech": [ {"skill":"Squarespace CMS"},
          {"skill":"Adobe Photoshop"},
          {"skill":"Adobe Illustrator"},
          {"skill":"jQuery"},
          {"skill":"HTML5"} ],
"glyphs": [ {"icon":"ruby"},
          {"icon":"rails"},
          {"icon":"redis"},
          {"icon":"heroku"},
          {"icon":"postgresql"},
          {"icon":"jquery"},
          {"icon":"sass"},
          {"icon":"css3"},
          {'icon':"html5"} ],
  "image": "lcm"
});
projectList.push ({
  "name": "OurCade",
  "buttons": [ {"name":"demo", "link":"http://ourcade.bitballoon.com/", "icon":"external alternate", "color":"green"},
          {"name":"repo", "link":"https://github.com/wakaspar/freegoldscores", "icon":"github", "color":"black"} ],
  "details": [ {"text":"AngularJS single-page application that posts high scores from machines at my favorite pinball arcade"},
          {"text":"Interacts with the PinballMap.com API."},
          {"text":"Built for easy scalability - from one arcade to many"},
          {"text":"Mobile-first design"} ],
  "role": "Full-stack engineer",
  "tech": [ {"skill":"Node.js"},
          {"skill":"AngularJS"},
          {"skill":"jQuery"},
          {"skill":"Materalize"},
          {"skill":"CSS3"},
          {"skill":"HTML5"} ],
  "glyphs": [ {"icon":"nodejs"},
          {"icon":"angularjs"},
          {"icon":"heroku"},
          {"icon":"jquery"},
          {"icon":"bootstrap"},
          {"icon":"css3"},
          {"icon":"html5"} ],
  "image": "our"
});
projectList.push ({
  "name": "Ding!",
  "buttons": [ {"name":"demo", "link":"http://ding-levelup.herokuapp.com/", "icon":"external alternate", "color":"green"},
            {"name":"demo", "repo":"https://github.com/medinal/ding", "icon":"github", "color":"black"} ],
  "details": [ {"text":"A skill exchange platform and my first full-stack application"},
            {"text":"Allows users to create and enroll or unenroll in skill-based workshop classes"},
            {"text":"Pair-programmed with Logan Medina"} ],
  "role": "Full-stack engineer",
  "tech": [ {"skill":"Node.js"},
          {"skill":"Express"},
          {"skill":"MongoDB"},
          {"skill":"jQuery"},
          {"skill":"Handlebars"},
          {"skill":"Bootstrap"},
          {"skill":"Herkou"},
          {"skill":"CSS3"},
          {"skill":"HTML5"} ],
  "glyphs": [ {"icon":"nodejs"},
          {"icon":"mongodb"},
          {"icon":"heroku"},
          {"icon":"jquery"},
          {"icon":"bootstrap"},
          {"icon":"css3"},
          {"icon":"html5"} ],
  "image": "dng"
});

// Remove old articles & create new ones
db.Article.remove({}, function(err, articles){
  db.Article.create(articleList, function(err, articles){
    if (err) { return console.log('ERROR', err); }
    console.log("created", articles.length, "articles");
  });
});
// Remove old image refs & create new ones
db.Image.remove({}, function(err, images){
  db.Image.create(imageList, function(err, images){
    if (err) { return console.log('ERROR', err); }
    console.log("created", images.length, "images");
  });
});
// Remove old projects, create new ones, & exit process
db.Project.remove({}, function(err, projects){
  db.Project.create(projectList, function(err, projects){
    if (err) { return console.log('ERROR', err); }
    console.log("created", projects.length, "projects");
    process.exit();
  });
});
