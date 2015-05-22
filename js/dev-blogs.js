function parseMd() {

$( ".marked" ).each(function( index ) {
  var text = $(this).html();
  var mdText = marked(text);
  //if md is w/in a <span> element, strip <p> tags
  var tagType = $(this)[0].nodeName;
  //console.log('type: '+tagType);
  if (tagType === "SPAN") {
    mdText = mdText.replace('<p>','');
    mdText = mdText.replace('</p>','');
    $(this).after('<span class="mdOutput"></span>');
    $(this).next('.mdOutput').html(mdText);
  } else {
    $(this).after('<span class="mdOutput"></span>');
    $(this).next('.mdOutput').html(mdText);
  }
});
  
}

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
