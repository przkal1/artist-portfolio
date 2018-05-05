var artistPortfolioApp = angular.module('artistPortfolioApp', ["ngRoute", "ngAnimate"]);

artistPortfolioApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/art/paintings.html',
            controller  : 'paintingsController'
        })
        .when('/paintings', {
            templateUrl : 'pages/art/paintings.html',
            controller  : 'paintingsController'
        })
        .when('/graphic', {
            templateUrl : 'pages/art/graphic.html',
            controller  : 'graphicController'
        })
        .when('/reliefs', {
            templateUrl : 'pages/art/reliefs.html',
            controller  : 'reliefsController'
        })
        .when('/video', {
            templateUrl : 'pages/art/video.html',
            controller  : 'videoController'
        })
        .when('/posters', {
            templateUrl : 'pages/design/posters.html',
            controller  : 'postersController'
        })
        .when('/fliers', {
            templateUrl : 'pages/design/fliers.html',
            controller  : 'fliersController'
        })
        .when('/textile', {
            templateUrl : 'pages/design/textile.html',
            controller  : 'textileController'
        })
        .when('/other', {
            templateUrl : 'pages/design/other.html',
            controller  : 'otherController'
        })
        .when('/design', {
            templateUrl : 'pages/design.html',
            controller  : 'designController'
        })
        .when('/shows', {
            templateUrl : 'pages/shows.html',
            controller  : 'showsController'
        })
        .when('/interior', {
            templateUrl : 'pages/interior.html',
            controller  : 'interiorController'
        })
        .when('/about', {
            templateUrl : 'pages/aboutme.html',
            controller  : 'aboutController'
        })
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })
        .otherwise({redirectTo: '/'});

        $locationProvider.hashPrefix('');
});
