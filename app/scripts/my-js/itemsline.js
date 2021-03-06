// jQuery(document).ready(function($){
var Itemsline=(function(){
		var dataMock = [
        {itemNo:"238906",shortName:"手表",
         imgUrl:["./images/images-photos-icons/photos/watch-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/watch-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/watch-for-live-auction1.jpeg"],
         description:"Eu dolor et sit minim consequat sunt."},
        {itemNo:"435412",shortName:"瓷器",
         imgUrl:["./images/images-photos-icons/photos/porcelain-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/porcelain-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/porcelain-for-live-auction1.jpeg"],
         description:"Tempor adipisicing est id excepteur aute eu tempor eiusmod ad cillum. Cillum aliqua est aliqua commodo esse veniam enim. Laborum est commodo commodo dolor incididunt ullamco mollit elit exercitation excepteur eu. Nulla culpa qui laboris pariatur ullamco excepteur sunt id aliqua minim. Enim et laboris id consectetur quis velit quis eu ad. Qui exercitation qui ad deserunt velit dolore."},
        {itemNo:"984506",shortName:"首饰",
         imgUrl:["./images/images-photos-icons/photos/jewellery-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/jewellery-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/jewellery-for-live-auction1.jpeg"],
         description:"Amet sunt sint reprehenderit duis ex ut enim Lorem eiusmod et."},
        {itemNo:"236785",shortName:"手表",
         imgUrl:["./images/images-photos-icons/photos/jewellery-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/jewellery-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/jewellery-for-live-auction1.jpeg"],
         description:"Do non dolore deserunt proident est do duis dolore cupidatat ea elit dolor. Excepteur ex pariatur consequat ullamco anim dolore eu incididunt voluptate proident pariatur. Velit ut ea aute et aute magna enim magna magna officia consectetur eiusmod duis. Consectetur id in aute nisi do laboris commodo. Consequat sunt eu adipisicing excepteur in eiusmod nostrud ea incididunt eiusmod deserunt. Sint ut exercitation exercitation velit sunt laborum nisi voluptate anim ad ullamco consequat. Ad qui adipisicing id laboris ut laboris eiusmod nostrud dolore ex."},
        {itemNo:"564356",shortName:"家具",
         imgUrl:["./images/images-photos-icons/photos/furnish-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/furnish-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/furnish-for-live-auction1.jpeg"],
         description:"Commodo sit labore commodo ex."},
        {itemNo:"765432",shortName:"瓷器",
         imgUrl:["./images/images-photos-icons/photos/porcelain-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/porcelain-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/porcelain-for-live-auction1.jpeg"],
         description:"Proident ex nulla non ipsum ex. Laboris officia esse minim nostrud. Cupidatat voluptate irure in nulla in quis dolor nulla. Mollit ex elit minim do ut tempor nostrud. Commodo sint commodo pariatur adipisicing pariatur consectetur ad proident fugiat eiusmod. Qui labore laborum adipisicing est in elit magna. Deserunt ea ex cupidatat proident quis id aute irure ipsum."},
        {itemNo:"345678",shortName:"首饰",
         imgUrl:["./images/images-photos-icons/photos/jewellery-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/jewellery-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/jewellery-for-live-auction1.jpeg"],
         description:"Exercitation consectetur commodo ea officia sunt reprehenderit esse esse dolore dolore duis eiusmod tempor ea."},
        {itemNo:"234567",shortName:"家具",
         imgUrl:["./images/images-photos-icons/photos/furnish-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/furnish-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/furnish-for-live-auction1.jpeg"],
         description:"Velit eu reprehenderit eiusmod exercitation qui voluptate reprehenderit laboris laborum veniam ad sunt incididunt."},
        {itemNo:"123456",shortName:"手表",
         imgUrl:["./images/images-photos-icons/photos/watch-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/watch-for-live-auction1.jpeg",
                 "./images/images-photos-icons/photos/watch-for-live-auction1.jpeg"],
         description:"Deserunt dolore magna dolor aliquip qui do quis ipsum non cillum ex esse. Ullamco sit nisi occaecat laboris voluptate veniam consequat eu deserunt. Sit sunt deserunt excepteur magna aliqua duis ea eiusmod reprehenderit dolore. Mollit sint duis Lorem nulla quis do elit eiusmod esse irure nostrud fugiat incididunt voluptate. Anim nisi ullamco proident et in dolor sint esse."}
    ];
	var eventsMinDistance = 45;
	var done = function(){
		var jPLine=$('.cd-horizontal-timeline'),
		jPEventContent=$('.live-auction__main').find('.mdl-card__supporting-text'),
		itemNum=20;
		
		insertItemsline(jPLine,jPEventContent,dataMock, itemNum);
		setTimeout(function(){
			var timelines = $('.cd-horizontal-timeline');
			(timelines.length > 0) && initTimeline(timelines);
			clickItemShowSomeOnHeader();
		},200);
    };  
	var initTimeline = function (timelines) {
		timelines.each(function(){
			var timeline = $(this),
				timelineComponents = {};
			//cache timeline components 
			timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
			timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
			timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
			timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
			// timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
			// timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
			// --this two func is for date not for itemsline
			timelineComponents['timelineDates'] = [];
			timelineComponents['eventsMinLapse'] = [];
			timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
			timelineComponents['eventsContent'] = $('.events-content');   // -timeline.children

			// --assign a left postion to the single events along the timeline
			setDatePosition(timelineComponents, eventsMinDistance);
			// --assign a width to the timeline
			var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
			//the timeline has been initialize - show it
			timeline.addClass('loaded');

			// --detect click on the next arrow
			timelineComponents['timelineNavigation'].on('click', '.next', function(event){
				event.preventDefault();
				updateSlide(timelineComponents, timelineTotWidth, 'next');
			});
			// --detect click on the prev arrow
			timelineComponents['timelineNavigation'].on('click', '.prev', function(event){
				event.preventDefault();
				updateSlide(timelineComponents, timelineTotWidth, 'prev');
			});
			// --detect click on the a single event - show new event content
			timelineComponents['eventsWrapper'].on('click', 'a', function(event){
				event.preventDefault();
				timelineComponents['timelineEvents'].removeClass('selected');
				$(this).addClass('selected');
				updateOlderEvents($(this));
				updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
				updateVisibleContent($(this), timelineComponents['eventsContent']);
			});

			// --on swipe, show next/prev event content
			timelineComponents['eventsContent'].on('swipeleft', function(){
				var mq = checkMQ();
				(mq == 'mobile') && showNewContent(timelineComponents, timelineTotWidth, 'next');
			});
			timelineComponents['eventsContent'].on('swiperight', function(){
				var mq = checkMQ();
				(mq == 'mobile') && showNewContent(timelineComponents, timelineTotWidth, 'prev');
			});

			// --keyboard navigation
			$(document).keyup(function(event){
				if(event.which=='37' && elementInViewport(timeline.get(0)) ) {
					showNewContent(timelineComponents, timelineTotWidth, 'prev');
				} else if( event.which=='39' && elementInViewport(timeline.get(0))) {
					showNewContent(timelineComponents, timelineTotWidth, 'next');
				}
			});
		});
	};

	var updateSlide = function (timelineComponents, timelineTotWidth, string) {
		// --retrieve translateX value of timelineComponents['eventsWrapper']
		var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
			wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
		// --translate the timeline to the left('next')/right('prev') 
		(string == 'next') 
			? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
			: translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
	};

	var showNewContent = function (timelineComponents, timelineTotWidth, string) {
		//go from one event to the next/previous one
		var visibleContent =  timelineComponents['eventsContent'].find('.selected'),
			newContent = ( string == 'next' ) ? visibleContent.next() : visibleContent.prev();

		if ( newContent.length > 0 ) { //if there's a next/prev event - show it
			var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
				newEvent = ( string == 'next' ) ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');
			
			updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
			updateVisibleContent(newEvent, timelineComponents['eventsContent']);
			newEvent.addClass('selected');
			selectedDate.removeClass('selected');
			updateOlderEvents(newEvent);
			updateTimelinePosition(string, newEvent, timelineComponents);
		}
	};

	var updateTimelinePosition = function (string, event, timelineComponents) {
		// --translate timeline to the left/right according to the position of the selected event
		var eventStyle = window.getComputedStyle(event.get(0), null),
			eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
			timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
			timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
		var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);

        if((string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate) ) {
        	translateTimeline(timelineComponents, - eventLeft + timelineWidth/2, timelineWidth - timelineTotWidth);
        }
	};

	var translateTimeline = function (timelineComponents, value, totWidth) {
		var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
		value = (value > 0) ? 0 : value; 
		// --only negative translate value
		value = (!(typeof totWidth === 'undefined') &&  value < totWidth) ? totWidth : value; 
		// --do not translate more than timeline width
		setTransformValue(eventsWrapper, 'translateX', value+'px');
		// --update navigation arrows visibility
		(value == 0 ) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
		(value == totWidth ) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
	};

	var updateFilling = function (selectedEvent, filling, totWidth) {
		//change .filling-line length according to the selected event
		var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
			eventLeft = eventStyle.getPropertyValue("left"),
			eventWidth = eventStyle.getPropertyValue("width");
		eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', ''))/2;
		var scaleValue = eventLeft/totWidth;
		setTransformValue(filling.get(0), 'scaleX', scaleValue);
	};

	var setDatePosition = function (timelineComponents, min) {
		for (var i = 0; i < timelineComponents['timelineEvents'].length; i++) { 
			timelineComponents['timelineEvents'].eq(i).css('left', min*(1+i)+2+'px');
		}
	};

	var setTimelineWidth = function (timelineComponents, width) {
		var totalWidth = timelineComponents['timelineEvents'].length * width + 4;
		timelineComponents['eventsWrapper'].css('width', totalWidth+'px');
		updateFilling(timelineComponents['eventsWrapper'].find('a.selected'), timelineComponents['fillingLine'], totalWidth);
		updateTimelinePosition('next', timelineComponents['eventsWrapper'].find('a.selected'), timelineComponents);
	
		return totalWidth;
	};

	var updateVisibleContent = function (event, eventsContent) {
		var eventDate = event.data('date'),
			visibleContent = eventsContent.find('.selected'),
			selectedContent = eventsContent.find('[data-date="'+ eventDate +'"]'),
			selectedContentHeight = selectedContent.height();

		if (selectedContent.index() > visibleContent.index()) {
			var classEnetering = 'selected enter-right',
				classLeaving = 'leave-left';
		} else {
			var classEnetering = 'selected enter-left',
				classLeaving = 'leave-right';
		}

		selectedContent.attr('class', classEnetering);
		visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			visibleContent.removeClass('leave-right leave-left');
			selectedContent.removeClass('enter-left enter-right');
		});
		eventsContent.css('height', selectedContentHeight+'px');
	};

	var updateOlderEvents = function (event) {
		event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
	};

	var getTranslateValue = function (timeline) {
		var timelineStyle = window.getComputedStyle(timeline.get(0), null),
			timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
         		timelineStyle.getPropertyValue("-moz-transform") ||
         		timelineStyle.getPropertyValue("-ms-transform") ||
         		timelineStyle.getPropertyValue("-o-transform") ||
         		timelineStyle.getPropertyValue("transform");

        if( timelineTranslate.indexOf('(') >=0 ) {
        	var timelineTranslate = timelineTranslate.split('(')[1];
    		timelineTranslate = timelineTranslate.split(')')[0];
    		timelineTranslate = timelineTranslate.split(',');
    		var translateValue = timelineTranslate[4];
        } else {
        	var translateValue = 0;
        }

        return Number(translateValue);
	};

	var setTransformValue= function(element, property, value) {
		element.style["-webkit-transform"] = property + "("+ value + ")";
		element.style["-moz-transform"] = property+"("+value+")";
		element.style["-ms-transform"] = property+"("+value+")";
		element.style["-o-transform"] = property+"("+value+")";
		element.style["transform"] = property+"("+value+")";
	};

	// --based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
	var parseDate = function(events) {
		var dateArrays = [];
		events.each(function(){
			var singleDate = $(this),
				dateComp = singleDate.data('date').split('T');
			if(dateComp.length > 1){  
				// --both DD/MM/YEAR and time are provided
				var dayComp = dateComp[0].split('/'),
					timeComp = dateComp[1].split(':');
			} else if(dateComp[0].indexOf(':') >=0){  
				// --only time is provide
				var dayComp = ["2000", "0", "0"],
					timeComp = dateComp[0].split(':');
			} else { 
				// --only DD/MM/YEAR
				var dayComp = dateComp[0].split('/'),
					timeComp = ["0", "0"];
			}
			var	newDate = new Date(dayComp[2], dayComp[1]-1, dayComp[0], timeComp[0], timeComp[1]);
			dateArrays.push(newDate);
		});
		return dateArrays;
	};

	var daydiff = function(first, second) {
		return Math.round((second-first));
	}

	function minLapse(dates) {
		//determine the minimum distance among events
		var dateDistances = [];
		for (i = 1; i < dates.length; i++) { 
		    var distance = daydiff(dates[i-1], dates[i]);
		    dateDistances.push(distance);
		}
		return Math.min.apply(null, dateDistances);
	};
	var elementInViewport = function(el) {
		var top = el.offsetTop;
		var left = el.offsetLeft;
		var width = el.offsetWidth;
		var height = el.offsetHeight;

		while(el.offsetParent) {
		    el = el.offsetParent;
		    top += el.offsetTop;
		    left += el.offsetLeft;
		}

		return (
		    top < (window.pageYOffset + window.innerHeight) &&
		    left < (window.pageXOffset + window.innerWidth) &&
		    (top + height) > window.pageYOffset &&
		    (left + width) > window.pageXOffset
		);
	};
	var checkMQ = function() {
		// -- check if mobile or desktop device
		return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
	};
