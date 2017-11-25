angular.module("artistPortfolioApp").controller('paintingsController', function($scope, $route) {
    $scope.$parent.artSubmenuVisible = true;

    var $gallery = $('#paintings-gallery');
    if ($gallery.length) {
        $gallery.justifiedGallery({
            border: 6,
            captions: true,
            margins: 30,
            rowHeight: 350
        }).on('jg.complete', function() {
            $gallery.lightGallery({
                thumbnail: true
            });
        });
    };
});
