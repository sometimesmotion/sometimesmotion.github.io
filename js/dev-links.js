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

function linksData() {

  for (var i = 0; i < links.length; i++) {
    output += '<li><a href="'+links[i].url+'" target="_blank" title="' + links[i].title + '">'+links[i].text+'</a></li>';
    $('#linksList').append(output);
  }
  
}
