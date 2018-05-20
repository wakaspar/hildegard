var db = require('./models')

// ARTICLES: Currently [0] projects long
var articleList = [];
// PROJECTS: Currently [6] projects long
var imageList = [];
// PROJECTS: Currently [6] projects long
var projectList = [];

// articleList: newest --> oldest
articleList.push({
  "title": "wakaspar.com - v.3.0: Hildegard",
  "date": 1526764527926,
  "author": "Will Kaspar",
  "body": [ {"paragraph":"Welcome to Hildegard! This blog post is meant to serve as a development journal for this new, full-stack peronal web application I've launched."},
          {"paragraph":"Continuing my recent convetion of naming personal projects after old airships from different Final Fantasy games, I've decided to name this project, 'Hildegard,' and it will thusly be referred to as such. The idea for Hildegard was rather starightforward - I was tired of having to rebuild my personal website everytime I wanted to feature a new project.  There was just so much copy-pasta every few weeks that I was getting rather annoyed."},
          {"paragraph":"The next motivation was to build a place where I could easily store my thoughts and processes, as well as the occasional ToDo list, to help me keep track of where I'm at and what I'm doing with current projects.  I also wanted this 'blog' element to function flexibly, but scale effortlessly."},
          {"paragraph":"My solution was to build a MEAN stack application that features two main tables: Articles & Projects.  The Articles table populates the blog with all the information you could want for a blog post, but keeps the format open - a 'post' can double as a 'todo list' or more of a 'journal entry', as this post is serving."},
          {"paragraph":"I'm happy to have a place to store my thoughts, and it's been very fulfilling to build an application for my own personal use.  Stretch goals include: fixing date formatting for blog posts and findiing a better solution for scaling my lightbox.  Dates are currently stored in the database in their INT ms form, so I know that I need to convert them back to readable strings at some point.  I just haven't quite figured out where angular wants me to do that.  Working with the JavaScript Date() object is easy enough.  Ideally, I want my lightbox to simply scan a page for images and build a gallery out of whatever is there.  I'm close, but I'm having trouble with the angular code passing values into a seperate JavaScript file.  More research is necessary."} ]
});
articleList.push({
  "title": "Hello World!",
  "date": 1526760117095,
  "author": "Will Kaspar",
  "body": [ {"paragraph":"Welcome to my blog!"},
          {"paragraph":"This blog is meant to serve as a development journal, ToDo list repository, and perhaps storage for certain developer notes."},
          {"paragraph":"I'll update as often as necessary."} ]
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
  "buttons":[ {"name":"demo","link":"http://freegoldwatch.herokuapp.com/", "icon":"external alternate", "color":"blue"},
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
  "buttons": [ {"name":"in production","link":"https://flywheelcoffee.com/", "icon":"external alternate", "color":"blue"} ],
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
  "buttons": [ {"name":"in production", "link":"https://www.flywheelcoffeeevents.com/", "icon":"external alternate", "color":"blue"} ],
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
  "buttons": [ {"name":"demo", "link":"http://wehuddle.herokuapp.com/", "icon":"external alternate", "color":"blue"},
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
  "image": "whd"
});
projectList.push ({
  "name": "OurCade",
  "buttons": [ {"name":"demo", "link":"http://ourcade.bitballoon.com/", "icon":"external alternate", "color":"blue"},
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
  "buttons": [ {"name":"demo", "link":"http://ding-levelup.herokuapp.com/", "icon":"external alternate", "color":"blue"},
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
