$(document).ready(function() {
	createMap();
});

function createMap(){
	ymaps.ready(init);
    
    function init(){
		var myMap = new ymaps.Map("map", {
        	center: [59.89106259461844, 30.450020485993274], 
        	zoom: 12,
        	controls: [],

        });

        myPlacemark = new ymaps.Placemark(
        	[59.89666897024405, 30.392342263337017], 
        	{ 
        		hintContent: 'Москва!', 
        		balloonContent: 'Столица России' 
        	},{
        		iconLayout: 'default#image',
        		iconImageHref: 'images/marker.png',
     			iconImageSize: [42, 58],
        	});

        myMap.geoObjects.add(myPlacemark);
        myMap.controls.add('zoomControl');
        myMap.behaviors.disable('scrollZoom');
	}
}
