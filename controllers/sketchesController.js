angular.module("artistPortfolioApp").controller('sketchesController', function($scope, $route) {
    $scope.$parent.artSubmenuVisible = true;
    $scope.$parent.designSubmenuVisible = false;
});
