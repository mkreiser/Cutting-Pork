'use strict';

/**
 * @ngdoc overview
 * @name cuttingPorkApp
 * @description
 * # cuttingPorkApp
 *
 * Main module of the application.
 */
angular
  .module('cuttingPorkApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMaterial',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
