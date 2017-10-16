var artistPortfolioApp = angular.module('artistPortfolioApp', ["ngRoute"]);

artistPortfolioApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            template: ''
        })

        .when('/design', {
            templateUrl : 'design0.htm',
            controller  : 'designController'
        })
        .otherwise({redirectTo: '/'});
        //
        // .when('/shows', {
        //     templateUrl : 'pages/shows.html',
        //     controller  : 'showsController'
        // })
        //
        // .when('/interior', {
        //     templateUrl : 'pages/interior.html',
        //     controller  : 'interiorController'
        // })
        //
        // .when('/about', {
        //     templateUrl : 'pages/aboutme.html',
        //     controller  : 'aboutController'
        // })
        //
        // .when('/contact', {
        //     templateUrl : 'pages/contact.html',
        //     controller  : 'contactController'
        // });

        $locationProvider.hashPrefix('');
});

// create the controller and inject Angular's $scope
artistPortfolioApp.controller('mainController', function($scope, $route) {
});

artistPortfolioApp.controller('designController', function($scope, $route) {
});

artistPortfolioApp.controller('showsController', function($scope) {
});

artistPortfolioApp.controller('interiorController', function($scope) {
});

artistPortfolioApp.controller('aboutController', function($scope) {
});

artistPortfolioApp.controller('contactController', function($scope) {
});
