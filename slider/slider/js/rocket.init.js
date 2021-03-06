(function($) {

$.extend(rocket, {
    init: function() {
        // loading object
        rocket.$globalLoading = $('#wrapper .global-loading');
        rocket.$pageLoading = $('#wrapper .page-loading');

        // 全局model
        // var modelvstuiguang = new rocket.model.vstuiguang();

        var router = new rocket.router.slider();

        // 初始化globalview
        new rocket.globalview.sidenav({}, router);
        new rocket.globalview.orientationrestrict({}, router);

        Backbone.history.start();

        function scroll(e){
            // 先设置成足够的高度，确保有足够高度能scrollTo(0, 0)
            // $('#wrapper').height(600);

            // http://remysharp.com/2010/08/05/doing-it-right-skipping-the-iphone-url-bar/
            setTimeout(function(){
                window.scrollTo(0, 0);
                setTimeout(function(){
                    $('#wrapper').height($(window).height());
                }, 0);
                rocket.isLoaded = true;
            }, 1000); 

        }

        $(function(e){
            scroll();
        });

        $(window).on('orientationchange resize', scroll);

        /*
        setTimeout(function(){
            modelvstuiguang.fetch({
                callback: 'vstuiguangCalllback'
            }); 
        }, 300);
        */
    }

});

})(Zepto);    

