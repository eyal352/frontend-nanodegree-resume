/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append(["Eyal Chistik"]);


var name = "Eyal Chistik";
var role = "Front End Developer";


var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$( "#header" ).prepend(formattedRole);
$( "#header" ).prepend(formattedName);


var skills = ["JavaScript", "HTML", "CSS", "Responsive Design", "Python", "Marketing", "Advertising", "Surfing"];

var bio = {
	"name": "Eyal Chistik",
    "role": "Front End Developer",
    "contacts": {"email": "eyal.chistik@gmail.com","github": "eyal352","location": "Tel Aviv"},
	"biopic": "https://avatars1.githubusercontent.com/u/16916606?v=3&s=460",
	"welcomeMessage": "Welcome To Eyal's Bio",
	 "skills": skills
};

var education = {
	"schools" : [
		{
			"name" : "San Francisco State University",
			"location" : "San Francisco, CA, USA",
			"degree" : "BA",
			"major" : ["International Relations"],
			"dates" : " ",
			"url" : "http://www.sfsu.edu"
		},
		{
			"name" : "Udacity",
			"location" : "Online, CyberSpace",
			"degree" : "Nanodegree Credential",
			"major" : ["Front End Web Development"],
			"dates" : " ",
			"url" : "http://www.udacity.com"
		}
	]
};

var work = {
	"jobs" : [
		{
			"Employer" : "Adgorithms",
			"Title" : "Customer Relations Manager",
			"Location" : "Tel Aviv, Israel",
			"Dates" : "January 2015 - February 2016",
			"Description" : "• Provide comprehensive solutions to advertisers to help reach their marketing goals and KPIs through digital advertising campaigns • Build custom sales strategies and perform market research to find potential fields of interests and clients • Negotiate Insertion Order contracts with global clients • Manage multiple pixel and subID implementations for tracking and optimizing campaigns • Build and implement S2S and other tracking links (Appsflyer, Adjust, Tune, etc.) to analyze and optimize digital campaigns •Manage and scale multiple mobile advertising and marketing campaigns across different Geos"
		},
		{
			"Employer" : "Coca-Cola",
			"Title" : "Market Development Manager",
			"Location" : "San Francisco, CA",
			"Dates" : "June 2012 - September 2014",
			"Description" : "Recognized among the top 10 associates for executing sales initiatives and establishing new business partners within the San Francisco Bay Area. Implemented processes and metrics to drive customer satisfaction, client retention and growth. Designed marketing and sales materials to increase consumer awareness and consumption. Executed and closed sales operations and contractual agreements focused on value added selling activities. Developed and analyzed reports outlining expansion prospects including cost analysis, growth, and short and long term planning."
		}
	]
};

var projects = {
	"projects" : [
		{
			"Title" : "StudioMunk",
			"Dates" : " ",
			"Description" :"An online music streaming platform integrating social media and allowing users to stream and share their favorite music in an ad-free environment.",
			"Images" : ["http://www.studiomunk.com/images/toplogo.png"]
		}
	]
};

projects.display = function() {
    for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].Title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].Description);
    $(".project-entry:last").append(formattedDescription);
    }
};

projects.display();
// why am I calling the display function again?

//$("#header").append(education.schools[0].name);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);

}



function displayWork() {

    for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].Employer);

    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].Title);
    // concat employer and title
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle)

    var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].Location);
    $(".work-entry:last").append(formattedworkLocation);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].Dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data", work.jobs[job].Description);
    $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();


$(document).click(function(loc) {
  // your code goes here
	var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase(); 

	return newName;
};

$("#main").append(internationalizeButton);