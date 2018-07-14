'use strict';



(function() {
 
    var templateList = document.getElementById('template-list').innerHTML;
    var templateItem = document.getElementById('template-slide').innerHTML;
    Mustache.parse(templateItem);
 
    var listItems = '';
 
    for (var i = 0; i < slidesData.length; i++) {
        console.log(slidesData);
        listItems += Mustache.render(templateItem, slidesData[i]);
    }
 
    var fullProductList = Mustache.render(templateList, { slides: listItems });
    slider.insertAdjacentHTML('beforeend', fullProductList);
 
 
})();
 
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
 
});



var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.selectCell( index );
});



var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});


(function(){ 
  
  // Definujemy funkcję initMap w zakresie globalnym (czyli jako właściwość obiektu window).
    window.initMap = function() {
    
    // Zapisujemy w zmiennej obiekt zawierający współrzędne geograficzne.
    var uluru = {lat: -25.363, lng: 131.044};
    
    // W zmiennej map zapisujemy nową instancję obiektu Map. 
    var map = new google.maps.Map(document.getElementById('map'), {
      // Podajemy opcje mapy, np. zoom i punkt wycentrowania mapy.
      zoom: 4,
      center: uluru
    });
    
    // Definiujemy marker jako nową instancję obiektu Marker.
    var marker = new google.maps.Marker({
      // I podajemy opcje tego markera, np. na której mapie ma być dodany oraz jakie są jego współrzędne. 
      position: uluru,
      map: map
    }); 
  } 
   
})();  
initMap();