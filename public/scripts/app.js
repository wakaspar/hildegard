/* Angular Application Definition - Hildegard */
var app = angular
  .module('Hildegard', ['ngRoute'])
  .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider){
    /* AngularJS sanity check */
    // console.log('angular working');

    /* Defines AngularJS client-side routing.  When the templateUrl is reached
    by a user, the corresponding controller & template are engaged. */
    $routeProvider
      .when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
      })
      .when('/portfolio', {
        templateUrl: '/templates/portfolio.html',
        controller: 'PortfolioController',
        controllerAs: 'portCtrl'
      })
      .when('/blog', {
        templateUrl: '/templates/blog.html',
        controller: 'BlogController',
        controllerAs: 'blogCtrl'
      })
      .when('/about', {
        templateUrl: '/templates/about.html'
      })
      .when('/blog/:id', {
        templateUrl: '/templates/article.html',
        controller: 'ArticleController',
        controllerAs: 'articleCtrl'
      })

      /* Enables HTML5 mode */
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }
