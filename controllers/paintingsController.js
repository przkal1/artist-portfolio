angular.module("artistPortfolioApp").controller('paintingsController', function($scope, $route) {
    $scope.$parent.artSubmenuVisible = true;
    $scope.$parent.designSubmenuVisible = false;
});
