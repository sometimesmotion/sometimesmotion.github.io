var blogs = [ 
  {
    "title" : "Web Literacy and #CritLib",
    "url" : "/posts/critlib-webliteracy.html",
    "date":"5/5/15",
    "category":"web literacy"
  },
  {
    "title" : "Post template",
    "url" : "/template.html",
    "date":"5/24/15",
    "category":"blog framework"
  },
  {
    "title" : "A JS-Based Blogging Framework for Github Pages",
    "url" : "/index.html",
    "date":"5/15/15",
    "category":"blog framework"
  }
];

/*-----------------------------------------------------------------------

To add new metadata for a post, copy the template from here (the comma on the first line is important)
and paste it after the last curly brace } in the blogs JSON array above
list the posts in ascending order (from oldest to newest):

,
  {
    "title" : "",
    "url" : "",
    "date":",
    "category":""
  }

-----------------------------------------------------------------------*/

//Populate the dropdown menu with archived posts
function postsData() {
  for (var i = 0; i < blogs.length; i++) {
    $('#archiveList').append('<li><a href="'+blogs[i].url+'">'+blogs[i].title+'</a></li>');
  }
}

//Populate the archive list in the footer
function recentPosts() {
  for (var j = 0; j < blogs.length; j++) {
    $('#recent ul').append("<li><a href='"+blogs[j].url+"'>"+blogs[j].title+"</a></li>");
  }
}

//Create dynamic links for next and previous posts
$('#next').hide();
$('#prev').hide();

//Populate the next and previous links with the correct info
for (var k = 0; k < blogs.length; k++) {
  var url = blogs[k].url;

  //find where the current page sits in list
  var curURL = window.location.href; 
  curURL = curURL.replace(/^[^_]*.io/, '');
  if (curURL === "/") {
    curURL = 'index.html';
  }
  console.log('curURL: '+curURL);
  if(url === curURL){
    var place = k;
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
