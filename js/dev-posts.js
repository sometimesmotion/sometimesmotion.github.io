var text = '{"title":"John Johnson","URL":"http://sometimesmotion.net/critlib-webliteracy.html","phone":"555 1234567"}';

function postsData() {

var obj = JSON.parse(text);

$('#archiveList').append('<li><a href="'+obj.URL+'">'+obj.title+'</a></li>');

  
}
