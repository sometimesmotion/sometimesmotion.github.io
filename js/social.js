var social = [ 
  {
    "type" : "Twitter",
    "title" : "@tmillerLibrary on Twitter",
    "url" : "https://twitter.com/tmillerLibrary"
  }, 
  {
    "type" : "Email",
    "title" : "Send me an email",
    "url" : "mailto:millrt138@hotmail.com"
  }, 
  {
    "type" : "Contact",
    "title" : "View my contact info",
    "url" : "http://t.co/nk55Zb5Dwx"
  }, 
  {
    "type" : "Facebook",
    "title" : "",
    "url" : ""
  }, 
  {
    "type" : "Github",
    "title" : "Sometimes Motion at Github",
    "url" : "https://github.com/sometimesmotion"
  }, 
  {
    "type" : "Instagram",
    "title" : "",
    "url" : ""
  }, 
  {
    "type" : "Pinterest",
    "title" : "",
    "url" : ""
  }, 
  {
    "type" : "Tumblr",
    "title" : "",
    "url" : ""
  }, 
  {
    "type" : "Google+",
    "title" : "",
    "url" : ""
  }, 
  {
    "type" : "LinkedIn",
    "title" : "",
    "url" : ""
  }, 
  {
    "type" : "SnapChat",
    "title" : "",
    "url" : ""
  }, 
  {
    "type" : "YouTube",
    "title" : "",
    "url" : ""
  }
];

function socialLinks(){

  for (var i = 0; i < social.length; i++) {
   //create list from the JSON alone
    var type = social[i].type;
    var title = social[i].title;
    var icon = "";
    var color = "";
    switch (type) {
      case "Twitter":
        icon = 'ion-social-twitter-outline';
        color = 'info';
        break;
      case "Email":
        icon = 'ion-ios-email-outline';
        color = 'danger';
        break;
      case "Contact":
        icon = 'ion-ios-person-outline';
        color = 'warning';
        break;
      case "Facebook":
        icon = 'ion-social-facebook-outline';
        color = 'info';
        break;
      case "Github":
        icon = 'ion-social-github-outline';
        color = 'success';
        break;
      case "Tumblr":
        icon = "ion-social-tumblr-outline";
        color = "primary";
        break;
      case "Pinterest":
        icon = "ion-social-pinterest-outline";
        color = "danger";
        break;
      case "Instagram":
        icon = 'ion-social-instagram-outline';
        color = 'primary';
        break;
      case "Google+":
        icon = "ion-social-googleplus-outline";
        color = "warning";
        break;
      case "LinkedIn":
        icon = "ion-social-linkedin-outline";
        color = "info";
        break;
      case "YouTube":
        icon = "ion-social-youtube-outline";
        color = "danger";
        break;
      case "SnapChat":
        icon = "ion-social-snapchat-outline";
        color = "warning";
        break;
      case "CreateYourOwn":
        icon = ""; //look up icon @ http://ionicons.com/
        color = ""; //choose from bootstrap button colors - http://getbootstrap.com/css/#buttons-options
        break;
    } //end switch
    var url = social[i].url;
    if(url){
      $('.socialFoot').append('<a href="'+url+'" class="btn btn-'+color+' social"><span class="hidden">'+title+'</span><span class="'+icon+'"></span></a>');
    }
  }

}
