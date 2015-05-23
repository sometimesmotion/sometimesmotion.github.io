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
  for (var i = 0; i < blogs.length; i++) {
    $('#archiveList').append('<li><a href="'+blogs[i].url+'">'+blogs[i].title+'</a></li>');
  }
}

function recentPosts() {
  for (var i = 0; i < blogs.length; i++) {
    $('#recent ul').append("<li><a href='"+blogs[i].url+"'>"+blogs[i].title+"</a></li>");
  }
}


for (var i = 0; i < blogs.length; i++) {
  var url = blogs[i].url;

  //find where the current page sits in list
  var curURL = window.location.href; 
  if(url === curURL){
    var place = i;
  }
  var nextPlace = place + 1;
  var postsLen = blogs.length;

  //next
  if (nextPlace < postsLen) {
  var nextPost = blogs[nextPlace].url;
    $('#next').show();
  $('#next').attr('href',nextPost);
  }

  //prev
  var prevPlace = place - 1;
  if (prevPlace >= 0){
  var prevPost = blogs[prevPlace].url;
  $('#prev').show(); $('#prev').attr('href',prevPost);
  }
  
}
