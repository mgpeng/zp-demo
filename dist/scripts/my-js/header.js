var cnt= $(" .mdl-layout__header ").find(" .header-search__container ");
          cnt.on("click",function(){
            var str=$(".mdl-layout__header")
                      .find(".header-text__content--short");
            if (cnt.hasClass("is-focused")){
                str.css("display","none");
            }
            // console.log("!!!");
          });  
          // ------below mdl drawer or hamburger menu
          $(".mdl-layout__header").on("click",".mdl-layout__drawer-button",function() {
             var that=$(".mdl-layout__drawer")
                        .find(".mdl-navigation")
                            .find(".mdl-navigation__link");
              that.addClass("stagger-link-in");
              $(".mdl-layout__drawer")
                    .find(".mdl-navigation")
                        .find("#hamburger-menu")
                            .addClass("is-active");
              console.log("!!!");
          });
          $(".mdl-layout").on("click",".mdl-layout__obfuscator",function(){
             $(".mdl-layout__drawer")
                 .find(".mdl-navigation")
                   .find(".mdl-navigation__link")
                      .removeClass("stagger-link-in");
             $(".mdl-layout__drawer")
                    .find(".mdl-navigation")
                        .find("#hamburger-menu.c-hamburger--htx")
                          .removeClass("is-active");
          });
          //    -------when press hamburger menu icon inside drawer
          //    ------ move back drawer and clean background
          //    ------ move out .mdl-layout__obfuscator 's class is-visible
          $(".mdl-layout").on("click","#hamburger-menu",function(){
             $(".mdl-layout__drawer")
                 .find(".mdl-navigation")
                   .find(".mdl-navigation__link")
                      .removeClass("stagger-link-in");
             $(".mdl-layout__drawer")
                    .find(".mdl-navigation")
                        .find("#hamburger-menu.c-hamburger--htx")
                           .removeClass("is-active");
             $(".mdl-layout__drawer")
                    .attr("aria-hidden",true)
                         .removeClass("is-visible");
             $(".mdl-layout__obfuscator").removeClass("is-visible");
          });
          //  ;
          // ------above mdl drawer or hamburger menu
        var arrBgImages=[
                            './images/material-design-bg-39-t.jpg',
                            './images/material-design-bg-36-t.jpg',
                            './images/material-design-bg-38-t.jpg',
                            './images/material-design-bg-37-t.jpg',
                            './images/material-design-bg-39-t.jpg',
                            './images/material-design-bg-36-t.jpg',
                            './images/material-design-bg-40-t.jpg'
                        ];
        var arrBgTextColor=[
                            'white',
                            'white',
                            'white',
                            'white',
                            'white',
                            'white',
                            'white'
                        ];
             $.fn.preload=function(){   
                     this.each(function(){
                        $('<img/>')[0].src = this;
                    }); }; 
         setTimeout(function() {
            $(arrBgImages).preload();
         }, 1000);
         var tabList=$(".header-tab-container").find(".mdl-layout__tab");
         var navList=$(".mdl-layout__drawer").find(".mdl-navigation__link");
         tabList.each(function(ind,el){
             $(el).on("click",function(){
                var url= arrBgImages[ind];
                $("header.mdl-layout__header")
                         .css('background-image','url("'+url+'")');
                $('.header-text-search-container')
                         .find('.header-text__title')
                              .css('color',arrBgTextColor[ind]);
                $('.header-text-search-container')
                         .find('.header-text__content--long')
                              .css('color',arrBgTextColor[ind]);
                $('.header-text-search-container')
                         .find('.header-text__content--short')
                              .css('color',arrBgTextColor[ind]);
                $('.header-text-search-container')
                         .find('#header-search__container')
                            .find('i.material-icons')
                              .css('color',arrBgTextColor[ind]);
             });
         });
         navList.each(function(ind,el){
             $(el).on("click",function(){
                var url= arrBgImages[ind];
                $("header.mdl-layout__header")
                //    .css("transform","translate(-5px,-5px)")
                      .css('background-image', 'url("' + url + '")');
                              $('.header-text-search-container')
                         .find('.header-text__title')
                              .css('color',arrBgTextColor[ind]);
                $('.header-text-search-container')
                         .find('.header-text__content--long')
                              .css('color',arrBgTextColor[ind]);
                $('.header-text-search-container')
                         .find('.header-text__content--short')
                              .css('color',arrBgTextColor[ind]);
                $('.header-text-search-container')
                         .find('#header-search__container')
                            .find('i.material-icon')
                              .css('color',arrBgTextColor[ind]);
        });});
//  ---below scroll up and down
        var initScrollTop=0;
        var header=$('.mdl-layout__header');
        var map=$('.header-up-part-container')
                    .find('.map-container');
        var tabCnt=$('.mdl-layout__header')
                    .find('.mdl-layout__tab-bar-container');
        // var tabletWidth = 768;
        var isLessTablet=$(window).outerWidth() <= 768 ? true : false;
        $('main').on('scroll', function(){
                var that=$(this)[0];
                var currntScrollTop=that.scrollTop;
                if (currntScrollTop > initScrollTop) {
                    if (currntScrollTop<60) {
                            header.addClass('is-bg-changed');
                            map.addClass('shrink');
                            tabCnt.addClass('go-up');
                            $.getScript("./scripts/my-js/globe-world.js",function(){
                                var p=$('main.mdl-layout__content');
                                GlobeWorld.doShow(p);
                            });
                            $('body').trigger('hideAcitveMenuAndAni');
                            $('.mdl-layout').trigger('hideMapNoteAndAni');
                            $('.mdl-layout__header').trigger('scrollDownHideTextSplitLogoAndSearch');
                            if (isLessTablet){
                                $(this).animate({'margin-top':'-1'},500,function(){});  
                                // --- -51px have bad looking in safari and firefox
                            }
                    }
                }else {
                     if (currntScrollTop<60) {
                            header.removeClass('is-bg-changed');
                            map.removeClass('shrink');
                            tabCnt.removeClass('go-up');
                            $.getScript("./scripts/my-js/globe-world.js",function(){
                                    var p=$('main.mdl-layout__content');
                                    GlobeWorld.doHide(p);
                                });
                            $('body').trigger('showAcitveMenuAndAni');
                            $('.mdl-layout').trigger('showMapNoteAndAni');
                            $('.mdl-layout__header').trigger('scrollUpToOrigin');
                         if (isLessTablet){
                            $(this).animate({'margin-top':'0px'},500,function(){});
                         }
                     }
                }
                initScrollTop=that.scrollTop;
        });
//  ---above scroll up and down

  var _once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // ---
//   $(function(){
// 	var $window = $('body');		// --this object is
// 	var scrollTime = 1.2;			//Scroll time
// 	var scrollDistance = 170;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
	
// 	$window.on("wheel", function(event){
// 		event.preventDefault();	
// 		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
// 		var scrollTop = $window.scrollTop();
// 		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
// 		TweenMax.to($window, scrollTime, {
// 			scrollTo : { y: finalScroll, autoKill:true },
// 				ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
// 				autoKill: true,
// 				overwrite: 5							
// 			});
// 	});
//  });
