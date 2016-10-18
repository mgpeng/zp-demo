var HeaderTextSearchLogo=(function(){
    var firstOpenAni = function(){
         var cnt=$(".header-text-search-container");
             var search=cnt.find(".header-search__container");
             var title=cnt.find(".header-text__title>span");
             var tagline=cnt.find(".header-text__content>span");
             var tl = new TimelineLite();
                tl.set(cnt,{visibility:"visible"})
                // .from(search,1, {right:"-=60px", ease:Back.easeOut})
                .from(title, 0.35, {width:"0px", alpha:0, backgroundColor:"rgb(20.9%, 96%, 20.9%)"}, "-=0.2")
                .staggerFrom(tagline, 0.2, {alpha:0,ease:Back.easeOut}, 0.05);
    };
    var doneLongBarAni = function(){
            $.getScript("./scripts/my-js/add-logo.js", function() {
                     AddLogo.done($(".header-text-search-container"));
                     firstOpenAni();
            });
    };
    var subEvent = function(){
        var cont=$('.mdl-layout__header').find('.header-text-search-container');
        $('.mdl-layout__header').on('scrollDownHideTextSplitLogoAndSearch',function(){
            cont.addClass('shrink-color-ani');
        });
        $('.mdl-layout__header').on('scrollUpToOrigin',function(){
            cont.removeClass('shrink-color-ani');
        });
    };
    return {
        doneLongBarAni:doneLongBarAni,
        subEvent:subEvent
    };
})();