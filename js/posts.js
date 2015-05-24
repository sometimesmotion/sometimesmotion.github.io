var blogs = [ 
  {
    "title" : "Web Literacy and #CritLib",
    "url" : "/posts/critlib-webliteracy.html",
    "date":"5/5/15",
    "category":"web literacy"
  },
  {
    "title" : "A JS-Based Blogging Framework for Github Pages",
    "url" : "http://sometimesmotion.github.io/index.html",
    "date":"5/15/15",
    "category":"blog framework"
  }
];

/*-----------------------------------------------------------------------

To add new metadata for a post, copy the template from here (the comma on the first line is important)
and paste it after the last curly brace } in the blogs JSON array above:

,
  {
    "title" : "",
    "url" : "",
    "date":",
    "category":""
  }

-----------------------------------------------------------------------*/


//Create dynamic links for next and previous posts
$('#next').hide();
$('#prev').hide();
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

//Populate the next and previous links with the correct info
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
    $('#prev').show(); 
    $('#prev').attr('href',prevPost);
  }
  
}
