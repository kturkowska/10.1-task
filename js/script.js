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
  
    window.initMap = function() {
    
    var venice = {lat: 33.986, lng: -118.475};
    var vegas = {lat: 36.170, lng: -115.139};
    var canyon = {lat: 36.099, lng: -112.103};
    var monument = {lat: 37.020, lng: -110.098};
    var sanfran = {lat: 37.823, lng: -122.479};
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: venice
    });
    
    var markerOne = new google.maps.Marker({
      position: venice,
      map: map
    });
    
    var markerTwo = new google.maps.Marker({
      position: vegas,
      map: map
    });


    
    var markerThree = new google.maps.Marker({
      position: canyon,
      map: map
    });

     var markerThree = new google.maps.Marker({
      position: monument,
      map: map
    });

      var markerThree = new google.maps.Marker({
      position: sanfran,
      map: map
    });
     
    } 
   
})();  
initMap();