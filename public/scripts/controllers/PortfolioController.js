angular
  .module('Hildegard')
  .controller('PortfolioController', PortfolioController);

PortfolioController.$inject = ['$http'];
function PortfolioController($http){
  let vm = this;
  // Get all projects
  $http({
    method: 'GET',
    url: '/api/projects'
  }).then(function successCallback(res) {
    // set vm.projectList to full reponse
    vm.projectList = res.data;
  }, function errorCallback(res) {
    console.log('$http fail: ', res);
  });
  $http({
    method: 'GET',
    url: '/api/images'
  }).then(function successCallback(res) {
    // set vm.imageList to full reponse
    vm.imageList = res.data;
    console.log('$http: ', vm);
  }, function errorCallback(res) {
    console.log('$http fail: ', res);
  });


}
