 var WorldMapIsDoingMock=(function(){
      var show = function(mapTl, inDef, arrCountry, noteText, isDoingClass){
              var def=$.Deferred();
              var arr=arrCountry;
              var getNoteArr=[];
              $.getScript("./scripts/my-js/world-map__addNote.js", function(){
                     $.each(arr,function(i,o){
                       o.attr("class",isDoingClass);
                     });
                     var jParent=$('.mdl-layout');
                     $.each(arr,function(i,obj){
                         getNoteArr = WorldMapAddNote.addNoteOnCountry(obj,jParent,getNoteArr,noteText,isDoingClass);
                     });
                     def.resolve();
              });
              def.done(function(){
                  var timeline = new TimelineMax({onComplete:allDone});
                     timeline.staggerFrom($('.'+isDoingClass), 1.5, 
                                       {css:{scale: 0.95, opacity: 0.5,transformOrigin:"50% 50%",
                                        backgroundColor:"#FF0000"},repeat: 1 ,
                                        ease:Elastic.easeInOut
                                         }, 0.3)
                        .set(getNoteArr,{visibility: "visible"})
                        .staggerFrom(getNoteArr,0.6,{opacity: 0,scaleX: 0.5},0.3)
                        .staggerTo(getNoteArr,0.6,{opacity: 0,scaleX: 0, delay: 3},0.3);  
                 function allDone() { 
                    console.log("finished isDoing "+noteText+" ani");
                    $.each(arr,function(i,o) {  
                       o.attr("class", "world-map-svg__each");
                     });
                     $("[id*='-note-container']").remove();
                    inDef.resolve();
                  }
                  mapTl.add(timeline);
                  timeline.play();
                  // return timeline;
              });
              
              // 
      };
      return {
         show:show
      };
 })();
