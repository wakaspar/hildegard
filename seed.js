var db = require('./models')

// Currently [6] projects long
var projectList = [];

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



db.Project.remove({}, function(err, projects){
  // code in here runs after all classes are removed
  db.Project.create(projectList, function(err, projects){
    // code in here runs after all classes are created
    if (err) { return console.log('ERROR', err); }
    console.log("created", projects.length, "projects");
    process.exit();
  });
});
