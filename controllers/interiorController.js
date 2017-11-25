angular.module("artistPortfolioApp").controller('interiorController', function($scope, $route) {
    $scope.$parent.artSubmenuVisible = false;

    var $gallery = $('#interior-gallery');
    if ($gallery.length) {
        $gallery.justifiedGallery({
            border: 6,
            captions: true,
            margins: 20,
            rowHeight: 300
        }).on('jg.complete', function() {
            $gallery.lightGallery({
                thumbnail: true
            });
        });
    };
});
