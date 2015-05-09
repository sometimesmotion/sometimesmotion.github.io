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

//Loop through array and post to archive list  
var out = ""; 
var i;
for(i = 0; i < blogs.length; i++) {
   out += '<li>'+blogs[i].date+' - <a href="'+blogs[i].URL+'" target="_blank">'+blogs[i].title+'</a></li>';
}
$('#archive ul').append(out);
     
});
