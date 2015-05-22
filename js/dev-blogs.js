function parseMd() {

  $( ".marked" ).each(function( index ) {
    var text = $(this).html();
    var mdText = marked(text);
    $(this).after('<div class="mdOutput"></div>');
    $(this).next('.mdOutput').html(mdText);
  });

 console.log('dev-blogs.js updated: '+12:06); 
}
