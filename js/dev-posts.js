var text = '{"name":"John Johnson","street":"Oslo West 16","phone":"555 1234567"}';

function postsData() {

var obj = JSON.parse(text);

$('#display').append(obj.name);

  
}
