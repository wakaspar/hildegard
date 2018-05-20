angular
  .module('Hildegard')
  .controller('HomeController', HomeController);

HomeController.$inject = ['$http'];
function HomeController($http){
  let vm = this;
  // Get all projects
  $http({
    method: 'GET',
    url: '/api/projects/'
  }).then(function successCallback(res) {
    vm.projectList = res.data;
  }, function errorCallback(res) {
    console.log('$http fail: ', res);
  });
  // Get all articles
  $http({
    method: 'GET',
    url: '/api/articles/'
  }).then(function successCallback(res) {
    // set vm.articleList to full reponse
    vm.articleList = res.data;
    console.log('$http: ', vm);
  }, function errorCallback(res) {
    console.log('$http fail: ', res);
  });
}
