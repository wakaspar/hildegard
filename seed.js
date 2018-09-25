var db = require('./models')

// ARTICLES: Currently [6] articles long; newest -> oldest
var articleList = [
  {
    "title": "(~˘▾˘)~ Autumn Updates",
    "date": 1537845379463,
    "author": "Will Kaspar",
    "body": [ {"paragraph":"It's been a while since I wrote anything in here, so I figure it's time to collect some thoughts.  But first, quick updates: after teaching in Berkeley, they moved me to Stanford a couple weeks later to teach high schoolers and middle schoolers.  I'll do a deep-dive of how I iterated the cirriculum and the results in a separate article.  Since then, I've been wrapping up work on a freelance client rebranding effort that I've been working on alongside teaching.  With this wrapped up, I've started interviewing for developer jobs downtown again."},
            {"paragraph":"So far, I feel like interviews are going well.  I'm still making rookie mistakes here and there - today I learned that my GitHub is severly under-documented and I have a lot of clean-up and documentation to write regarding past and current repos.  That said, this was some of the first honest, straight-forward feedback that I've recieved from any company that I've interviewed with, so I appreciate it greatly. I understand that it's always a risk for a company to give a candidate any kind of feedback, for fear of legal repurcussions.  I'm looking forward to writing my own documentation again - something I havne't really done in earnest since General Assembly days."},
            {"paragraph":"Overall, I'm hanging in there.  I really couldn't do it without support from my friends, roommates, and especially my girlfriend - who supports me endlessly.  More specifics about classwork and the like to come soon.  For now, I've "} ]
  },
  {
    "title": "Teaching Coding in Berkeley </>",
    "date": 1530830528932,
    "author": "Will Kaspar",
    "body": [ {"paragraph":"So, for the last several weeks, I've been teaching coding at a couple of summer camps.  Mostly, I spend my mornings and afternoons teaching ittle-bitty's how to Scratch together blocks and make simple games, but this week, I'm up in Berkeley, teaching a web design and development course to some high schoolers.  It's been absolutely delightful.  The students are smart, they've managed to put together some rad websites, and I'm hella proud of everything that they've learned in a just a week of coding.  They all have some experience with code, but most have simply written Java loops and this is the first time they've approached a custom application.  I'm going to outline our class sequence below:"},
            {"paragraph":"To start, we got all of our tools set up.  I introduced the Command Prompt (windows machines, oof) as well as Paint (for image editing) and Atom (for text/file editing).  Once that was done, I introduced HTML and CSS, starting by just building out a simple HTML template and explaining how to create and set attributes on an element.  Once that was done, I started adding 'style' attributes to begin our exploration of how CSS can affect our displayed elements.  By the end of the first day, we had html & css files linked together and talking to one another, building out elements and giving them style to make everything pretty.  Next, would come JavaScript, and my three students (Emma, Fawwaz, and Tianyu), couldn't have been more stoked."},
            {"paragraph":"On the second day, I introduced JavaScript.  We started with basic variable definition and data types, then moved into common patterns such as loops, conditionals, and functions.  I stayed off of constructors, as we talked only briefly about objects. There was an attempt to do some Vanilla JS DOM manipulation, but who really does that anyway?  So, I taught my class how to CDN into jQuery and start setting up event listeners on their pages in a way that isn't buggy as hell and completely infuriating at times.  I was honestly surprised how well that worked, as they picked up event listeners rather easily and began giving their pages interactivity.  'Woah,' I thought, 'I wasn't even sure we were going to make it this far...awesome, let's keep going!  Thus, the decision was made to introduce APIs."},
            {"paragraph":"We took a break on Wednesday (July 4) and just had a build day.  Work with what you know, let it sink in, get some stuff made.  That was the goal.  I felt like it worked well, and the girls, in particular, used it as an opportunity to deep dive into their projects, the results of which I'm very impressed with.  Thursday morning, I demo'ed my good buddy $.ajax() and his async data-gathering radness by making a page that simply grabs random images of dogs when you hit a button.  It may be one of my favorite pointless apps I've ever built.  There's something totally fun about just looking at random images of dogs.  With all my planned material dished out, on Friday we finished building and I introduced the CMS platforms we used to host our sites.  BitBalloon, in particular, is crazy-simple.  I also demo'ed NeoCities, which is a little less autonomous, but gives you more initial control over how your website is organized on the CMS.  Good stuff, I think they're just excited to be able to put in a URL on any computer and get to see their work. Admittedly, I remember the first time I did that as well, and there's a real sense of accomplishment, a real dopamine hit, that comes along with it."},
            {"paragraph":"Overall, this as been a rewarding experience for me.  While I have a lot of experience teaching young children, I found teaching high-schoolers to be much more my wheelhouse, especially when teaching tech/coding.  At that age, they just love being given more control and more power over their own lives.  I remember being 15, and I remember that feeling.  I'm just glad that I could help some fellow little nerds hone their passions.  11/10, would do again."},
            {"paragraph":"That's all I got for today, Kaspar out!"} ]
  },
  {
    "title": "Hildegard ToDo's",
    "date": 1527034539078,
    "author": "Will Kaspar",
    "body": [ {"paragraph":"This article is a list of things that need to be finished on this website:"},
            {"paragraph":"blog list implementation | convert date strings to readable format | lightbox window scaling | automate lightbox galleries by page layout; project & process are seperate instances | accent colors? (i like coral) | automate article layout (indents & photos) | about page indents | "} ]
  },
  {
    "title": "wakaspar.com - v.3.0: Hildegard",
    "date": 1526764527926,
    "author": "Will Kaspar",
    "body": [ {"paragraph":"Continuing my recent convetion of naming personal projects after old airships from Final Fantasy games, I've decided to name this project, 'Hildegard.'  The idea for Hildegard was rather starightforward - I was tired of having to rebuild my personal website everytime I wanted to feature a new project.  There was just so much copy-pasta every few weeks that I was getting rather annoyed."},
            {"paragraph":"The next motivation in building this blog was to build a place where I could easily store my thoughts and processes, as well as the occasional ToDo list, to help me keep track of where I'm at and what I'm doing with current projects.  I also wanted this 'blog' element to function flexibly, but scale effortlessly."},
            {"paragraph":"My solution was to build a MEAN stack application that features two main tables: Articles & Projects.  The Articles table populates the blog with all the information you could want for a blog post, but keeps the format open - a 'post' can double as a 'todo list' or more of a 'journal entry', as this post is serving."},
            {"paragraph":"I'm happy to have a place to store my thoughts, and it's been very fulfilling to build an application for my own personal use.  Stretch goals include: fixing date formatting for blog posts and findiing a better solution for scaling my lightbox.  Dates are currently stored in the database in their INT ms form, so I know that I need to convert them back to readable strings at some point.  I just haven't quite figured out where angular wants me to do that.  Working with the JavaScript Date() object is easy enough.  Ideally, I want my lightbox to simply scan a page for images and build a gallery out of whatever is there.  I'm close, but I'm having trouble with the angular code passing values into a seperate JavaScript file.  More research is necessary."} ]
  },
  {
    "title": "Hello World!",
    "date": 1526760117095,
    "author": "Will Kaspar",
    "body": [ {"paragraph":"Welcome to my blog!"},
            {"paragraph":"This blog is meant to serve as a development journal, ToDo list repository, and perhaps storage for certain developer notes."} ]
  }
];

