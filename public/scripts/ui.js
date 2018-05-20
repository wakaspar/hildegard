/* NOTE: User Interface JavaScript: This file contains code that controls
user interface, such as the dropdown menu & jQuery. */

/* Navigation Controls */
function openNav() {
  document.getElementById("nav").style.width = "100vw";
}
function closeNav() {
  document.getElementById("nav").style.width = "0vw";
}


/* jQuery */
$(document).ready(function(){
  console.log('jQuery working!');

  $('.article-date').on('click', function(e){
    console.log('hi');
  });

}); // closes document.ready();
