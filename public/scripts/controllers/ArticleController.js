angular
  .module('Hildegard')
  .controller('ArticleController', ArticleController);

ArticleController.$inject = ['$http', '$routeParams', '$location'];
function ArticleController($http, $routeParams, $location){
  console.log('ArticleController works!');

  let vm = this;
  //Get one article
  $http({
    method: 'GET',
    url: '/api/articles/' + $routeParams.id
  }).then(function successCallback(res) {
    // set vm.article to full reponse
    vm.article = res.data;
    console.log('$http: ', vm);
  }, function errorCallback(res) {
    console.log('$http fail: ', res);
  });
}