// IMAGES: Currently [8] images long
var imageList = [
  {
    "caption": "coding notebook sketches",
    "thumb": "/process/thumb1.jpg",
    "source": "/images/process/p1.jpg",
    "slideIndex": 1
  },
  {
    "caption": "coding notebook sketches",
    "thumb": "/process/thumb2.jpg",
    "source": "/images/process/p2.jpg",
    "slideIndex": 2
  },
  {
    "caption": "coding notebook sketches",
    "thumb": "/process/thumb3.jpg",
    "source": "/images/process/p3.jpg",
    "slideIndex": 3
  },
  {
    "caption": "coding notebook sketches",
    "thumb": "/process/thumb5.jpg",
    "source": "/images/process/p5.jpg",
    "slideIndex": 5
  },
  {
    "caption": "coding notebook sketches",
    "thumb": "/process/thumb6.jpg",
    "source": "/images/process/p6.jpg",
    "slideIndex": 6
  },
  {
    "caption": "coding notebook sketches",
    "thumb": "/process/thumb7.jpg",
    "source": "/images/process/p7.jpg",
    "slideIndex": 7
  },
  {
    "caption":"coding notebook sketches",
    "thumb":"/process/thumb8.jpg",
    "source":"/images/process/p8.jpg",
    "slideIndex":8
  },
  {
    "caption": "coding notebook sketches",
    "thumb": "/process/thumb9.jpg",
    "source": "/images/process/p9.jpg",
    "slideIndex": 9
  }
];

