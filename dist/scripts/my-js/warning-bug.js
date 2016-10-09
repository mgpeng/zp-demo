var WarningBug=(function(){
 var insertCoverPage = function(){
    var isExist=$('.mdl-layout').find(".warning-bug-container").length;
      if(!isExist>0){
        $('.mdl-layout')
             .append('<div class="warning-bug-container mdl-shadow-8dp">'+
                         '<h5>由于时间原因响应式页面还没有做</h5>'+
                         '<svg id="warning-bug-svg" viewBox="0 0 400 400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+
                                '<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'+
                                    '<g id="alerter-bug" transform="translate(10.000000, 10.000000)">'+
                                        '<rect id="Rectangle-path" stroke="#232C38" stroke-width="20" fill="#16212F" x="0" y="0" width="380" height="380" rx="70"></rect>'+
                                        '<path d="M192,155 L192,207" id="exclamationLine" stroke="#EDEDED" stroke-width="22"></path>'+
                                        '<circle id="exclamationDot" fill="#EDEDED" cx="192.29" cy="239.01" r="11.5"></circle>'+
                                        '<g id="bugGroup" transform="translate(85.000000, 181.000000)" stroke="#FF6633" stroke-width="20">'+
                                           '<path d="M130.72,0.55 L130.72,53.5800898 C130.676071,67.9932336 118.85522,79.6666193 104.26,79.71 L104.26,79.71 C89.6647801,79.6666193 77.8439287,67.9932336 77.8,53.5800898 L77.8,0.55" id="Shape"></path>'+
                                            '<path d="M0.498591366,81.5960363 L0.222542476,8.95051361 L25.3591691,8.97846957 C25.3591691,8.97846957 37.645227,12.7855334 38.8019678,22.4649575 C39.9587085,32.1443817 34.4448249,42.773275 34.4448249,42.773275 L5.19120579,43.3108205 L35.4448249,43.5344357 C35.4448249,43.5344357 49.0098821,45.1693178 49.0098821,62.9411733 C49.0098821,80.7130288 36.1862647,81.5960363 36.1862647,81.5960363 L0.498591366,81.5960363 Z" id="Path-2"></path>'+
                                            '<path d="M209.926897,35.005397 C213.109217,3.24742192 177.788894,4.32860549 166.796111,13.9161329 C155.803327,23.5036603 156.706912,68.4395487 167.796111,76.3673942 C178.88531,84.2952396 198.396237,81.8071458 206.041592,77.7529698 C211.840443,74.6779575 213.951807,58.3031003 212.985745,51.8523001 C212.678126,49.7981978 187.213283,51.8523001 187.213283,51.8523001" id="Combined-Shape"></path>'+
                                        '</g>'+
                                        '<path d="M193,271.54 L263.4,271.54 C270.751547,271.543126 277.545913,267.622649 281.222146,261.256288 C284.89838,254.889926 284.897561,247.045594 281.22,240.68 L210.82,118.75 C207.147059,112.379899 200.353141,108.454848 193,108.454848 C185.646859,108.454848 178.852941,112.379899 175.18,118.75 L104.78,240.68 C101.102439,247.045594 101.10162,254.889926 104.777854,261.256288 C108.454087,267.622649 115.248453,271.543126 122.6,271.54 L193,271.54" id="outline" stroke="#FF6633" stroke-width="22"></path>'+
                                        '<g id="heatlineGroup" transform="translate(104.000000, 48.000000)" stroke="#FF6633" stroke-width="16">'+
                                            '<path d="M160.66,93 L174.22,77.94 C178.382524,73.3153732 178.382524,66.2946268 174.22,61.67 L168,54.74 C163.837476,50.1153732 163.837476,43.0946268 168,38.47 L174.23,31.54 C178.392524,26.9153732 178.392524,19.8946268 174.23,15.27 L160.66,0.2" id="Shape"></path>'+
                                            '<path d="M80.66,93 L94.24,77.91 C98.3909442,73.3000505 98.3909442,66.2999495 94.24,61.69 L87.96,54.69 C83.8090558,50.0800505 83.8090558,43.0799495 87.96,38.47 L94.24,31.47 C98.3909442,26.8600505 98.3909442,19.8599495 94.24,15.25 L80.66,0.2" id="Shape"></path>'+
                                            '<path d="M0.66,93 L14.26,77.89 C18.4007587,73.2914387 18.4007587,66.3085613 14.26,61.71 L7.94,54.71 C3.7992413,50.1114387 3.7992413,43.1285613 7.94,38.53 L14.26,31.53 C18.4007587,26.9314387 18.4007587,19.9485613 14.26,15.35 L0.66,0.24" id="Shape"></path>'+
                                        '</g>'+
                                    '</g>'+
                                '</g>'+
                            '</svg>'+
                         '<h6>需要做的地方有－－－</h6>'+
                      '</div>');
                 }
    };
    var ani=function(){
            TweenMax.set('#warning-bug-svg', {
            visibility: 'visible'
            })

            var tl = new TimelineMax({
            repeat: -1
            }).timeScale(1.4);
            tl.staggerFromTo('#bugGroup path', 0.5, {
            drawSVG: '0% 50%'
            }, {
            drawSVG: '0% 0%',
            ease: Sine.easeOut
            }, 0)

            .from('#outline', 1, {
                drawSVG: '0% 0%',
                ease: Sine.easeInOut
            }, '-=0.5')
            .from('#exclamationDot', 0.3, {
                attr: {
                r: 0
                }
            }, '-=0.3')
            .from('#exclamationLine', 0.0001, {
                autoAlpha: 0
            }, '-=0.31')
            .from('#exclamationLine', 0.5, {
                attr: {
                y1: 293
                }
            }, '-=0.3')
            .staggerFrom(['#exclamationLine', '#exclamationDot'], 1, {
                cycle: {
                y: [40, 20]
                },
                ease: Back.easeOut.config(2,0.7) //  Anticipate.easeIn
            }, 0.21, '-=1')

            .to('#exclamationLine', 0.5, {
                drawSVG: '100% 100%'
            }, '+=2')
            .to('#exclamationDot', 0.5, {
                attr: {
                r: 0
                }
            }, '-=0.3')
            .staggerTo(['#exclamationLine', '#exclamationDot'], 0.5, {
                cycle: {
                y: [40, 20]
                },
                ease:Back.easeOut.config(2,0.7) // Anticipate.easeOut
            }, 0.1, '-=0.5')

            .to('#outline', 1, {
                drawSVG: '100% 100%',
                ease: Sine.easeInOut
            }, '-=0.5')
            .set('#outline', {
                autoAlpha: 0
            })
            .staggerTo('#bugGroup path', 1, {
                drawSVG: '0% 100%'
            }, 0.08, '-=0.3')
            .to('#bugGroup path', 0.2, {
                stroke: '#ededed',
                repeat: 11,
                yoyo: true,
                ease: Linear.easeNone
            })
            .staggerFromTo('#heatlineGroup path', 0.5, {
            drawSVG:'0% 0%',
            alpha:0,
            stroke:'#f63'
            },{
            alpha:1,
            drawSVG:'0% 30%',
            ease:Linear.easeNone
            },0,'-=2.2')
            .staggerTo('#heatlineGroup path', 0.7, {
            drawSVG:'70% 100%',
            ease:Linear.easeNone,
            stroke:'#232C38'
            },0,'-=1.7')
            .staggerTo('#heatlineGroup path', 0.5, {
            drawSVG:'100% 100%',
            alpha:0,
            ease:Power1.easeOut
            },0,'-=1')

            .staggerTo('#bugGroup path', 0.5, {
                drawSVG: '0% 50%',
                ease: Sine.easeIn
            }, 0)
                        //TweenMax.globalTimeScale(0.5)
    };
    var done = function(){
           insertCoverPage();
           ani();
    };
    var cleanWarningBug = function(){
        var warn=$('.mdl-layout').find(".warning-bug-container");
        var isExist=warn.length;
         if(isExist>0){ warn.remove(); }
    };
    return {
         done:done,
         cleanWarningBug:cleanWarningBug
    };
})();
