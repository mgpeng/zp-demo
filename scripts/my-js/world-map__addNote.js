
var WorldMapAddNote=(function(){
  var getCountryIdTitle=function(jEl){
    return {id:jEl.attr('id'),title:jEl.attr('title')};
  };
  var getCountryAgencyItem=function(jEl){
    return [{"agency": "ACB co.", "item-list": ["porcelain", "neck lace", "gold watch"],"buyer": ["jhon", "mike","peter","mark"]},
            {"agency": "Good auction co.", "item-list": ["porcelain", "neck lace", "gold watch"], "buyer": ["jhon","mike","peter","mark"]},
            {"agency": "Buyer House", "item-list": ["porcelain", "neck lace", "gold watch"], "buyer": ["jhon","mike","peter","mark"]},
            {"agency": "Big bidding", "item-list": ["wood sculpt", "neck lace", "gold watch"], "buyer": ["jhon","mike","peter","mark"]},
            {"agency": "New York co.", "item-list": ["stone", "neck lace", "gold watch"], "buyer": ["jhon","mike","peter","mark"]}
           ];
  };
  var getCountryPosition=function(jEl){
      return jEl[0].getBoundingClientRect();
  };
  var getCountryInfo=function(jEl){
      var arr=getCountryAgencyItem(jEl);
      var aLen=arr.length,itemNum=0,buyerNum=0;
      $.each(arr,function(i,o){
         itemNum+=o["item-list"].length;
         buyerNum+=o=['buyer'].length;
      });
      return { 
               title: getCountryIdTitle(jEl).title,
               agencyLen:aLen,
               itemNum:itemNum,
               buyerNum:buyerNum
             };
  };
  var getInsertNoteXY=function(jEl){
       var str=jEl.attr('d');
       str=str.match(/(\d+(\.|)(\d?)+)/g);
       return [parseFloat(str[0]),parseFloat(str[1])];
  };
  var addNoteOnCountry=function(jEl,jParent,arr,noteText,isDoingClass){
      var iT=getCountryIdTitle(jEl);
      var note=getCountryInfo(jEl);
      var xy = getInsertNoteXY(jEl);
      var noteStr='<div id="'+iT.id+'-note-container" class="world-map-note__'+isDoingClass+'">'+
                      '<span class="world-map-note__'+isDoingClass+'-title">'+note.title+'<span class="xs-font-size">'+noteText+'</span></span>'+
                      '<div class="world-map-note__'+isDoingClass+'-container">'+
                        '<span class="world-map-note__'+isDoingClass+'-agency">'+note.agencyLen+'<span class="xs-font-size">拍卖行</span></span>'+
                        '<span class="world-map-note__'+isDoingClass+'-item">'+note.itemNum+'<span class="xs-font-size">拍品</span></span>'+
                      '</div>'+
                        '<span class="world-map-note__'+isDoingClass+'-buyer">'+note.buyerNum+'<span class="xs-font-size">竞拍人</span></span>'+
                  '</div>';
      var pos=getCountryPosition(jEl);
      var top=Math.round(pos.top+pos.width/3)+'px',
          left=Math.round(pos.left+pos.height/3)+'px';
      $(noteStr).appendTo(jParent).css({
        top: top,left: left,visibility: 'hidden'
      });
      arr.push($('#'+iT.id+'-note-container.world-map-note__'+isDoingClass));
      return arr;
  };
  return {
    addNoteOnCountry:addNoteOnCountry
  };
})();