/* {
   "caption": "coding notebook sketches",
   "thumb": "/process/thumb4.jpg",
   "source": "/process/p4.jpg",
   "slideIndex": 4
 }, removed for Drake reference on drawing */

// PROJECTS: Currently [6] projects long; newest --> oldest
var projectList = [
  {
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
  },
  {
    "name": "Flywheel Coffee Events",
    "buttons": [ {"name":"in production", "link":"https://www.flywheelcoffeeevents.com/", "icon":"external alternate", "color":"blue"} ],
    "details": [ {"text":"Squarespace site for local beverage catering company"},
            {"text":"Functioning state machine controls the movement of print orders in database."},
            {"text":"ImproveD responsive design / UX of the business's current website."},
            {"text":"Improved SEO, resulting in increased business for client"} ],
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
  },
  {
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
            {"skill":"CSS3"},
            {"skill":"HTML5"} ],
    "glyphs": [ {"icon":"wordpress"},
            {"icon":"photoshop"},
            {"icon":"illustrator"},
            {"icon":"css3"},
            {"icon":"html5"} ],
    "image": "fcr"
  },
  {
    "name": "WeHuddle",
    "buttons": [ {"name":"demo", "link":"http://wehuddle.herokuapp.com/", "icon":"external alternate", "color":"blue"},
            {"name":"repo", "link":"https://github.com/ychoy/wehuddle", "icon":"github", "color":"black"} ],
    "details": [ {"text":"Real-time chat app powered by Rails5's ActionCable and Redis"},
            {"text":"Full-stack application supporting users and sessions"},
            {"text":"Carrierwave uploads and stores user avatars"},
            {"text":"Open-source library Device handles authorization / authentication"},
            {"text":"Built by Thelma Boamah, Yan Yin Choy, and myself at General Assembly"} ],
    "role": "Full-stack engineer, back-end architecture",
    "tech": [ {"skill":"Ruby On Rails"},
            {"skill":"Redis"},
            {"skill":"PostgreSQL"},
            {"skill":"Heroku"},
            {"skill":"jQuery"},
            {"skill":"Sass"},
            {"skill":"CSS3"},
            {"skill":"HTML5"} ],
  "glyphs": [ {"icon":"ruby"},
            {"icon":"rails"},
            {"icon":"redis"},
            {"icon":"postgresql"},
            {"icon":"heroku"},
            {"icon":"jquery"},
            {"icon":"sass"},
            {"icon":"css3"},
            {'icon':"html5"} ],
    "image": "whd"
  },
  {
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
  },
  {
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
  }
];

// DATABASE SEEDER / HELPER METHODS
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

/* NEW CONTENT TEMPLATES
NOTE: New Article Template
{
  "title": "",
  "date": ,
  "author": "Will Kaspar",
  "body": [ {"paragraph":""},
  {"paragraph":""} ]
},

NOTE: New Image Template
{
  "caption": "",
  "thumb": ".jpg",
  "source": ".jpg",
  "slideIndex":
},

NOTE: New Project Template
{
  "name": "",
  "buttons":[ {"name": "", "link": "", "icon": "", "color": ""},
          {"name": "", "link": "", "icon": "", "color": ""} ],
  "details": [ {"text": ""},
          {"text": ""},
          {"text": ""},
          {"text": ""} ],
  "role": "",
  "tech": [ {"skill": ""},
          {"skill": ""},
          {"skill": ""},
          {"skill": ""},
          {"skill": ""},
          {"skill": ""},
          {"skill": ""},
          {"skill": ""} ],
  "glyphs": [ {"icon": ""},
          {"icon": ""},
          {"icon": ""},
          {"icon": ""},
          {"icon": ""},
          {"icon": ""},
          {"icon": ""},
          {"icon": ""} ],
  "image": ".jpg"
}
*/
