
function postsData(blogs) {
  var output = "";
  var i;
  for(i = 0; i<blogs.length; i++) {
    output += '<li><a href="'+blogs[i].url+'" target="_blank">'+blogs[i].date+' - '+blogs[i].title+'</a></li>';
  }
  $('#archiveList').append(output);
}

postsData([
{
"title": "HTML Tutorial",
"url": "http://www.w3schools.com/html/default.asp",
"date":"5/1/15"
},
{
"title": "CSS Tutorial",
"url": "http://www.w3schools.com/css/default.asp",
"date":"5/2/15"
},
{
"title": "JavaScript Tutorial",
"url": "http://www.w3schools.com/js/default.asp",
"date":"5/3/15"
},
{
"title": "jQuery Tutorial",
"url": "http://www.w3schools.com/jquery/default.asp",
"date":"5/4/15"
},
{
"title": "JSON Tutorial",
"url": "http://www.w3schools.com/json/default.asp",
"date":"5/5/15"
}
])


