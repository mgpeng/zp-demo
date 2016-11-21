var LiveAuction=(function(){
    var hoverLiveBiddingItemsDetail = function(){
        var main=$('#liveAuction-page').find('.live-auction__main');
        var itemsDetail=main.find('.itemsline-event-content-container');
        var liveChart=main.find('.live-bidding-chart-container');
        itemsDetail.hover(function(){
            liveChart.addClass('hoverItemsDetail-smallLiveChart');
            itemsDetail.addClass('showText-canScroll');
            main.addClass('change-itemsDetail-bg');
        },function(){
            liveChart.removeClass('hoverItemsDetail-smallLiveChart');
            itemsDetail.removeClass('showText-canScroll');
            main.removeClass('change-itemsDetail-bg');
        });
    };
    var hoverLiveVideo = function(){
        var lAuction=$('#liveAuction-page');
        var cnt=lAuction.find('.timeline-live-auction-container');
        var video=lAuction.find('.live-video-container').find(".main-live-video");
        video.hover(function(){
            cnt.addClass('move-left-for-video');
        },function(){
            cnt.removeClass('move-left-for-video');
        });
    };
    var subEvent = function(){
        $('#liveAuction-page').on('clickChangeItemOnHeader',function(e,str){
            var el=$('#liveAuction-page').find('.live-auction__header__item-short-name');
            el.text(str).hide();
            el.fadeIn(800);
        });
        $('#liveAuction-page').on('ItemPriceFollowBiddingOnHeader',function(e,str){
            var el=$('#liveAuction-page').find('.live-auction__header__items--current-price');
            el.text(str).hide();
            el.fadeIn(800);
        });
    };
    return {
       subEvent:subEvent,
       hoverLiveBiddingItemsDetail:hoverLiveBiddingItemsDetail,
       hoverLiveVideo:hoverLiveVideo
    };
})();
