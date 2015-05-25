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

function socialLinks() {
var social = [ 
  {
    "title" : "@tmillerLibrary on Twitter",
    "url" : "https://twitter.com/tmillerLibrary",
    "type":"Twitter"
  }, 
  {
    "title" : "Send me an email",
    "url" : "mailto:millrt138@hotmail.com",
    "type":"Email"
  }, 
  {
    "title" : "View my contact info",
    "url" : "http://t.co/nk55Zb5Dwx",
    "type":"Contact"
  }
];

for (var i = 0; i < social.length; i++) {
  var type = social[i].type;
  if (type === "Twitter") {
    $('.socialFoot').append('<a href="#" class="btn btn-info social"><span class="hidden">Twitter</span><span class="ion-social-twitter-outline"></span></a>');
  } else if (type === "Email") {
    $('.socialFoot').append('<a href="#" class="btn btn-danger social"><span class="hidden">Email</span><span class="ion-ios-email-outline"></span></a>');
  } else if (type === "Contact") {
    $('.socialFoot').append('<a href="#" class="btn btn-warning social"><span class="hidden">Contact</span><span class="ion-ios-person-outline"></span></a>');
  }
}

}
