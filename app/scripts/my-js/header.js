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
        var textserachlogo=header.find('header-text-search-container');
        var map=$('.header-up-part-container')
                    .find('.map-container');
        var activeMenu=$('.header-up-part-container')
                    .find('.map-active-menu');
        var tabCnt=$('.mdl-layout__header')
                    .find('.mdl-layout__tab-bar-container');
        $('main').on('scroll', function(){
                var that=$(this)[0];
                var currntScrollTop=that.scrollTop;
                var diff = currntScrollTop-initScrollTop;
                var tabletWidth = 768;
                var isLessTablet=$(window).outerWidth() <= 768 ? true : false;
                if (currntScrollTop > initScrollTop) {
                    // debugger;
                            header.addClass('is-bg-changed');
                            map.addClass('shrink');
                            activeMenu.addClass('shrink');
                            tabCnt.addClass('go-up');
                            textserachlogo.addClass('shrink-color-ani');
                            $.getScript("./scripts/my-js/globe-world.js",function(){
                                var p=$('main.mdl-layout__content');
                                GlobeWorld.doShow(p);
                            });
                    isFirstScrollup=false;  
                       if (isLessTablet){
                           $(this).animate({'margin-top':'-1'},500,function(){});  
                           // --- -51px have bad looking in safari and firefox
                       }
                }else {
                     if (currntScrollTop<100) {
                            header.removeClass('is-bg-changed');
                            map.removeClass('shrink');
                            activeMenu.removeClass('shrink');
                            tabCnt.removeClass('go-up');
                            textserachlogo.removeClass('shrink-color-ani');
                         $.getScript("./scripts/my-js/globe-world.js",function(){
                                    var p=$('main.mdl-layout__content');
                                    GlobeWorld.doHide(p);
                                });
                         if (isLessTablet){
                            $(this).animate({'margin-top':'0px'},500,function(){});
                         }
                     }
                }
                console.log ("currntScrollTop4:"+currntScrollTop);
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