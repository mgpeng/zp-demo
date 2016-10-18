var WorldMapAniMock=(function(){
      var show=function(mapTl){
             var isBid=new $.Deferred;
              $.getScript("./scripts/my-js/world-map__isDoing--mock.js",function(){
                   var arr =[$("svg#world-map-svg").find("#FR"),
                        $("svg#world-map-svg").find("#FI"),
                        $("svg#world-map-svg").find("#GB"),
                        $("svg#world-map-svg").find("#US"),
                        $("svg#world-map-svg").find("#CN")
                    ];
                  var tl1=WorldMapIsDoingMock.show(isBid,arr,"正在拍","isBidding");
                  mapTl.add(tl1);
              });
              var isWait=new $.Deferred;
              isBid.done(function(){ 
                        var arr =[$("svg#world-map-svg").find("#CA"),
                                  $("svg#world-map-svg").find("#FI"),
                                  $("svg#world-map-svg").find("#ES"),
                                  $("svg#world-map-svg").find("#BE"),
                                  $("svg#world-map-svg").find("#DE")
                              ];
                   var tl2=WorldMapIsDoingMock.show(isWait,arr,"即将拍","isWaiting");
                   mapTl.add(tl2);
              });
              var hasFurnish=new $.Deferred;
              isWait.done(function(){
                       var arr =[$("svg#world-map-svg").find("#GB"),
                                  $("svg#world-map-svg").find("#FI"),
                                  $("svg#world-map-svg").find("#ES"),
                                  $("svg#world-map-svg").find("#BE"),
                                  $("svg#world-map-svg").find("#US")
                              ];
                   var tl3= WorldMapIsDoingMock.show(hasFurnish,arr,"家具","hasFurnish");
                      mapTl.add(tl3);
              });
              var hasPorcelain=new $.Deferred;
              hasFurnish.done(function(){
                     var arr =[$("svg#world-map-svg").find("#FR"),
                                $("svg#world-map-svg").find("#FI"),
                                $("svg#world-map-svg").find("#GB"),
                                $("svg#world-map-svg").find("#BE"),
                                $("svg#world-map-svg").find("#CN")
                              ];
                      var tl4= WorldMapIsDoingMock.show(hasPorcelain,arr,"瓷器","hasPorcelain");
                      mapTl.add(tl4);
              });
              var isLiveVideo=new $.Deferred;
              hasPorcelain.done(function(){
                  var arr =[$("svg#world-map-svg").find("#IT"),
                            $("svg#world-map-svg").find("#HU"),
                            $("svg#world-map-svg").find("#NO"),
                            $("svg#world-map-svg").find("#GR"),
                            $("svg#world-map-svg").find("#JP")
                          ];
                 var tl5= WorldMapIsDoingMock.show(isLiveVideo,arr,"正直播","isLiveVideo");
                 mapTl.add(tl5);
              });
              isLiveVideo.done(function(){
                //       def.resolve();
              });
      };
var subEvent = function(mapTl){
        $('.mdl-layout').on('hideMapNoteAndAni',function(){
                var jParent= $('.mdl-layout');
                var noteList = jParent.find('div[id*="-note-container"]');
                mapTl.paused();
                if (noteList.length>0){
                        noteList.each(function(){
                             $(this).css({'opacity':0});
                        });
                }
        });
        $('.mdl-layout').on('showMapNoteAndAni',function(){
                var jParent= $('.mdl-layout');
                var noteList = jParent.find('div[id*="-note-container"]');
                if (noteList.length>0){
                        noteList.each(function(){
                             $(this).css({'opacity':1});
                        });
                }
                mapTl.play();
        });
    };
return {
        show:show,
        subEvent:subEvent
};
 })();
