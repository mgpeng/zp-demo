var WorldMapAniMock=(function(){
      var show=function(mapTl,def){
             var isBid=new $.Deferred;
              $.getScript("./scripts/my-js/world-map__isDoing--mock.js",function(){
                   var arr =[$("svg#world-map-svg").find("#FR"),
                        $("svg#world-map-svg").find("#FI"),
                        $("svg#world-map-svg").find("#GB"),
                        $("svg#world-map-svg").find("#US"),
                        $("svg#world-map-svg").find("#CN")
                    ];
                    WorldMapIsDoingMock.show(mapTl,isBid,arr,"正在拍","isBidding");
              });
              var isWait=new $.Deferred;
              isBid.done(function(){ 
                        var arr =[$("svg#world-map-svg").find("#CA"),
                                  $("svg#world-map-svg").find("#FI"),
                                  $("svg#world-map-svg").find("#ES"),
                                  $("svg#world-map-svg").find("#BE"),
                                  $("svg#world-map-svg").find("#DE")
                              ];
                        WorldMapIsDoingMock.show(mapTl,isWait,arr,"即将拍","isWaiting");
              });
              var hasFurnish=new $.Deferred;
              isWait.done(function(){
                       var arr =[$("svg#world-map-svg").find("#GB"),
                                  $("svg#world-map-svg").find("#FI"),
                                  $("svg#world-map-svg").find("#ES"),
                                  $("svg#world-map-svg").find("#BE"),
                                  $("svg#world-map-svg").find("#US")
                              ];
                      WorldMapIsDoingMock.show(mapTl,hasFurnish,arr,"家具","hasFurnish");
              });
              var hasPorcelain=new $.Deferred;
              hasFurnish.done(function(){
                     var arr =[$("svg#world-map-svg").find("#FR"),
                                $("svg#world-map-svg").find("#FI"),
                                $("svg#world-map-svg").find("#GB"),
                                $("svg#world-map-svg").find("#BE"),
                                $("svg#world-map-svg").find("#CN")
                              ];
                      WorldMapIsDoingMock.show(mapTl,hasPorcelain,arr,"瓷器","hasPorcelain");
              });
              var isLiveVideo=new $.Deferred;
              hasPorcelain.done(function(){
                  var arr =[$("svg#world-map-svg").find("#IT"),
                            $("svg#world-map-svg").find("#HU"),
                            $("svg#world-map-svg").find("#NO"),
                            $("svg#world-map-svg").find("#GR"),
                            $("svg#world-map-svg").find("#JP")
                          ];
                 WorldMapIsDoingMock.show(mapTl,isLiveVideo,arr,"正直播","isLiveVideo");
              });
              isLiveVideo.done(function(){
                      def.resolve();
              });
      };
      return {
         show:show
      };
 })();
