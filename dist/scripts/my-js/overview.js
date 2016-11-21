var Overview = (function(){
    var overviewCnt=$('.overview-container');
    var menuList=overviewCnt.find('div[class*="overview-"].mdl-card');
    var menuMatrix=[['biddingNow','biddingSoon'],['biddingChart','hotLot'],['coldLot','auctionHouse']];
    var menuRippleBGColorArr=[
                                {id:'biddingNow',rippleColor:'hsla(39,98%,25%,0.5)'},
                                {id:'biddingSoon',rippleColor:'hsla(194,74%,20%,0.5)'},
                                {id:'biddingChart',rippleColor:'hsla(142,67%,15%,0.5)'},
                                {id:'hotLot',rippleColor:'hsla(0,96%,28%,0.5)'},
                                {id:'coldLot',rippleColor:'hsla(221,48%,30%,0.5)'},
                                {id:'auctionHouse',rippleColor:'hsla(192,97%,25%,0.5)'}];
    var menuGoUpPosArr=[
                        {id:'biddingNow',goUpPos:"-150% -50%"},
                        {id:'biddingSoon',goUpPos:"-100% -50%"},
                        {id:'biddingChart',goUpPos:"-50% -50%"},
                        {id:'hotLot',goUpPos:"0% -50%"},
                        {id:'coldLot',goUpPos:"50% -50%"},
                        {id:'auctionHouse',goUpPos:"100% -50%"}];
    var menuIsActiveArr=[
                        {id:'biddingNow',bool:false},
                        {id:'biddingSoon',bool:false},
                        {id:'biddingChart',bool:false},
                        {id:'hotLot',bool:false},
                        {id:'coldLot',bool:false},
                        {id:'auctionHouse',bool:false}];
    var headerTabIdStrArr=[];
    var tabList=$(".header-tab-container").find(".mdl-layout__tab");
    var findAniMenuOrder = function(str){
        var row,col;
        var clickPos=[];
        var before=[],after=[],clickPosAnother=[];
        $.each(menuMatrix,function(ind,obj){
            row=ind;
            $.each(obj,function(i,o){
                if (o===str){
                    col=i;
                    clickPos=[row,col];
                } 
            });
        });
        $.each(menuMatrix,function(ind,obj){
            if (ind<clickPos[0]){
                before.push(obj);
            }else if (ind>clickPos[0]){
                after.push(obj);
            }
        });
        if (before.length>0){
            var b=[];
            $.each(before,function(ind,obj){
                var c=[];
                $.each(obj,function(i,o){
                  c.push('#'+o);
                });
                b.push(c);
            });
            before=b;
        }
        if (after.length>0){
            var d=[];
            $.each(after,function(ind,obj){
                var e=[];
                $.each(obj,function(i,o){
                  e.push('#'+o);
                });
                d.push(e);
            });
            after=d;
        }
        $.each(menuMatrix[clickPos[0]],function(i,o){
            if (!(i===clickPos[1])){
                clickPosAnother.push('#'+o);
            }
        });
        return {before:before,clicked:['#'+str],clickedSibling:clickPosAnother,after:after};
    };
    var menuHideSiblingAni = function(arr,clicked,delayMulti,tl){
        if (!(arr.length===0)){
            var tline=new TimelineMax({onComplete:doneSibling,onCompleteParams:[clicked]})
            tline.set(arr,{boxShadow:"none"})
                .to(arr,0.1,{sacle:0,transformOrigin:"50% 50%",alpha:0,delay:delayMulti*0.001,ease:Power4.easeOut})
                .to(arr,0.1,{paddingTop:0,paddingBottom:0,margin:0,delay:delayMulti*0.001,ease:Power4.easeOut})
                .to(arr,0.015,{marginTop:0,marginBottom:0,delay:delayMulti*0.001})
                .to(arr,0.015,{marginRight:0,marginLeft:0,delay:delayMulti*0.001})
                .set(arr,{display:'none'});
            tl.add(tline);
            function doneSibling(clicked){
                 
            }
        }
    };
    var hideOneMenuAni = function(arr,delayMulti,tl,beforeOrAfter){
            tl.set(arr,{boxShadow:"none"})
            //   .to(arr,0.05,{height:0,minHeight:0,alpha:0,delay:delayMulti*0.001,ease:Power4.easeOut})
              .to(arr,0.1,{scale:0,transformOrigin:"50% 50%",delay:delayMulti*0.001,ease:Power4.easeOut},'shrinkX'+beforeOrAfter)
              .to(arr,0.05,{alpha:0,delay:delayMulti*0.001,ease:Power4.easeOut},'shrinkX'+beforeOrAfter+0.001)
              .to(arr,0.02,{paddingTop:0,paddingBottom:0,margin:0,delay:delayMulti*0.001,ease:Power4.easeOut})
              .to(arr,0.008,{marginTop:0,marginBottom:0,delay:delayMulti*0.001,ease:Power4.easeOut})
              .to(arr,0.008,{marginRight:0,marginLeft:0,delay:delayMulti*0.001,ease:Power4.easeOut})
              .set(arr,{display:'none'});
    };
    var menuHideBeforeAni = function(arr,delayMulti,tl){
        if (arr.length>0){
                $.each(arr,function(i,o){
                    hideOneMenuAni(o,delayMulti*(i+2),tl,'before'+i);
                });
        }
    };
    var menuHideAfterAni = function(arr,delayMulti,tl){
        if (arr.length>0){
                $.each(arr,function(i,o){
                    hideOneMenuAni(o,delayMulti*(i+1),tl,'after'+i);
                });
        }
    };
    var hideNoClickMenu = function(idStr,delayMulti,tl){
        var menuOrder=findAniMenuOrder(idStr);
        menuHideAfterAni(menuOrder.after,delayMulti,tl);
        menuHideBeforeAni(menuOrder.before,delayMulti,tl);
        menuHideSiblingAni(menuOrder.clickedSibling,menuOrder.clicked,delayMulti,tl);
    };
    var changeMenuPosToAbsolutePos = function(){
        var overOff=$('#overview').offset();
        var objOffArr=[];
        $.each(menuList,function(ind,obj){
            objOffArr.push($(obj).offset());
        });
        $.each(menuList,function(ind,obj){
            var objOff=objOffArr[ind];
            $(obj).css({position:'absolute',top:(objOff.top-overOff.top),left:(objOff.left-overOff.left)})
        });
    };
    var addOverlayOnOverview = function(){
        var overlay=$('main').find('.overview-overlay');
        if (overlay.length<1){
            $('main').append('<div class="overview-overlay"><div class="ani-circle"></div><div class="ani-circle"></div><div class="ani-circle"></div></div>'); 
        }
    };
    var moveCircleToClickPos = function(x,y){
        var off=$('#overview').offset();
        $('.overview-overlay').find('.ani-circle').css({top:(x-off.left),left:(y-off.top),'z-index':100});
    };
    var addRippleContainer = function(menuEl){
          var rippleCnt=$(menuEl).find('.click-ripple-container');
          if(rippleCnt.length<1){
                $(menuEl).append('<div class="click-ripple-container"><div class="first"></div><div class="second"></div><div class="three"></div></div>');
          }
    };
    var addRippleClass = function(menuEl){
        var rippleCnt=$(menuEl).find('.click-ripple-container');
        if(rippleCnt.length>0){
                $(menuEl).find('.click-ripple-container').children().each(function(){
                    $(this).addClass('ripple');
                });
          }
    };
    var delRippleClass = function(menuEl){
        var rippleCnt=$(menuEl).find('.click-ripple-container');
        if(rippleCnt.length>0){
                $(menuEl).find('.click-ripple-container').children().each(function(){
                    $(this).removeClass('ripple');
                });
          }
    };
    var delRippleContainer = function(menuEl){
          $(menuEl).find(".click-ripple-container").remove();
    };
    var setRipplePos = function(menuEl,x,y,tl,rippleColor,tLabel){  
        var pOff=$(menuEl).offset();
        var ripples=$(menuEl).find('.click-ripple-container').children();
        ripples.each(function(){
            this.setAttribute('style','');
        });
        tl.add(TweenMax.set(ripples,{ 
                            display:'block',
                            borderRadius:'2px',
                            width:'2px',
                            height:'2px',
                            position:'absolute',
                            top:(y-pOff.top),
                            left:(x-pOff.left)
                        }));
        tl.add(TweenMax.staggerTo(ripples,0.5,
                {
                    opacity:0.3,
                    yoyo:true,
                    cycle:{
                        boxShadow:[
                                '0 0 0 0 transparent,0 0 0 0 transparent,0 0 0 0 transparent,0 0 0 0 transparent',
                                '0 0 0 0 '+rippleColor+',0 0 0 0 rgba(255, 255, 255, 0.4),0 0 0 0 '+rippleColor+',0 0 0 0 rgba(0, 0, 0, 0.08)',
                                '0 0 80px 400px '+rippleColor+',0 0 20px 420px transparent,0 0 60px 440px '+rippleColor+',0 0 10px 460px transparent'
                        ]
                    }        
                },0.1))
            .add(tLabel);
     };
    var changeClickedMenuAni = function(menuEl,idStr,tl,originStr){
         var text=$(menuEl).find('.overview-'+idStr+'-text-action-container').find('.overview-'+idStr+'-text');
         var act=$(menuEl).find('.overview-'+idStr+'-text-action-container').find('.overview-'+idStr+'-action');
         var svg=$(menuEl).find('svg');
         var ripple=$(menuEl).find('.click-ripple-container');
         tl.add(TweenMax.to(menuEl,0.02,{boxShadow:'0 0 0 0 transparent'}))
           .add(TweenMax.set(menuEl,{boxShadow:'0 0 0 0 transparent'}))
           .add (TweenMax.to(menuEl,0.1,{scale:0.3,transformOrigin:originStr,alpha:0,ease:Power4.easeOut}));
    };

    var rippleMenuBackground = function(x,y,tl,rippleColor,tLabel){
        var els=$('main').find('.overview-overlay').find('.ani-circle');
        var pOff=$('main').offset();
        els.each(function(){
            this.setAttribute('style','');
        });
        tl.add(TweenMax.set(els,{ 
                                top:(y-pOff.top),
                                left:(x-pOff.left)
                            }));
        tl.add([TweenMax.staggerTo(els,0.45,
                {
                    opacity:0.3,
                    yoyo:true,
                    cycle:{ boxShadow:[
                                '0 0 0 0 transparent,0 0 0 0 transparent,0 0 0 0 transparent,0 0 0 0 transparent',
                                '0 0 0 0 '+rippleColor+',0 0 0 0 rgba(255,255,255,0.4),0 0 0 0 '+rippleColor+',0 0 0 0 rgba(0,0,0,0.08)',
                                '0 0 180px 1400px '+rippleColor+',0 0 120px 1420px transparent,0 0 160px 1440px '+rippleColor+',0 0 110px 1460px transparent'
                        ]},
                    onComplete:cleanOverlay
                },0.1)],tLabel+'-=0.3');
        function cleanOverlay(){
            els.each(function(){
               this.setAttribute('style','');
            });
        }
    };
    var collectHeaderIdStrArr = function(){
            var tabIdStrArr=[];
            $.each(tabList,function(ind,obj){
                tabIdStrArr.push($(obj).attr('href').match(/([^#]\w+(?=\-))/)[0]);
            });
            headerTabIdStrArr=tabIdStrArr;
    };
    var activeOneTabAni = function(activeTabIdStr,tl){
            if (headerTabIdStrArr.length<1){
                collectHeaderIdStrArr();
            }
            var index=0;
            $.each(headerTabIdStrArr,function(ind,obj){
                if(obj===activeTabIdStr){
                    index=ind;
                    return false;
                }
            });
            var activeBefore=[],activeAfter=[],activeTab;
            $.each(tabList,function(ind,obj){
                if (ind<index){
                    activeBefore.push(obj);
                } else if (ind>index) {
                    activeAfter.push(obj);
                } else if (ind===index){
                    activeTab=obj;
                }
            });
            debugger;
              tl.set(tabList,{scale:1,transformOrigin:"50% 50%",backgroundColor:"rgba(54, 70, 78, 1)"})
                .to(activeTab,0.7,{scale:1.25,transformOrigin:"50% 50%",
                                backgroundColor: "rgba(69, 98, 193, 1)",
                                ease: Elastic.easeInOut.config(1, 0.1)
                               })
                .staggerTo(activeBefore.reverse(),0.25,
                               {scale:1.05,
                                transformOrigin:"100% 50%",
                                backgroundColor: "rgba(99, 167, 174, 1)"
                               },0.05,'startPoint')
                .staggerTo(activeBefore.reverse(),0.2,
                              {scale:1,
                               transformOrigin:"50% 50%",
                               backgroundColor: "rgba(54, 70, 78, 1)"
                               },0.05,'endPoint')
               .staggerTo(activeAfter,0.25,
                              {scale:1.05,
                               transformOrigin:"0% 50%",
                               backgroundColor: "rgba(99, 167, 174, 1)"
                               },0.05,'startPoint')
               .staggerTo(activeAfter,0.2,
                              {scale:1,
                               transformOrigin:"50% 50%",
                               backgroundColor: "rgba(54, 70, 78, 1)"
                               },0.05,'endPoint');
    };
    var setOnlyOneHeaderTabIsActive = function(idStr){
        var isActiveObj={};
        $.each(menuIsActiveArr,function(ind,obj){
            if (obj.bool===true){
                isActiveObj={id:obj.id,bool:true};
                menuIsActiveArr[ind].bool=false;
            }
            if (obj.id===idStr){
                menuIsActiveArr[ind].bool=true;
            }
        })
        return isActiveObj;
    };
    var showMenuClicked = function(idStr){
              var tl=new TimelineMax({pause:true,onComplete:setHeaderTabIsActive,onCompleteParams:[idStr]});
              if (idStr==='biddingChart'){
                  $('main').find('#overview').css({display:'none'});
                  $.getScript("./scripts/my-js/chart-catagory.js", function() {});
                  $('main').find('#biddingChart-page').addClass('is-active');
              }else if (idStr==='biddingNow'){
                  $('main').find('#overview').css({display:'none'});
                  $('main').find('#liveAuction-page').addClass('is-active');
                  $.getScript("./scripts/my-js/live-auction.js", function() {
                     LiveAuction.subEvent();
                     LiveAuction.hoverLiveBiddingItemsDetail();
                     LiveAuction.hoverLiveVideo();
                  });
                  $.getScript("./scripts/my-js/itemsline.js", function() {
                      Itemsline.done();
                  });
                  $.getScript("./scripts/my-js/live-auction__bidders-chat.js", function() {
                      LiveAuctionBiddersChat.done();
                  });
                  $.getScript("./scripts/my-js/live-bidding-chart.js", function() {
                      LiveBiddingChart.done();
                   //   LiveBiddingChart.lowAllBiddingsAndMoveLeft();
                  });
              }else if (idStr === 'coldLot' || idStr ==='hotLot' || idStr==='auctionHouse' || idStr==='biddingSoon') {
                  $('main').find('#overview').css({display:'none'});
                  var showP=$('main').find('#'+idStr+'-page');
                  if (showP.length>0 && showP.attr('display')==='block'){
                      tl.to(showP,0.01,{alpha:0});
                  } else {
                      tl.set(showP,{display:'block'})
                        .from(showP,0.2,{ marginTop:'-=50',
                                          scale:0,transformOrigin:"50% 50%",
                                          alpha:0,
                                          ease:Expo.easeIn});
                  }
              }
              function setHeaderTabIsActive(idStr){

              }
    };
    var setClickEvent = function(){
        menuList.on('click',function(e){
            addOverlayOnOverview();
            var idStr=$(this).attr('id');
            var tl = new TimelineMax({pause:true,onComplete:doHide,onCompleteParams:[idStr]});
            addRippleContainer(this);
            var rippleColor;
            $.each(menuRippleBGColorArr,function(ind,obj){
                if(obj.id===idStr){
                    rippleColor=obj.rippleColor;
                    return false;
                }
            });
            var tLabel='rippleLabel';
            setRipplePos(this,e.clientX,e.clientY,tl,rippleColor,tLabel);
            rippleMenuBackground(e.clientX,e.clientY,tl,rippleColor,tLabel);
            // moveCircleToClickPos(e.clientX,e.clientY);
            hideNoClickMenu(idStr,0.01,tl);
            var goUpPos = "50% -50%";
            $.each(menuGoUpPosArr,function(ind,obj){
                if (obj.id===idStr){
                    goUpPos=obj.goUpPos;
                    return false;
                }
            });
            changeClickedMenuAni(this,idStr,tl,goUpPos);
            activeOneTabAni(idStr,tl);
            
            tl.play();
            tl.timeScale(1.5);
            function doHide(idStr){
                showMenuClicked(idStr);
            }
        });
    };
    return {
        setClickEvent:setClickEvent
    };
})();