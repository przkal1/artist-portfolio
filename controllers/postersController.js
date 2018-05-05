angular.module("artistPortfolioApp").controller('postersController', function($scope, $route) {
    $scope.$parent.artSubmenuVisible = false;
    $scope.$parent.designSubmenuVisible = true;
});
