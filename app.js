var artistPortfolioApp = angular.module('artistPortfolioApp', ["ngRoute"]);

artistPortfolioApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            template: 'main'
        })
        .when('/paintings', {
            templateUrl : 'pages/subpages/paintings.html',
            controller  : 'paintingsController'
        })
        .when('/graphic', {
            templateUrl : 'pages/subpages/graphic.html',
            controller  : 'graphicController'
        })
        .when('/reliefs', {
            templateUrl : 'pages/subpages/reliefs.html',
            controller  : 'reliefsController'
        })
        .when('/sketches', {
            templateUrl : 'pages/subpages/sketches.html',
            controller  : 'sketchesController'
        })
        .when('/video', {
            templateUrl : 'pages/subpages/video.html',
            controller  : 'videoController'
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
