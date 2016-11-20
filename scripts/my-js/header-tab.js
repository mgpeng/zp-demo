var HeaderTab=(function(){
    // var tabList=$(".header-tab-container").find(".mdl-layout__tab");

        //  tabList.each(function(ind,el){
        //      $(el).on("click",function(){
        //         var url= arrBgImages[ind];
        //         $("header.mdl-layout__header")
        //                  .css('background-image','url("'+url+'")');
        //         $('.header-text-search-container')
        //                  .find('.header-text__title')
        //                       .css('color',arrBgTextColor[ind]);
        //         $('.header-text-search-container')
        //                  .find('.header-text__content--long')
        //                       .css('color',arrBgTextColor[ind]);
        //         $('.header-text-search-container')
        //                  .find('.header-text__content--short')
        //                       .css('color',arrBgTextColor[ind]);
        //         $('.header-text-search-container')
        //                  .find('#header-search__container')
        //                     .find('i.material-icons')
        //                       .css('color',arrBgTextColor[ind]);
        //      });
        //  });
var menuIsActiveArr=[
                        {id:'biddingNow',bool:false},
                        {id:'biddingSoon',bool:false},
                        {id:'biddingChart',bool:false},
                        {id:'hotLot',bool:false},
                        {id:'coldLot',bool:false},
                        {id:'auctionHouse',bool:false},
                        {id:'liveAuction',bool:false}];
  var  removeBeforeHeaderTabIsActive = function(clickedEl){
        var idStr=$(clickedEl).attr('href').match(/([^#]\w+(?=\-))/)[0];
        $.each(menuIsActiveArr,function(ind,obj){
            if (!(obj.id===idStr)){
                var $choice=$('main').find('#'+obj.id+'-page');
                if ($choice.hasClass('is-active')){
                    debugger;
                    $choice.removeClass('is-active');
                }
            }
        })
  };
  var setAllTabClickEvent = function(){
        $('a[href*="-page"]').on('click',function(){
            removeBeforeHeaderTabIsActive(this);
            $('main').find('#overview').css({display:'none'});
        });
        $('a[href="#biddingChart-page"]').on('click',function(){
            removeBeforeHeaderTabIsActive(this);
            $.getScript("./scripts/my-js/chart-catagory.js", function() {});
        });
        $('a[href="#liveAuction-page"]').on('click',function(){
            removeBeforeHeaderTabIsActive(this);
            $.getScript("./scripts/my-js/live-auction.js", function() {
                LiveAuction.subEvent();
            });
            $.getScript("./scripts/my-js/itemsline.js", function() {
                Itemsline.done();
            });
            $.getScript("./scripts/my-js/live-auction__bidders-chat.js", function() {
                LiveAuctionBiddersChat.done();
            });
            $.getScript("./scripts/my-js/live-bidding-chart.js", function() {
                LiveBiddingChart.done();
            });
        });
  };
  return {
      setAllTabClickEvent:setAllTabClickEvent
  };
})();