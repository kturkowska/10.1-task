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

flkty.on( 'change', function( ){  
  map.panTo(slidesData[i].coords); 
  map.setZoom(20);
});


(function() {
 
    window.initMap = function() {
 
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: slidesData[0].coords
        });
 
        for (let i = 0; i < slidesData.length; i++) {
 
            var marker = new google.maps.Marker({
                position: slidesData[i].coords,
                map: map
            });
 
            marker.addListener('click', function() {
                flkty.selectCell(i);
            });
        }
    };
})();
