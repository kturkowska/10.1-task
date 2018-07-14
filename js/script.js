'use strict';
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,

});


(function(){ 

  var templateList = document.getElementById('template-product-list').innerHTML;
  var templateItem = document.getElementById('template-product-item').innerHTML;
  Mustache.parse(templateItem);
  var listItems = '';
  for(var i = 0; i < productsData.length; i++){
    console.log(productsData);
    listItems += Mustache.render(templateItem, productsData[i]);
  } 
  var fullProductList = Mustache.render(templateList, {products: listItems});
  results.insertAdjacentHTML('beforeend', fullProductList);
})(); 
 





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
