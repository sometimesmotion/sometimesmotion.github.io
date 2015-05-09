function testRun() {
     $('h1').text('Running...');
}//end testRun()

function jsonRun() {
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
var output = "";
var i;
for(i = 0; i < blogs.length; i++) {
     output += '<li><a href="'+blogs[i].URL+'" target="_blank">'+blogs[i].date+blogs[i].title+'</a></li>';
}
$('#archiveList').append(out);

testRun();
} //end jsonRun()
