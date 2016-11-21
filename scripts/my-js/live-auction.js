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
    var hoverHorizontalTimeline = function(){
        var liveCnt=$('#liveAuction-page').find('.live-auction-container');
        var timeline=liveCnt.find('.cd-horizontal-timeline');
        var arrow1=timeline.find('.cd-timeline-navigation').find('a.next');
        var arrow2=timeline.find('.cd-timeline-navigation').find('a.prev');
        console.log(arrow1);
        timeline.hover(function(){
            arrow1.addClass('up-box-shadow-when-hover');
            arrow2.addClass('up-box-shadow-when-hover');
        },function(){
            arrow1.removeClass('up-box-shadow-when-hover');
            arrow2.removeClass('up-box-shadow-when-hover');
        });
    };
    var hoverLiveVideo = function(){
        var lAuction=$('#liveAuction-page');
        var cnt=lAuction.find('.timeline-live-auction-container');
        var video=lAuction.find('.live-video-container').find(".main-live-video");
        var video2=lAuction.find('.live-video-container').find(".all-degree-live-video");
        video.hover(function(){
            cnt.addClass('move-left-for-video');
            video2.addClass('shrink-when-main-hover');
        },function(){
            cnt.removeClass('move-left-for-video');
            video2.removeClass('shrink-when-main-hover');
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
    var done = function(){
       subEvent();
       setTimeout(function(){
            hoverLiveBiddingItemsDetail();
            hoverLiveVideo();
            hoverHorizontalTimeline();
       },100);
       
    };
    return {
       done:done
    };
})();
