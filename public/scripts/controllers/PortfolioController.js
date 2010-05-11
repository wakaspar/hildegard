angular
  .module('Hildegard')
  .controller('PortfolioController', PortfolioController);

PortfolioController.$inject = ['$http'];
function PortfolioController($http){
  // console.log('PortfolioController works!');

  let vm = this;
  // Get all projects
  $http({
    method: 'GET',
    url: '/api/projects'
  }).then(function successCallback(res) {
    // set vm.projectList to full reponse
    vm.projectList = res.data;
    console.log('$http: ', vm);
  }, function errorCallback(res) {
    console.log('$http fail: ', res);
  });


}
