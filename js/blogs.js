function scrollToTop() {
//Create button to scroll to top of page
  $('body').append('<div class="toTopNav ion-ios-arrow-up"><span class="hidden">Back to Top</span></div>');
  $('.toTopNav').css('cursor', 'pointer');
//Scroll to the top of page
  $('.toTopNav').click(function(){
    $('html, body').animate({scrollTop:0}, 'fast');
    return false;
  });
//Make button appear only when scrolled below 100px
  $(window).scroll(function(){
      if ($(this).scrollTop() > 400) {
	    $('.toTopNav').show();
	  }
	  if ($(this).scrollTop() < 400) {
	    $('.toTopNav').hide();
	  }
  });

}


function parseMd() {

$( ".marked" ).each(function( index ) {
  var text = $(this).html();
  var mdText = marked(text);
  $(this).after('<div class="mdOutput"></div>');
  $(this).next('.mdOutput').html(mdText);
});
  
}

console.log('blogs.js was read');
