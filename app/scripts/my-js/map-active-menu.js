var MapActiveMenu = (function(){
    var activeMenuMock = function(){
        var mockArr={
            'bidderJoinBid':[ 
                              {bidderId: 'bidder-123456789', agentId : 'agent-123456789abcd',itemId : 'item-232222'},
                              {bidderId:'bidder-781234569',agentId:'agent-1234abc56789d',itemId : 'item-232122'}
                             ],
            'bidderGetBid':[
                            {bidderId:'bidder-123456789',name:'HG-Jhon',itemId:'porcelain',price:'1000',currency:'USD',agentId:'agent-123894567abcd'},
                            {bidderId:'bidder-678912345',name:'ABCDFE',itemId:'furnish',price:'500',currency:'EUR',agentId:'agent-123456789abcd'},
                            {bidderId:'bidder-128934567',name:'BigBuyer',itemId:'furnish',price:'2000',currency:'YEN',agentId:'agent-12567abcd3894'},
                            {bidderId:'bidder-781234569',name:'大富豪',itemId:'furnish',price:'1600',currency:'RMB',agentId:'agent-412389567abcd'}
                         ],
            'agentPostSchedule':[
                          {agentId:'agent-123456789abcd',time:'10/10/2016',totalItemNum:'500',country:'FR'},
                          {agentId:'agent-123894567abcd',time:'10/12/2016',totalItemNum:'500',country:'US'},
                          {agentId:'agent-12567abcd3894',time:'10/13/2016',totalItemNum:'500',country:'FI'},
                          {agentId:'agent-412389567abcd',time:'10/14/2016',totalItemNum:'500',country:'GB'}
                         ],
            'agentPostItem':{agentId:'agent-123456abcd',itemId:'porcelain',info:'Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse'},
            'bidderAskItem':{bidderId:'bidder-123456789',itemId:'furnish',info:'Dolore ex deserunt aute fugiat aute nulla ?'},
            'sellerAnswerItem':{sellerId:'seller-abcd123456789',itemId:'watch',info:'Dolore ex deserunt aute fugiat aute nulla ?'},
            'translatorDonePost':{translatorId:'translator-23322222',itemId:'jewelry',chineseInfo:'啊看到九分裤就看到飞机开放了'},
            'itemInfo':[
                         {itemId : 'item-232222',agentId:'agent-123456789abcd',name:'porcelain',description:'deserunt aute fugiat aute nul'},
                         {itemId : 'item-232122',agentId:'agent-123894567abcd',name:'furnish',description:'deserunt aute fugiat aute nul'},
                         {itemId : 'item-2344222',agentId:'agent-123894567abcd',name:'watch',description:'deserunt aute fugiat aute nul'},
                         {itemId : 'item-abc2222',agentId:'agent-412389567abcd',name:'jewelry',description:'deserunt aute fugiat aute nul'}
                      ],
            'bidderInfo':[
                         {bidderId:'bidder-123456789',name:'大富翁',otherInfo:'bababala'},
                         {bidderId:'bidder-678912345',name:'John M',otherInfo:'bababala'},
                         {bidderId:'bidder-128934567',name:'老大',otherInfo:'bababala'},
                         {bidderId:'bidder-781234569',name:'Mike Thomans',otherInfo:'bababala'}
                      ],
            'agentInfo':[
                         {bidderId:'agent-123456789abcd',name:'ABC co., Ltd.',otherInfo:'bababala',country:'US'},   
                         {bidderId:'agent-123894567abcd',name:'Abbb co.',otherInfo:'bababala',country:'GB'},
                         {bidderId:'agent-12567abcd3894',name:'Auction House.',otherInfo:'bababala',country:'JP'},
                         {bidderId:'agent-412389567abcd',name:'Magic Bidding',otherInfo:'bababala',country:'CN'}                  
            ],
            'sellerInfo':[
                            {sellerId:'seller-abcd123456789',name:'Jone Tomashi'}
                         ],
            'translatorInfo':[
                          {translatorId:'translator-23322222',name:'Mike Li'}
            ]
         };
         return mockArr;
    };
    var activeMenuMockChinese= function(){
        return [
            {who:'bidder',whoChinese:'竞拍人',act:'JoinBid',actChinese:'正在竞拍',logo:false},
            {who:'bidder',whoChinese:'竞拍人',act:'GetBid',actChinese:'成功拍到',logo:false},
            {who:'agent',whoChinese:'拍卖行',act:'PostSchedule',actChinese:'发时间表',logo:true},
            {who:'agent',whoChinese:'拍卖行',act:'PostItem',actChinese:'发布拍品',logo:true},
            {who:'bidder',whoChinese:'竞拍人',act:'AskItem',actChinese:'问拍品',logo:false},
            {who:'seller',whoChinese:'货主',act:'AnswerItem',actChinese:'答问题',logo:false},
            {who:'translator',whoChinese:'翻译',act:'DonePost',actChinese:'翻译完',logo:false}
        ];
    };
    var randomChangeAvatarOrLogo = function(){
         var url='./images/images-photos-icons/';
         var urlArr=['manIcon35x35.png','avatar-1.svg','avatar-4.svg','brideIcon35x35.png',
                     'bridegroomIcon35x35.png','peopleIcon35x35.png','womanIcon35x35.png'];
         var arr=[];
         for (var i=0; i<7; i++) {
             var ind=Math.floor(Math.random() * (urlArr.length));
             arr.push(url+urlArr[ind]);
         }
         return arr;
    };
    var randomChangeText = function(){
         var textObj=activeMenuMockChinese();
         var arr=[];
         for (var i=0; i<7; i++) {
             var ind=Math.floor(Math.random() * (textObj.length));
             arr.push(textObj[ind]);
         }
         return arr;
    };
    var makeOneActiveMenu = function(){
        var jParent= $(".header-up-part-container").find(".map-active-menu");
        var amc=randomChangeText();
        var randomUrl=randomChangeAvatarOrLogo();
        var str='<div class="map-active-menu__container">';
        $.each(amc,function(ind,obj){
            str=str+'<div class="map-active-menu__'+obj.who+obj.act+' map-active-menu__item">'+
                        '<span class="map-active-menu__text">'+obj.whoChinese+'</span>'+
                        '<img class="map-active-menu__'+(obj.logo ? "avatar" : "logo")+'" src="'+randomUrl[ind]+'"/>'+
                        '<span class="map-active-menu__text">'+obj.actChinese+'</span>'+
                    '</div>';
        });
       str = str+'</div>';
        $(str).appendTo(jParent);
    };
    var ani = function(activeTl){
        makeOneActiveMenu();
        var cnt= $('.map-active-menu__container');
        var items= cnt.find('.map-active-menu__item');
        var tl=new TimelineMax({repeatDelay:3.5});
        tl.set(cnt,{visibility:'visible',position:'relative'})
                .staggerFrom(items,0.5,{opacity:0,scal:0.5,top:'60',delay:2},0.1)
                .staggerTo(items,0.5,{opacity:0,top:'+=60',delay:3.5},0.1);
        activeTl.add(tl);
        function doneAni(){}
    };
    var subEvent = function(activeTl){
        $('body').on('hideAcitveMenuAndAni',function(){
            var jParent= $(".header-up-part-container").find(".map-active-menu");
            jParent.find('.map-active-menu__container').css({'opacity':'0'});
            jParent.addClass('shrink');
            activeTl.paused();
        });
        $('body').on('showAcitveMenuAndAni',function(){
            var jParent= $(".header-up-part-container").find(".map-active-menu");
            jParent.find('.map-active-menu__container').css({'opacity':'1'});
            jParent.removeClass('shrink');
            activeTl.play();
        });
    };
    return {
          ani:ani,
          subEvent:subEvent
    };
})();