'use strict';

angular
  .module('userApp', [
    'ngCookies',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

function ScrollCtrl($scope, $location, $anchorScroll) {
  $scope.gotoTop = function (){
    // set the location.hash to the id of
    // the element you wish to scroll to.
    $location.hash('top');

    // call $anchorScroll()
    $anchorScroll();
  };
}