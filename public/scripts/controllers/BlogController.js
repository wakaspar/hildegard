angular
  .module('Hildegard')
  .controller('BlogController', BlogController);

// BlogController.$inject = ['$http'];
function BlogController(){
  console.log('BlogController works!');
}
