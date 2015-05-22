function parseMd() {

  $( ".marked" ).each(function( index ) {
    var text = $(this).html();
    var mdText = marked(text);
    $(this).after('<div class="mdOutput"></div>');
    $(this).next('.mdOutput').html(mdText);
  });
 
 var d = new Date(); // for now
d.getHours(); // => 9
d.getMinutes(); // =>  30
d.getSeconds(); // => 51
var blogsTime = d.getHours()+':'+d.getMinutes()+":"+d.getSeconds();

 console.log('dev-blogs.js updated: '+blogsTime); 
}
