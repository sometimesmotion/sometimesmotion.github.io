$(document).ready(function(){
     
var blogs = [
{"title":"Web Literacy and #CritLib",
     "date":"05/05/15",
     "URL":"http://sometimesmotion.net/critlib-webliteracy.html"},
  
    {"title":"Second Blog", "date":"05/15/15",
     "URL":"http://sometimesmotion.net/critlib-webliteracy.html"},
  
    {"title":"Third Blog", "date":"05/21/25",
     "URL":"http://sometimesmotion.net/critlib-webliteracy.html"}
];
//$('#archive ul').prepend("hello world");
$('#archive ul').append('<li>'+blogs[0].date+' - <a href="'+blogs[0].URL+'" target="_blank">'+blogs[0].title+'</a>');
     
});
