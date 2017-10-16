angular.module("artistPortfolioApp").controller('graphicController', function($scope, $route) {
    $scope.$parent.artSubmenuVisible = true;

    var $gallery = $('#graphic-gallery');
    if ($gallery.length) {
        $gallery.justifiedGallery({
            border: 6,
            captions: true,
            margins: 10,
            rowHeight: 200
        }).on('jg.complete', function() {
            $gallery.lightGallery({
                thumbnail: true
            });
        });
    };
});