var createItemslineString = function(dataMock,itemsNum) {
        var startStr1 = 
							'<div class="timeline">'+
								'<div class="events-wrapper">'+
									'<div class="events">'+
										'<ol>';
        var middleStr1 = "";
        var endStr1 =                    '</ol>'+
										'<span class="filling-line" aria-hidden="true"></span>' +
									'</div> <!-- .events -->' +
								'</div> <!-- .events-wrapper -->'+
								'<ul class="cd-timeline-navigation">'+
									'<li><a href="#0" class="prev inactive">Prev</a></li>'+
									'<li><a href="#0" class="next">Next</a></li>'+
								'</ul> <!-- .cd-timeline-navigation -->'+
							'</div> <!-- .timeline -->';
		var startStr2 = '<div class="events-content">'+
							'<ol>';
		var middleStr2 = "";
		var endStr2 = 	 	'</ol>'+
						'</div> <!-- .events-content -->';
        var randomIndexArr=[];
        var len=dataMock.length;
        for (var i=0; i<itemsNum; i++){
            randomIndexArr.push(getRandomInt(0, len-1));
        }
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        $.each(randomIndexArr,function(ind,obj){
            middleStr1 = middleStr1 +
				'<li><a href="#0" data-date="'+dataMock[obj].itemNo+'" class="'+(ind === 0 ? "selected" : "") +'">'+dataMock[obj].shortName+'</a></li>';
            middleStr2 = middleStr2 +
						'<li class="'+(ind === 0 ? "selected" : "") +'" data-date="'+dataMock[obj].itemNo+'">'+
							'<h2>'+dataMock[obj].shortName+'<span class="itemsline__items-status itemsline__items-status__willBid">即将拍</span></h2>' +	
							'<div class="itemsline-img-container">' +
							'<img class="itemsline-img" src="'+dataMock[obj].imgUrl[0]+'" />' +
							'<img class="itemsline-img" src="'+dataMock[obj].imgUrl[1]+'" />' +
							'<img class="itemsline-img" src="'+dataMock[obj].imgUrl[2]+'" />' +  
							// '<img class="itemsline-img" src="'+dataMock[obj].imgUrl[0]+'" />' +
							// '<img class="itemsline-img" src="'+dataMock[obj].imgUrl[1]+'" />' +
							// '<img class="itemsline-img" src="'+dataMock[obj].imgUrl[2]+'" />' +  
							'</div>'+
							'<p>'+dataMock[obj].description+'</p>'+
						'</li>';
		});
        return [startStr1+middleStr1+endStr1,startStr2+middleStr2+endStr2];
};
var clickItemShowSomeOnHeader = function(){
	var els=$('.cd-horizontal-timeline').find('.events-wrapper').find('ol>li');
	var str = "";
	els.on('click',function(){
		str=$(this).find('a').text();
		$('#liveAuction-page').trigger('clickChangeItemOnHeader',[str]);
	});
};
var insertItemsline = function(jParent1,jParent2,dataMock,itemNum){
	if (!jParent1.find('.timeline').length>0 && !jParent2.find('.event-contents').length>0){
		var str = createItemslineString(dataMock,itemNum);
		$(jParent1).prepend(str[0]);
		$(jParent2).prepend(str[1]);
	}
};
return {
	done:done
};
})();
// });

