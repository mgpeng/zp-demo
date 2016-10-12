var LiveAuction=(function(){
    var dataMock=[
        {shortName:"手表",
         imgUrl:["./images/images-photos-icons/photos/watch-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/watch-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/watch-for-live-auction1.jpeg"],
         description:"Eu dolor et sit minim consequat sunt."},
        {shortName:"瓷器",
         imgUrl:["./images/images-photos-icons/photos/porcelain-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/porcelain-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/porcelain-for-live-auction1.jpeg"],
         description:"Tempor adipisicing est id excepteur aute eu tempor eiusmod ad cillum. Cillum aliqua est aliqua commodo esse veniam enim. Laborum est commodo commodo dolor incididunt ullamco mollit elit exercitation excepteur eu. Nulla culpa qui laboris pariatur ullamco excepteur sunt id aliqua minim. Enim et laboris id consectetur quis velit quis eu ad. Qui exercitation qui ad deserunt velit dolore."},
        {shortName:"首饰",
         imgUrl:["./images/images-photos-icons/photos/jewellery-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/jewellery-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/jewellery-for-live-auction1.jpeg"],
         description:"Amet sunt sint reprehenderit duis ex ut enim Lorem eiusmod et."},
        {shortName:"手表",
         imgUrl:["./images/images-photos-icons/photos/jewellery-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/jewellery-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/jewellery-for-live-auction1.jpeg"],
         description:"Do non dolore deserunt proident est do duis dolore cupidatat ea elit dolor. Excepteur ex pariatur consequat ullamco anim dolore eu incididunt voluptate proident pariatur. Velit ut ea aute et aute magna enim magna magna officia consectetur eiusmod duis. Consectetur id in aute nisi do laboris commodo. Consequat sunt eu adipisicing excepteur in eiusmod nostrud ea incididunt eiusmod deserunt. Sint ut exercitation exercitation velit sunt laborum nisi voluptate anim ad ullamco consequat. Ad qui adipisicing id laboris ut laboris eiusmod nostrud dolore ex."},
        {shortName:"家具",
         imgUrl:["./images/images-photos-icons/photos/furnish-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/furnish-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/furnish-for-live-auction1.jpeg"],
         description:"Commodo sit labore commodo ex."},
        {shortName:"瓷器",
         imgUrl:["./images/images-photos-icons/photos/porcelain-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/porcelain-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/porcelain-for-live-auction1.jpeg"],
         description:"Proident ex nulla non ipsum ex. Laboris officia esse minim nostrud. Cupidatat voluptate irure in nulla in quis dolor nulla. Mollit ex elit minim do ut tempor nostrud. Commodo sint commodo pariatur adipisicing pariatur consectetur ad proident fugiat eiusmod. Qui labore laborum adipisicing est in elit magna. Deserunt ea ex cupidatat proident quis id aute irure ipsum."},
        {shortName:"首饰",
         imgUrl:["./images/images-photos-icons/photos/jewellery-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/jewellery-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/jewellery-for-live-auction1.jpeg"],
         description:"Exercitation consectetur commodo ea officia sunt reprehenderit esse esse dolore dolore duis eiusmod tempor ea."},
        {shortName:"家具",
         imgUrl:["./images/images-photos-icons/photos/furnish-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/furnish-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/furnish-for-live-auction1.jpeg"],
         description:"Velit eu reprehenderit eiusmod exercitation qui voluptate reprehenderit laboris laborum veniam ad sunt incididunt."},
        {shortName:"手表",
         imgUrl:["./images/images-photos-icons/photos/watch-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/watch-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/watch-for-live-auction1.jpeg"],
         description:"Deserunt dolore magna dolor aliquip qui do quis ipsum non cillum ex esse. Ullamco sit nisi occaecat laboris voluptate veniam consequat eu deserunt. Sit sunt deserunt excepteur magna aliqua duis ea eiusmod reprehenderit dolore. Mollit sint duis Lorem nulla quis do elit eiusmod esse irure nostrud fugiat incididunt voluptate. Anim nisi ullamco proident et in dolor sint esse."}
    ];
    var createEl = function(itemsNum) {
        var startStr = '<div class="live-auction__items-container">';
        var middleStr = "";
        var endStr = '</div>'+
                    '<div class="mdl-pg__decor-line-grey"></div>';
        var randomIndexArr=[];
        var len=dataMock.length;
        for (var i=0; i<itemsNum; i++){
            randomIndexArr.push(getRandomInt(0, len-1));
        }
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        $.each(randomIndexArr,function(ind,obj){
            middleStr=middleStr+
                '<div class="live-auction__item">'+
                    '<div class="live-auction__items-short-name">'+dataMock[obj].shortName+'</div>'+
                    '<img class="live-auction__items-main-images" src="'+dataMock[obj].imgUrl[0]+'" />'+
                '</div>';
        });
        return startStr+middleStr+endStr;
    };
    var changeToIsBidding = function(){
        var defaultInd=7;
        var findOne=$('.live-auction__items-container').find('.live-auction__item:nth-child('+defaultInd+')');
        findOne.addClass('isBidding');
    };
    var insertBiddingItems = function(jParent) {
        var el=createEl(18);
        if (jParent.siblings('.live-auction__items-container').length>0){
            console.log('already insert live-auction container');
        } else {
            $(el).insertAfter(jParent);
            changeToIsBidding();
        }
    };
    var checkImgIsLoaded = function(elList){

    };
    return {
       insertBiddingItems:insertBiddingItems
    };
})();
