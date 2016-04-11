//Variables for bio, work, education, projects
//'use strict';
var bio = {
	"name": "Eyal Chistik",
    "role": "Front End Developer",
    "contacts": {"email": "<a href='mailto:eyal.chistik@gmail.com' id='contact'>eyal.chistik@gmail.com</a>", "github": "<a href='https://github.com/eyal352' id='contact'>eyal352</a>", "twitter": "<a href='https://twitter.com/Eyal352' id='contact'>@Eyal352",
    "location": "<a href='https://www.google.com/#q=tel+aviv' id='contact'>Tel Aviv</a>"},
	"biopic": "https://avatars1.githubusercontent.com/u/16916606?v=3&s=460",
	"welcomeMessage": "Passionate about all things technical and cyber",
	 "skills": ["JavaScript", "jQuery", "HTML5", "CSS3", "BootStrap", "Python", "Marketing", "Advertising", "Design"]
};

var contactItem = {
    "email" : '<i class="fa fa-envelope-o"></i>',
    "github" : '<i class="fa fa-github"></i>',
    "twitter" : '<i class="fa fa-twitter"></i>',
    "location" : '<i class="fa fa-location-arrow"></i>'
};

var work = {
	"jobs" : [
		{
			"Employer" : "Adgorithms",
			"Title" : "Customer Relations Manager",
			"Location" : "Tel Aviv, Israel",
			"Dates" : "January 2015 - February 2016",
			"Description" : "Provided comprehensive solutions to advertisers to help reach their marketing goals and KPIs through digital advertising campaigns. Managed multiple pixel and subID implementations for tracking and optimizing campaigns. Built and implemented S2S and other tracking links (Appsflyer, Adjust, Tune, etc.). Managed and scaled multiple mobile advertising and marketing campaigns across different countries and regions.",
            "url" : "http://www.adgorithms.com/"
		},
		{
			"Employer" : "Coca-Cola",
			"Title" : "Market Development Manager",
			"Location" : "San Francisco, CA",
			"Dates" : "June 2012 - September 2014",
			"Description" : "Recognized among the top 10 associates for executing sales initiatives and establishing new business partners within the San Francisco Bay Area. Implemented processes and metrics to drive customer satisfaction, client retention and growth. Designed marketing and sales materials to increase consumer awareness and consumption. Executed and closed sales operations and contractual agreements focused on value added selling activities. Developed and analyzed reports outlining expansion prospects including cost analysis, growth, and short and long term planning.",
            "url" : "http://www.coca-colacompany.com/"
		}
	]
};

var projects = {
	"projects" : [
		{
			"Title" : "StudioMunk",
			"Dates" : "2013 - Ongoing",
			"Description" : "Used HTML, CSS, and Javascript to build an online music streaming platform integrating social media and allowing users to stream and share their favorite music in an ad-free environment.",
			"Images" : ["http://www.studiomunk.com/images/toplogo.png"],
            "url" : "http://www.studiomunk.com/"
		},
        {
            "Title" : "Portfolio Project",
            "Dates" : "2016",
            "Description" : "A fully responsive portfolio site outlining my current and previous projects.",
            "Images" : ["https://raw.githubusercontent.com/eyal352/interactive-resume/gh-pages/images/portfolio.png"],
            "url" : "http://eyal352.github.io"
        }
	]
};


var education = {
	"schools" : [
		{
			"name" : "San Francisco State University",
			"location" : "San Francisco, CA",
			"degree" : "Bachelor of Arts",
			"major" : "International Relations",
			"dates" : "2007 - 2011",
			"url" : "http://www.sfsu.edu"
		},
		{
			"name" : "Udacity",
			"location" : "Tel Aviv, Israel",
			"degree" : "Nanodegree Credential",
			"major" : "Front End Web Development",
			"dates" : "January 2016 - Ongoing",
			"url" : "http://www.udacity.com"
		}
	]
};

var skills = {
  "skills": [{
    id : "HTML",
    value: 0.7,
    text: "HTML"
  },
  {
    id : "CSS",
    value: 0.7,
    text: "CSS"
  },
  {
    id : "Javascript",
    value: 0.5,
    text: "Javascript"
  },
  {id : "Bootstrap",
   value : "0.5",
   text : "Bootstrap"}]
};

var circles = {};

skills.display = function() {
    for (var skill in skills.skills) {
    var progressbarName = HTMLProgressName.replace("%data%", skills.skills[skill].text);
    var progressbar = HTMLCircleProgress.replace("%data%", skills.skills[skill].id);
    $("#skillsprogress").append(progressbar);
    $(".progress:last").append(progressbarName);
  }
 // $("#skillsprogress").append(clearfix);
};

skills.createCircles = function() {

    for(var skill in skills.skills) {
  var id = "#" + skills.skills[skill].id;
  var circle = new ProgressBar.Circle(id,{
      text : {
        value : 0
      },
      step : function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0) + "%");
      },
      trailColor: '#f4f4f4',
      color: '#1199c3',
      strokeWidth: 2,
      duration: 2500,
      easing: 'easeInOut'
    });
  circles[skills.skills[skill].id] = circle;
  }
};

skills.display();
skills.createCircles();

// functions for bio, work, projects, education, contact

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedRole).prepend(formattedName);
    $("#header").append(bioPic);
    $("#header").append(welcomeMsg);
    $("#header").append(HTMLskillsStart);

    for (var contact in bio.contacts) {
        formattedContact = HTMLcontactGeneric.replace("%contact%", contactItem[contact]).replace("%data%", bio.contacts[contact]);
        $("#footerContacts").append(formattedContact);
        $("#topContacts").append(formattedContact);
    }
// Vanilla JS Version
   for(var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }

// jQuery Method
/*    $.each(bio.skills, function(i, val){
        var formattedSkills = HTMLskills.replace("%data%", val);
        $("#skills").append(formattedSkills);
    }) */
    
/*    bio.skills.forEach(function(skill){
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkills);
    }) */
};



projects.display = function() {
    'use strict';
    for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].Title).replace("#", projects.projects[project].url);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].Dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].Description);
    $(".project-entry:last").append(formattedDescription);

    for (var image in projects.projects[project].Images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].Images[image]);
			$(".project-entry:last").append(formattedImage);
        }
    }
};

work.display = function () {
    'use strict';
    for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("#", work.jobs[job].url).replace("%data%", work.jobs[job].Employer);

    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].Title);
    // concat employer and title
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle)

    var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].Location);
    $(".work-entry:last").append(formattedworkLocation);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].Dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].Description);
    $(".work-entry:last").append(formattedDescription);
    }
};


education.display = function () {
    'use strict';
    for (var school in education.schools){
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name).replace("#", education.schools[school].url);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);

        $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
    }

};

bio.display();
work.display();
education.display();
projects.display();

$(document).click(function(loc) {
  // your code goes here
	var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

/*
function inName(name) {
    name = name.trim().split(" "); // trim() will trim any white space before and after the string
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] +" "+ name[1];
}; */

//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);