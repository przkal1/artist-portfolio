angular.module("artistPortfolioApp").controller('otherController', function($scope, $route) {
    $scope.$parent.artSubmenuVisible = false;
    $scope.$parent.designSubmenuVisible = true;
});
