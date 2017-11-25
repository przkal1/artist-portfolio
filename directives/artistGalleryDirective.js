angular.module("artistPortfolioApp").directive('artistGallery', function () {
    return {
        restrict: 'AE',
        link: function (scope, el, attrs) {
            $(el).justifiedGallery({
                border: 6,
                captions: true,
                margins: 30,
                rowHeight: 350
            }).on('jg.complete', function() {
                $(el).lightGallery({
                    thumbnail: true
                });
            });
        }
    };
});
