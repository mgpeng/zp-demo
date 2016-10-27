var LiveBiddingChart=(function(){
  var svgns = "http://www.w3.org/2000/svg";
  var $root=$(".live-bidding-chart-container").find('svg#live-bidding-chart-svg');
  var def=$root.find('defs')[0];
  var root = $root[0];
//   var originX=0,originY=39,hDis=35,rectWidth=8,rectHeight=18;

  var mockData=[{'originX':0,'originY':45,'horizotalDistance':85,'verticalDistance':10,
                 'rectWidth':6,'rectHeight':10,'ovalRx':28,'ovalRy':14,'currency':'$','bidNumber':100,
                 'bidderId':'','bidderAvatarUrl':'../images/images-photos-icons/bridegroomIcon35x35.png','avatarSize':10},
                {'originX':0,'originY':45,'horizotalDistance':85,'verticalDistance':15,
                 'rectWidth':6,'rectHeight':10,'ovalRx':28,'ovalRy':14,'currency':'$','bidNumber':500,
                 'bidderId':'','bidderAvatarUrl':'../images/images-photos-icons/brideIcon35x35.png','avatarSize':10},
                {'originX':0,'originY':45,'horizotalDistance':85,'verticalDistance':20,
                 'rectWidth':6,'rectHeight':10,'ovalRx':28,'ovalRy':14,'currency':'$','bidNumber':1000,
                 'bidderId':'','bidderAvatarUrl':'../images/images-photos-icons/womanIcon35x35.png','avatarSize':10},
                {'originX':0,'originY':45,'horizotalDistance':85,'verticalDistance':25,
                 'rectWidth':6,'rectHeight':10,'ovalRx':28,'ovalRy':14,'currency':'$','bidNumber':1800,
                 'bidderId':'','bidderAvatarUrl':'../images/images-photos-icons/avatar-1.svg','avatarSize':10},
                {'originX':0,'originY':45,'horizotalDistance':85,'verticalDistance':30,
                 'rectWidth':6,'rectHeight':10,'ovalRx':28,'ovalRy':14,'currency':'$','bidNumber':3800,
                 'bidderId':'','bidderAvatarUrl':'../images/images-photos-icons/avatar-4.svg','avatarSize':10}];
  var addGoupe = function(id,translateX){
    var g = document.createElementNS(svgns, "g");
     root.appendChild(g);
     g.setAttribute('id',id);
     g.setAttribute('transform','translate('+translateX+',0)');
    //  g.setAttribute('style','opacity:0;');
  };
  var addLine=function(parent,id,x1,y1,x2,y2){
      var line = document.createElementNS(svgns, "line");
      parent.appendChild(line);
      line.setAttribute('id',id);
      line.setAttribute('x1',x1);
      line.setAttribute('x2',x2);
      line.setAttribute('y1',y1);
      line.setAttribute('y2',y2);
      line.style.stroke = "#000000"; 
      line.style.strokeWidth = "2px";
      line.style.strokeLinecap = "square";
  };
    var addRect=function(parent,id,x,y,w,h){
      var rect = document.createElementNS(svgns, "rect");
      parent.appendChild(rect);
      rect.setAttribute('id',id);
      rect.setAttribute('x',x);
      rect.setAttribute('y',y);
      rect.setAttribute('width',w);
      rect.setAttribute('height',h);
      rect.setAttribute('fill',"none");
      rect.style.stroke = "#000000"; 
      rect.style.strokeWidth = "2px";
      rect.style.strokeLinecap = "square";
  };
  var addOval=function(parent,id,cx,cy,rx,ry){
      var ellipse = document.createElementNS(svgns, "ellipse");
      parent.appendChild(ellipse);
      ellipse.setAttribute('id',id);
      ellipse.setAttribute('cx',cx);
      ellipse.setAttribute('cy',cy);
      ellipse.setAttribute('rx',rx);
      ellipse.setAttribute('ry',ry);
      ellipse.setAttribute('fill',"none");
      ellipse.style.stroke = "#000000"; 
      ellipse.style.strokeWidth = "1px";
  };
  var addText=function(parent,id,x,y,currency,money){
      var text= document.createElementNS(svgns, "text");
      parent.appendChild(text);
      text.setAttribute('id',id);
      text.setAttribute('x',x);
      text.setAttribute('y',y);
      text.setAttribute('fill',"none");
      text.style.stroke = "#000000"; 
      text.style.strokeWidth = "1px";
      text.textContent=currency+money;
      var box=text.getBBox();
      var w=box.width,h=box.height;
      text.setAttribute('x',Math.round(x-w/2));
      text.setAttribute('y',Math.round(y+h/3));
  };
    var addAvatar=function(parent,clipId,imageId,cx,cy,r,imgUrl){
    //   var g=document.createElementNS(svgns, "g");
    //   parent.appendChild(g);
    //   g.setAttribute('x',x);
    //   g.setAttribute('y',y);
      var clip= document.createElementNS(svgns, "clipPath");
      parent.appendChild(clip);
      clip.setAttribute('id',clipId);
    //   clip.setAttribute('clipPathUnits','objectBoundingBox');
      var circle= document.createElementNS(svgns, "circle");
      clip.appendChild(circle);
      circle.setAttribute('cx',cx);
      circle.setAttribute('cy',cy);
      circle.setAttribute('r',r);
      circle.setAttribute('stroke','black');
      circle.setAttribute('strokeWidth','1');
    //   circle.setAttribute('fill','none');
    //   circle.setAttribute('stroke','black');
      var avatar= document.createElementNS(svgns, "image");
      parent.appendChild(avatar);
      avatar.setAttribute('id',imageId);
      avatar.setAttribute('clip-path','url(#'+clipId +')');
      avatar.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imgUrl)
      avatar.setAttribute('width', 2*r);
      avatar.setAttribute('height', 2*r);
      avatar.setAttribute('x',cx-r);
      avatar.setAttribute('y',cy-r);
    //   avatar.setAttribute('preserveAspectRatio','xMidYMin slice')
  };
  var updateViewBox=function(originX,originY,horizotalDistance,verticalDistance,rectWidth,rectHeight,rx,ry,num){
            root.setAttribute('viewBox',(originX-1)+' '+(originY-verticalDistance-2*ry-1)+' '+
                                        (horizotalDistance*num+rx+2)+' '+
                                        (Math.round(verticalDistance+rectHeight/2+2*ry)+2));
            root.setAttribute('width',horizotalDistance*num+rx+2);
            root.setAttribute('height',Math.round(verticalDistance+rectHeight/2+2*ry)+2);
  };
  var createOneUnit=function(idNum,moveX,originX,originY,horizotalDistance,verticalDistance,rectWidth,rectHeight,rx,ry,currency,money,r,imgUrl){
    addGoupe('bottom-unit-'+idNum,moveX);
    var g1=document.getElementById('bottom-unit-'+idNum);
    addLine(g1,'h-line'+idNum,originX,originY,(originX+horizotalDistance),originY);
    addLine(g1,'v-line'+idNum,(originX+horizotalDistance),originY,(originX+horizotalDistance),(originY-verticalDistance));
    addRect(g1,'s-rect'+idNum,Math.round(originX+horizotalDistance-rectWidth/2),Math.round(originY-rectHeight/2),rectWidth,rectHeight);
    addOval(g1,'oval-plate'+idNum,(originX+horizotalDistance),(originY-verticalDistance-ry),rx,ry);
    addText(g1,'money-text'+idNum,(originX+horizotalDistance),(originY-verticalDistance-ry),currency,money);
    addAvatar(g1,'avatarclip'+idNum,'avatar-image'+idNum,(originX+horizotalDistance-rx-r),(originY-verticalDistance-ry),r,imgUrl)
    updateViewBox(originX,originY,horizotalDistance,verticalDistance,rectWidth,rectHeight,rx,ry,idNum);
  };
  var addOneBottomUnit=function(originX,originY,horizotalDistance,verticalDistance,rectWidth,rectHeight,rx,ry,currency,money,r,imgUrl){
      var glist=$root.find('g');
      var len=glist.length;
      createOneUnit(len+1,len*horizotalDistance,originX,originY,horizotalDistance,verticalDistance,rectWidth,rectHeight,rx,ry,currency,money,r,imgUrl);
  };
  var addBottomUnits=function(){
       var tl=new TimelineMax({pause:true});
    //    tl.add(TweenMax.set('svg#live-bidding-chart-svg', {visibility: 'visible'}));
      $.each(mockData,function(ind,obj){
          addOneBottomUnit(obj.originX,obj.originY,obj.horizotalDistance,obj.verticalDistance,
                           obj.rectWidth,obj.rectHeight,obj.ovalRx,obj.ovalRy,obj.currency,obj.bidNumber,
                           obj.avatarSize,obj.bidderAvatarUrl);

          var hline=$('svg#live-bidding-chart-svg').find('g#bottom-unit-'+(ind+1)).find('line#h-line'+(ind+1));
          var vline=$('svg#live-bidding-chart-svg').find('g#bottom-unit-'+(ind+1)).find('line#v-line'+(ind+1));
          var srect=$('svg#live-bidding-chart-svg').find('g#bottom-unit-'+(ind+1)).find('rect#s-rect'+(ind+1));
          var oval=$('svg#live-bidding-chart-svg').find('g#bottom-unit-'+(ind+1)).find('ellipse#oval-plate'+(ind+1));
          var money=$('svg#live-bidding-chart-svg').find('g#bottom-unit-'+(ind+1)).find('text#money-text'+(ind+1));
          var avatar=$('svg#live-bidding-chart-svg').find('g#bottom-unit-'+(ind+1)).find('image#avatar-image'+(ind+1));
      tl.add(TweenMax.from(hline,0.1,{drawSVG:0,ease:Linear.easeNone}))
        .add(TweenMax.from(srect,0.2,{drawSVG:0,ease:Power4.easeInOut}))
        .add(TweenMax.from(vline,0.1,{drawSVG:0,ease:Linear.easeNone}))
        .add(TweenMax.from(oval,0.1,{attr:{width:0},y:'-50',ease:Linear.easeNone},'ovalDown'))
        .add(TweenMax.from(money,0.1,{attr:{width:0},alpha:0,y:'-50',ease:Linear.easeNone},'ovalDown-0.1'))
        .add(TweenMax.from(avatar,0.1,{attr:{width:0},x:'-50',ease:Linear.easeNone}));
      });
      debugger;
      TweenMax.set('svg#live-bidding-chart-svg', {visibility: 'visible'});
      tl.play();
  };
  return {
    addBottomUnits:addBottomUnits
  };
})();
