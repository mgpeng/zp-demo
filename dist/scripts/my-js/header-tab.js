var HeaderTab=(function(){
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
                LiveAuction.done();
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