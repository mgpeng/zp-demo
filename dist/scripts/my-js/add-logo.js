var AddLogo = (function(){
    var addLogoNice = function(jParent){
      var svgStr= '<svg id="logo-svg" viewBox="0 0 190 190" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+
                    '<g stroke-width="1" fill="none" transform="translate(10, 1)">'+
                        '<path d="M90.5,0 L173,145 L8,145 L90.5,0 Z M90,141 C113.195959,141 132,121.524387 132,97.5 C132,73.4756134 113.195959,'+
                        '54 90,54 C66.8040405,54 48,73.4756134 48,97.5 C48,121.524387 66.8040405,141 90,141 Z" '+
                        'class="triangle"   stroke="#F661B6" fill="#FB916F" ></path>'+
                        '<path d="M58.78125,119.488813 L90.1111013,119.488813 L90.1111013,112.457877 L69.018293,112.457877 L69.018293,112.261011 L89.5486265,'+
                        '84.4185039 L89.5486265,78.90625 L59.2593537,78.90625 L59.2593537,85.9090624 L79.3959547,85.9090624 L79.3959547,86.1340523 L58.78125,'+
                        '113.948436 L58.78125,119.488813 Z M96.1577064,78.90625 L96.1577064,119.488813 L104.651077,119.488813 L104.651077,106.69251 L112.666344,'+
                        '106.69251 C121.215963,106.69251 127.150073,101.124008 127.150073,92.7993798 C127.150073,84.4466277 121.412829,78.90625 113.088201,'+
                        '78.90625 L96.1577064,78.90625 Z M104.651077,85.6278249 L110.838301,85.6278249 C115.703709,85.6278249 118.516083,88.2152094 118.516083,'+
                        '92.8275035 C118.516083,97.4679214 115.675585,100.055306 110.810177,100.055306 L104.651077,100.055306 L104.651077,85.6278249 Z"'+
                        'id="logo-text" stroke="#5A7EFD" stroke-width="4" fill-opacity="0.87" fill="#E3F2FD" transform="translate(-5, -4)"></path>'+
                        '<g id="bottom" transform="translate(28.000000, 147.000000)" stroke="#FFBA4F" stroke-width="3" >'+
                            '<path d="M129.4,0.5 C121.3,11.2 110.5,20.2 97.4,26.2 C65.2,41 28.6,33.9 4.2,11.1"  ></path>'+
                            '<path d="M135.4,0.8 C126.6,13.4 114.4,23.9 99.5,30.8 C65.2,46.6 26,38.8 0.2,14.2" ></path>'+
                        '</g>'+
                        '<g id="right" transform="translate(95.000000, 7.000000)" stroke="#FFBA4F" stroke-width="3">'+
                            '<path d="M2.7,5.3 C31.8,8 58.7,25.7 71.8,54.1 C79.6,71.1 81.3,89.2 77.9,106.2"></path>'+
                            '<path d="M0.8,0.2 C32.5,2.3 62,21.2 76.3,52.1 C84.6,70.2 86.4,89.7 82.6,107.8"></path>'+
                        '</g>'+
                        '<g id="left" transform="translate(0.000000, 15.000000)" stroke="#FFBA4F" stroke-width="3" >'+
                            '<path d="M13.2,116.8 C-6.3,74.4 12.2,24.2 54.6,4.7"></path>'+
                            '<path d="M8.7,118.9 C-12,74 7.7,20.8 52.6,0.2" ></path>'+
                        '</g>'+
                        '</g>'+
                    '</svg>';
        svgStr='<div class="logo-container">'+svgStr+'</div>';
        jParent.prepend(svgStr);
    };
    var prepareAniNice = function(){
            TweenMax.set('.triangle', {
            scale:0.95
            })
            TweenMax.set('#logo-svg', {
            visibility:'visible'
            })
            var tl = new TimelineMax({repeat:-1, repeatDelay:1});
            
            tl.timeScale(6);
            tl.to('.triangle', 3, {
            rotation:'-=120',
            transformOrigin:'49.6% 67.5%',
            ease:Power2.easeInOut
            })
            .staggerFrom('#bottom path', 2, {
            drawSVG:"100% 100%",
            ease:Power4.easeInOut,
            alpha:0
            }, 0.2,'-=2.5')
            .staggerFrom('#right path', 2, {
            drawSVG:"100% 100%",
            ease:Power4.easeInOut,
            alpha:0
            }, 0.2,'-=2.5')
            .staggerFrom('#left path', 2, {
            drawSVG:"100% 100%",
            ease:Power4.easeInOut,
            alpha:0
            }, 0.2,'-=2.5')
            .to(['#bottom path', '#right path', '#left path'], 2, {
            drawSVG:"0% 0%",
            ease:Power1.easeOut
            },'-=1.5')
            .to('#logo-text',1.5,{scale:0.9,alpha:0.3,transformOrigin:'49.6% 67.5%',ease:Power1.easeInOut});
            TweenMax.globalTimeScale(0.5);
    };
    var doneNice = function(jParent){
        addLogoNice(jParent);
        prepareAniNice();
    };
    // ----- above is for fun and nice logo
    // -----  below version is for DGQ's logo
   var addLogo = function(jParent){  
      var svgStr= '<svg id="zp-logo-img-svg" viewBox="-1 -1 153 153" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+
                        '<g id="zp-logo-img"  stroke="#979797" >'+
                            '<circle id="circle-down" cx="75" cy="75" r="75" fill="grey"></circle>'+
                            '<circle id="circle-up" cx="75" cy="75" r="72" fill="black"></circle>'+
                            '<polygon id="path-n" fill="white" points="68.0932166 27.6583823 78.2091937 27.6583823 102.092417 54.1854436 102.160742 29.9242526 97.8727419 29.9242526 97.8727419 27.6583823 111.975313 27.6583823 111.975313 70.2805852 102.160742 70.2805852 78.2091937 42.058967 78.2091937 131.396089 83.3762115 131.396089 83.2555524 134.03169 68.0932166 134.074332"></polygon>'+
                            '<polygon id="path-i"  fill="white" points="43.5293774 27.8120512 57.8746827 27.8120512 57.8746827 30.7014101 53.1161219 30.7014101 53.1161219 70.1773732 43.5293774 70.1773732"></polygon>'+       
                        '</g>'+
                    '</svg>';
        svgStr='<div class="logo-container">'+svgStr+'</div>';
        jParent.prepend(svgStr);
    };
    var prepareAni = function(){
            TweenMax.set('#zp-logo-img-svg', {
            visibility:'visible'
            })
            var tl = new TimelineMax({repeat:-1, repeatDelay:1});
            
            tl.timeScale(6);
            tl
            .staggerFrom('polygon#path-n polygon#path-i', 2, {
            drawSVG:"100% 100%",
            ease:Power4.easeInOut,
            alpha:0
            }, 0.2);
            TweenMax.globalTimeScale(0.5);
    };
    var done = function(jParent){
        addLogo(jParent);
        prepareAni();
    };
    return {
        done:done,
        doneNice:doneNice
    };
})();
