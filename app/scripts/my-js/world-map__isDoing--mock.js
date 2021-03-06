 var WorldMapIsDoingMock=(function(){
      var show = function(inDef, arrCountry, noteText, isDoingClass){
          var timeline = new TimelineMax({onComplete:allDone,pasued:true});
          var def=$.Deferred();
          var arr=arrCountry;
          var getNoteArr=[];
          $.getScript("./scripts/my-js/world-map__addNote.js", function(){
                  $.each(arr,function(i,o){
                    o.attr("class",isDoingClass);
                  });
                  var jParent=$('.map-container').find('.map-notes-container');
                  $.each(arr,function(i,obj){
                      getNoteArr = WorldMapAddNote.addNoteOnCountry(obj,jParent,getNoteArr,noteText,isDoingClass);
                  });
                  def.resolve();
          });
          def.done(function(){
                  timeline.staggerFrom($('.'+isDoingClass), 1.5, 
                                    {css:{scale: 0.95, opacity: 0.5,transformOrigin:"50% 50%",
                                    backgroundColor:"#FF0000"},repeat: 1 ,
                                    ease:Elastic.easeInOut
                                      }, 0.3)
                    .set(getNoteArr,{visibility: "visible"})
                    .staggerFrom(getNoteArr,0.6,{opacity: 0,scaleX: 0.5},0.3)
                    .staggerTo(getNoteArr,0.6,{opacity: 0,scaleX: 0, delay: 3},0.3);
          });
          function allDone() { 
            $.each(arr,function(i,o) {  
                o.attr("class", "world-map-svg__each");
              });
              $("[id*='-note-container']").remove();
            inDef.resolve();
          }
          return timeline; 
      };
      return {
         show:show
      };
 })();
