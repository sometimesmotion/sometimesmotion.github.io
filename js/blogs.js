$(document).ready(function(){

function navInsert() {

 //add new nav element w/ class navbar
 $('body').prepend('<nav class="navbar navbar-default navbar-fixed-top" id="mainNav"></nav>');
 //create container
 $('#mainNav').prepend('<div class="container"></div>');
 //navbar-header
 $('#mainNav .container').prepend('<div class="navbar-header"></div>');
 //navbar-brand
 $('#mainNav .navbar-header').prepend('<a href="#" class="navbar-brand">Sometimes Motion</a>');
 //navbar-toggle ???is this needed???
 $('#mainNav .navbar-header').append('<button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>');

 //moving on to the collapsing elements
 $('#mainNav .container').append('<div class="navbar-collapse collapse" id="navbar-main"></div>');
 //left-side ul
 $('#mainNav .navbar-collapse').prepend('<ul class="nav navbar-nav" id="leftNav"></ul>');
 //add links to left-side ul
 $('#leftNav').prepend('<li class="active"><a href="#">Blog</a></li>');
 //add archive drop-down
 $('#leftNav').append('<li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Archive <span class="caret"></span></a><ul class="dropdown-menu" id="archiveList" aria-labelledby="archive"></ul></li>');
 //add items to archive drop-down
 //$('#archiveList').html('<li><a href="#">5/05/15</a></li>');

 //right-side ul
 $('#mainNav .navbar-collapse').append('<ul class="nav navbar-nav navbar-right"></ul>');
 //add other drop-down
 $('.navbar-right').prepend('<li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Other things <span class="caret"></span></a><ul class="dropdown-menu" id="otherList" aria-labelledby="other"></li>');
 //add items to other drop-down -- ****delete when autopopulating****
 //$('#otherList').prepend('<li><a href="#">Projects</a></li><li><a href="#">Bike Rides</a></li><li><a href="#">Instruction</a></li><li><a href="#">Business Card</a></li>');

}//end navInsert()

function ssInsert() {
  //add stylesheets after dynamically loaded strapdown.js sheets
  $('head').append("<link href='https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.4/flatly/bootstrap.min.css' rel='stylesheet' type='text/css'>");
  $('head').append("<link rel='stylesheet' text='text/css' href='css/blogs.css'>");
}//end ssInsert()

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


}); //end document ready function



function postsData(blogs) {
  var output = "";
  var i;
  for(i = 0; i<blogs.length; i++) {
    output += '<li><a href="'+blogs[i].url+'" target="_blank">'+blogs[i].date+' - '+blogs[i].title+'</a></li>';
  }
  $('#archiveList').append(output);
}


function linksData(links) {
  var output = "";
  var i;
  for(i = 0; i<links.length; i++) {
    output += '<li><a href="'+links[i].url+'" target="_blank" title="' + links[i].title + '">'+links[i].text+'</a></li>';
  }
  $('#otherList').append(output);
}
