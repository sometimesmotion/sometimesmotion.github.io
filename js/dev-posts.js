var text = '{"title":"Web Literacy and #CritLib","URL":"http://sometimesmotion.net/critlib-webliteracy.html","date":"5/5/15"}';

function postsData() {

var obj = JSON.parse(text);

$('#archiveList').append('<li><a href="'+obj.URL+'">'+obj.title+'</a></li>');

  
}
