angular.module("artistPortfolioApp").controller('designController', function($scope, $route) {
    $scope.$parent.artSubmenuVisible = false;

    var $gallery = $('#design-gallery');
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
