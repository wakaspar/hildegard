# Hildegard
## Full-stack Personal Development Application & Weblog
***NOTE: Apologies for the potato-quality photos of my wireframes, I tried adjusting the levels in PS and things got worse rather than better.  So, until I can make some nice ones, these will have to suffice.  Your understanding is appreciated.***

Since I first started learning HTML around age 12 or so (I believe it was HTML2), I've built a countless number of personal websites.  _Hildegard_ is a lightweight, scalable, MEAN-stack application and my current personal web app.  This application attempts to solve a handful of criteria:

1.) Funciton as a public-facing conduit to my software development progress & career

2.) Serve as a functioning developer blog

3.) Be as scalable and easy-to-update as possible

Of all personal static sites I've built, they've all had issues and none of them have truly solved the problems above.  Then, early in 2017, I was working a temporary QA gig at local health-tech company here in SF when I started to peer into a page-generating system that they used for their customers.  Basically, they were feeding giant JSON objects into their services and it would simply generate customer-specific pages based on the JSON values, which in this case, were page configurations.

_"Oh, like a giant Angular template powered by a rudimentary CMS,"_ said my brain.  Thus, the planning began.

The contents of this repo, Hildegard, are the culmination of those efforts.  The name comes from an airship of Final Fantasy fame, a trend that started for my personal webapps with the previous iteration of this project, [_Highwind_](https://github.com/wakaspar/highwind "Highwind repo").  Let's take a closer look at the architecture.

## Installation & Setup
This is a pretty standard MEAN stack app, so you can boot accordingly.

Nothing crazy, just make sure you have all your depenedencies in order.
```
$ npm install
$ npm update
$ cd hildegard
$ nodemon
```
Open your browser to localhost:3000


## Architecture ~ Hilde's got a MEAN stack! (ง'-')ง
MEAN stands for MongoDB - Express - AngularJS - Node.js
![MEAN](https://www.teaminindia.com/Content/images/meanstack-componants.jpg "basic MEAN stack architecture")

### MongoDB ![mongodb](https://i.imgur.com/KI74osS.png "mongodb icon")

[MongoDB](https:// "Official Site: MongoDB") is the database library we're employing to store our data (blog articles, projects, artwork) in non-relational documents. Documents work like SQL tables that don't relate to one another.  That said, it is possible to build [references](https://docs.mongodb.com/manual/reference/database-references/ "MongoDB: Database References") from one document to another.  Below are some notes and sketches for the data model abstractions regarding Hildegard:

![hilde3](https://i.imgur.com/w4e9QAj.png "hildegard data abstraction")

As you can see, I originally had a stretch goal including a third document, Task, which would essentially store ToDo lists for me.  As I continued to play with the necessary abstractions for this document, however, I realized that it was almost exactly the same document as Article, so ToDo lists are folded into blog articles for the time being, with the plan to eventually have Task extend from Article, inheriting most of it's traits.  The third document became Artwork, which I used to help make a scalable gallery of my drawings and wireframes on the Portfolio page (lightbox bugs withstanding).  Overall, I'm happy with the functionality afforded to me with my current [models](https://github.com/wakaspar/hildegard/tree/master/models "Hildegard: models").

### Node.js & Express ![nodejs](https://i.imgur.com/oUpXnSs.png "node.js icon")![express](https://i.imgur.com/ovC07tf.png "express icon") 
This section will be brief, as there are plenty of tutorials and documentation on these two technologies.  [Node.js](https://nodejs.org/en/ "Official Site: Node.js") is the JavaScript run-time environment that we're using to run JS outside of our browsers.  This allows us to spin up local servers inside our computers to test websites locally before deploying them on the internet.  When these sites _do_ go into production, Node gives the structure for those live servers to exist as well.  One of my teachers once described it as *a universe-inside-another-universe*, and I rather like that analogy, so let's roll with it.

:![theRicksMustBeCrazy](http://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/8/02/screen_shot_2015-08-31_at_7.11.47_am.png " sounds like slavery w/ extra steps"):

[Express](http://expressjs.com/ "Official Site: Express") is a Node.js library that extends Node.js with a variety of useful service methods, including some to talk to non-relational databases such as MongoDB.  To this end, we're using Express for two things.  First, we're connecting, as well as reading and writing, to our MongoDB documents.  Second, we're building out an Express API for our Angular front-end to consume.

### AngularJS ![angularjs](https://i.imgur.com/Q9NnzDu.png "angular icon")
[AngularJS](http://angular.io/ "Official Site: AngularJS") is a client-side JavaScript library designed for building scalable, modern, single-page front-end application.  It was developed by Google back in the aughts and they've iterated on it a few times since, but Angular 1 and 4 seem to be the most commonly used, with 1 still being the library that I see the most job postings for.  I often describe it to non-technical folks as a proto-React, even though that's not totally accurate - Angular and React are more like two different approaches to solving the same problem - how do we build user interface that can consume massive amounts of data as easily and transparently as possible?  These technologies have ushered out the age page reloads after each user action, which were so ubiquitous back in the heyday of Rails.

Here are some wireframes from the planning phases of Hildegard's front-end:
![hilde1](https://i.imgur.com/zpcXeRR.png "hildegard view wireframes")

In our case, Hildegard's Angular front end makes it easy to craft controllers that pull and sort data from the Express API we talked about above.  Angular also gives us the ability to craft scalable HTML templates, allowing for any number of repeatable content objects to be generated from a single tempate.  The most complicated HTML template I have in Hildegard currently is the 'project' template, a snippet of which is posted below:
```
<!-- PROJECT PORTFOLIO -->
<div class="ui container">
  <h2 class="">Project Portfolio</h2>
  <div class="">
    <hr><br>
  </div>
  <div ng-controller="PortfolioController as portCtrl" class="stackable ui grid">
    <!-- Project Card -->
    <div ng-repeat="project in portCtrl.projectList" class="ui centered stackable grid">
      <div class="column four wide">
        <img src="/images/portfolio/{{ project.image }}-thumb.png" alt="p01" class="p-img ui fluid image centered">
      </div>
      <div class="column six wide">
        <h4 class="my-sub-head">{{ project.name }}</h5>
        <ul ng-repeat="detail in project.details">
          <li>{{ detail.text }}</li>
        </ul>
      </div>
      <div class="column five wide">
        <ul>
          <span style="font-size:2em;"><i ng-repeat="glyph in project.glyphs" class="devicon-{{ glyph.icon }}-plain"> </i></span>
          <p><span class="p-info">Tech Used: </span><span ng-repeat="tech in project.tech">{{ tech.skill }} | </span></p>
          <p><span class="p-info">My Role: </span>{{ project.role }}</p>
          <span ng-repeat="button in project.buttons" class="">
            <a class="ui mobile {{ button.color }} button" ng-href="{{ button.link }}" target="_blank"><i class="{{ button.icon }} icon" aria-hidden="true"></i>{{ button.name }}</a>
          </span>
        </ul>
      </div>
    </div>
  </div>
</div>
```
So, these 30 lines of HTML render all projects accordingly.  As much data is abstracted out as I can, to ensure that, as long as the JSON objects are fed into the MongoDB correctly, the front-end will render all projects automatically.  Thank goodness!  I was sooo tired of updated my portfolio page all the time, creating more opportunites for bugs.

### Wrap Up
That's about it for the architecture, we've got MongoDB documents storing the data, with Express and Node moving them through the server's API and into AngularJS, which renders it to the DOM in the browser.

## Tech Used
+ HTML5/CSS3/JavaScript ES6
+ MongoDB
+ Node.js
+ Express
+ AngularJS
+ [SemanticUI](https://semantic-ui.com/ "Official Site: SemanticUI")
+ [DevIcons](https://konpa.github.io/devicon/ "Official Site: DevIcons") (icon library via CDN)

## ToDo
Currently, Hildegard ToDo's are stored on the site itself.

## Conclusion
Overall, I'm rather happy with Hildegard and where this project is at the moment.  The architecture is strong and the content is scalable.  Moving forward, I'm focused on content creation, finishing lightbox implementation, general bug fixes and aesthetics (making things a bit more flashy & interactive).  I have a lot of ideas and I'm looking forward to seeing what makes the cut.  Thanks for stopping by and checking out this repo.  If you have any questions, comments, or feedback of any nature, feel free to reach out to me at [wakaspar@gmail.com](mailto:wakaspar@gmail.com).

## Credits
My girlfriend/dogo/roomies/friends <3

## License
It's always MIT, right? We'll just say it's MIT

