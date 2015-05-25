function parseMd() {

$( ".marked" ).each(function( index ) {
  var text = $(this).text();
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

function shareLinks(){
	
}
  var curURL = window.location.href;
  var msg = $('title').text();
  //$('footer').append(msg);
  var twitterURL = 'http://twitter.com/share?text='+msg+'&url='+curURL;
console.log(twitterURL);
  var gplusURL = 'https://plus.google.com/share?url='+curURL;
  var tumblrURL = 'http://www.tumblr.com/share/link?url='+curURL+'&amp;name='+msg;
  var facebookURL = 'https://www.facebook.com/sharer/sharer.php?u='+curURL+'&t='+msg;
//Twitter
  $('#shareLinks .dropdown-menu').append('<li><a href="'+twitterURL+'" target="_blank" class="twitterShare"><span class="hidden shareName">Twitter</span><span class="icon ion-social-twitter"></span></a></li>');
//Facebook
  $('#shareLinks .dropdown-menu').append('<li><a href="'+facebookURL+'" target="_blank" class="facebookShare"><span class="hidden shareName">Facebook</span><span class="icon ion-social-facebook"></span></a></li>');    
//Tumblr
  $('#shareLinks .dropdown-menu').append('<li><a href="'+tumblrURL+'" target="_blank" class="tumblrShare"><span class="hidden shareName">Tumblr</span><span class="icon ion-social-tumblr"></span></a></li>');    
//Google+
  $('#shareLinks .dropdown-menu').append('<li><a href="'+gplusURL+'" target="_blank" class="gplusShare"><span class="hidden shareName">Google +</span><span class="icon ion-social-googleplus-outline"></span></a></li>');    
  
}
