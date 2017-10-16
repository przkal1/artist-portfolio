angular.module("artistPortfolioApp").controller('mainController', function($scope, $route) {
    $scope.mobMenuToggle = false;

    $scope.toggleMenu = function() {
        $scope.mobMenuToggle = !$scope.mobMenuToggle;
    }
});
