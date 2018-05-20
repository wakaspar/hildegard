angular
  .module('Hildegard')
  .controller('BlogController', BlogController);

BlogController.$inject = ['$http'];
function BlogController($http){
  let vm = this;
  // Get all articles
  $http({
    method: 'GET',
    url: '/api/articles'
  }).then(function successCallback(res) {
    // set vm.articleList to full reponse
    vm.articleList = res.data;
    console.log('$http: ', vm);
  }, function errorCallback(res) {
    console.log('$http fail: ', res);
  });
}
