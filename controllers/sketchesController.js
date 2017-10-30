angular.module("artistPortfolioApp").controller('sketchesController', function($scope, $route) {
    $scope.$parent.artSubmenuVisible = true;

    var $gallery = $('#sketches-gallery');
    if ($gallery.length) {
        $gallery.justifiedGallery({
            border: 6,
            captions: true,
            margins: 20,
            rowHeight: 350
        }).on('jg.complete', function() {
            $gallery.lightGallery({
                thumbnail: true
            });
        });
    };
});
