var links = [ 
  {
    "text": "Projects",
    "url": "http://jsbin.com/cihibo/",
    "title":"Projects, Gists, &amp; Snippets"
  },
  {
    "text": "Bike Rides",
    "url": "http://sometimesmotion.net/rideMapper.html",
    "title":"Rides map (leaflet.js)"
  },
  {
    "text": "Instruction",
    "url": "http://sometimesmotion.net/projects.html",
    "title":"Lesson Plans"
  },
  {
    "text": "Business Card",
    "url": "#",
    "title":"Tim Miller's Contact Info"
  }
];

/*-----------------------------------------------------------------------
To add new metadata for a link, copy the template from here (the comma on the first line is important)
and paste it after the last curly brace } in the blogs JSON array above:
,
  {
    "title" : "",
    "url" : "",
    "date":",
    "category":""
  }
-----------------------------------------------------------------------*/


//Populate the dropdown menu with these links
function linksData() {

  for (var i = 0; i < links.length; i++) {
    $('#linksList').append('<li><a href="'+links[i].url+'" target="_blank" title="' + links[i].title + '">'+links[i].text+'</a></li>');
  } 
}
