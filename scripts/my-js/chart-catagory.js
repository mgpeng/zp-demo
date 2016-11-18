var ChartCatagory = (function(){
    var createLineChartDataObjStrcture = function(onDataArr,outDataArr,titileStr,prefixStr,suffixStr){
            return {
                type: 'line',
                data: {
                    labels: ["-4天", "", "","", "今天", "","", "", "+4天"],
                    datasets: [{
                        label: '拍品数量',
                        data: onDataArr,
                        backgroundColor: 'rgba(98, 157, 252, 0.5)',
                        borderWidth: 1,
                        fontColor:'rgba(250, 250, 250, 0.7)'
                    },
                    {
                        label: '成交件数',
                        data: outDataArr,
                        backgroundColor:'rgb(63, 252, 253,0.5)',
                        borderWidth: 2,
                        fontColor:'rgba(250, 250, 250, 0.7)'
                    }
                    ]
                },
                options: {
                    responsive:true,
                    element:{
                        display:true,
                        point:{
                           radius:2.5
                        }
                    },
                    defaultFontSize:9,
                    title: {
                        display: true,
                        text: titileStr,
                        padding:10,
                        fontColor:'rgba(250, 250, 250, 0.7)'
                    },
                    axisY : {
                        prefix: prefixStr,
                        suffix: suffixStr
                    }  
                }
            };
     };
     var createLineChartDataObj = function(){
            var onDataArrArr=[[19, 19, 13, 25, 50, 23, 9.03,15, 13, 15],[190, 200, 90, 250, 300, 98, 93,150, 213, 115]];
            var outDataArrArr=[[10, 11, 3, 15, 20, 9.03],[100, 190, 50, 190, 20, 93]];
            var titleStrArr=['瓷器 近九天上拍和拍出量','家具 近九天上拍和拍出量'];
            var prefixStrArr=["",""];
            var suffixStrArr=["",""];
            var objArr=[];
            $.each(onDataArrArr,function(ind,obj){
                var objstr=createLineChartDataObjStrcture(obj,outDataArrArr[ind],titleStrArr[ind],prefixStrArr[ind],suffixStrArr[ind]);
                objArr.push(objstr);
            });
            return objArr;
     };
     var createBarPieDoughnutChartDataObjStrcture = function(chartType,barLableArr,dataArr){
            return {
                    type: chartType,
                    data: {
                            labels: barLableArr,
                            datasets: [
                                {
                                    data: dataArr,
                                    backgroundColor: ["rgba(92, 107, 192, 0.5)", "rgba(63, 81, 181, 0.5)", "rgba(48, 63, 159, 0.5)"],
                                    hoverBackgroundColor: ["rgb(92, 225, 236)","rgb(53, 197, 231)","rgb(75, 181, 223)"]
                                }]
                            },
                    options: {
                        legend: {
                            display: true,
                            labels: {
                                boxWidth: 3,
                                fontSize:8,
                                fontColor:'rgba(250, 250, 250, 0.7)'
                            }
                        },
                        responsive:true,
                        defaultFontSize:8,
                        title: {
                            display: false
                        }
                    }
                 };
     };
     var createBarPieDoughnutChartDataObj = function(chartType){
           var arrlable=[["英国瓷器","法国瓷器","美国瓷器"],["美国家具","法国家具","德国家具"],["加利拍卖行","ABC拍卖行","纽约拍卖行"],["超出估价","低于估价","极低价"]];
           var dArr=[[300,100,50],[150,130,90],[50,30,15],[108,90,400]];
           var arr=[];
           
           $.each(arrlable,function(ind,obj){
               var ostr=createBarPieDoughnutChartDataObjStrcture(chartType,obj,dArr[ind]);
               arr.push(ostr);
           });
           return arr;
     };
     var setChartCanvaAndParentWidthHeight = function(jCanvaArr,whArr){
         $.each(jCanvaArr,function(ind,obj){
              obj.attr('width',whArr[ind].width);
              obj.attr('height',whArr[ind].height);
              obj.parent().css({width:whArr[ind].width,height:whArr[ind].height});
         });
     };

return {
   createLineChartDataObj: createLineChartDataObj,
   createBarPieDoughnutChartDataObj:createBarPieDoughnutChartDataObj,
   setChartCanvaAndParentWidthHeight:setChartCanvaAndParentWidthHeight
};
})();
                    var tt=new TimelineMax();
                    tt.set('section.main-chart',{display:'block'})
                      .from('section.main-chart',0.3,{opacity:0,width:0});
                    var ctx1 = $("#myChart1");
                    var ctx2 = $("#myChart2");
                    var ctx3 = $("#myChart3");
                    var ctx4 = $("#myChart4");
                    var ctx5 = $("#myChart5");
                    var ctx6 = $("#myChart6");
                    ChartCatagory.setChartCanvaAndParentWidthHeight([ctx1,ctx2],[{width:300,height:150},{width:300,height:150}]);
                    ChartCatagory.setChartCanvaAndParentWidthHeight([ctx3,ctx4],[{width:135,height:150},{width:135,height:150}]);
                    ChartCatagory.setChartCanvaAndParentWidthHeight([ctx5,ctx6],[{width:135,height:150},{width:135,height:150}]);
                    var objStrArrLine=ChartCatagory.createLineChartDataObj();
                    var objStrArrDuoghnut=ChartCatagory.createBarPieDoughnutChartDataObj('doughnut');
                    var mChart1 = new Chart(ctx1, objStrArrLine[0]);
                    var mChart2 = new Chart(ctx2, objStrArrLine[1]);
                    var mChart3 = new Chart(ctx3, objStrArrDuoghnut[0]);
                    var mChart4 = new Chart(ctx4, objStrArrDuoghnut[1]);
                    var mChart3 = new Chart(ctx5, objStrArrDuoghnut[2]);
                    var mChart4 = new Chart(ctx6, objStrArrDuoghnut[3]); 
