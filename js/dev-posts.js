var blogs = [ 
  {
    "title" : "Web Literacy and #CritLib",
    "url" : "http://sometimesmotion.net/critlib-webliteracy.html",
    "date":"5/5/15"
  }, 
  {
    "title" : "Web Literacy: Surveillance &amp; Privacy",
    "url" : "http://google.com",
    "date":"5/24/15"
  }
];

function postsData() {

  //var obj = JSON.parse(blogs);

  for (var i = 0; i < blogs.length; i++) {
    $('#archiveList').append('<li><a href="'+blogs[i].url+'">'+blogs[i].title+'</a></li>');
  }

  
}
