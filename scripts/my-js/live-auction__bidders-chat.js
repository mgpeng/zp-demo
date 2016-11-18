var LiveAuctionBiddersChat = (function(){
    var container=$('#liveAuction-page').find('.live-auction__social-container');
    var createStr = function(){
        var str='<div class="live-auction__bidder__isOnline mdl-cell mdl-cell--9-col mdl-grid">'+
                    '<span class="live-auction__bidder__header mdl-cell mdl-cell--2-col mdl-cell--middle">竞标人</span>'+
                    '<img class="live-auction__bidder live-auction__s-avatar  mdl-cell mdl-cell--1-col mdl-cell--middle" src="./images/images-photos-icons/brideIcon35x35.png">'+
                    '<img class="live-auction__bidder live-auction__s-avatar  mdl-cell mdl-cell--1-col mdl-cell--middle" src="./images/images-photos-icons/bridegroomIcon35x35.png">'+
                    '<img class="live-auction__bidder live-auction__s-avatar  mdl-cell mdl-cell--1-col mdl-cell--middle" src="./images/images-photos-icons/womanIcon35x35.png">'+
                    '<img class="live-auction__bidder live-auction__s-avatar  mdl-cell mdl-cell--1-col mdl-cell--middle" src="./images/images-photos-icons/brideIcon35x35.png">'+
                    '<img class="live-auction__bidder live-auction__s-avatar  mdl-cell mdl-cell--1-col mdl-cell--middle" src="./images/images-photos-icons/bridegroomIcon35x35.png">'+
                    '<img class="live-auction__bidder live-auction__s-avatar  mdl-cell mdl-cell--1-col mdl-cell--middle" src="./images/images-photos-icons/womanIcon35x35.png">'+
                    '<span class="live-auction__bidder__more  mdl-cell mdl-cell--1-col mdl-cell--middle">..</span>'+
                '</div>'+
                '<div class="live-auction__chat-icon mdl-cell mdl-cell--3-col mdl-cell--middle">'+
                    '<span class="live-auction__chat__title">参加聊天</span>'+
                    '<i class="material-icons">chat</i>'+
                '</div>';
        return str;
    };
    var insert = function(){
        $(createStr()).appendTo(container);
    };
    var checkAllImgIsLoad = function(){
        // -- there are two :1) check img is loaded or 2)setTimeout

    };
    var isExist = function(el,callback){
        if (el.find('.live-auction__bidder__isOnline').length<1){
            if (typeof callback === 'function'){
                callback();
            }
        }
    };
    var showAni = function(){
        insert();
        setTimeout(function(){
            container.addClass('showAni');
            container.find('.live-auction__bidder__isOnline').addClass('showAni__bidder');
            container.find('.live-auction__chat-icon').addClass('showAni__chat');
        },300);
    };
    var done = function(){
        isExist(container,showAni);
    };
    return {
        done:done
    };
})();