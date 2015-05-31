var bio = {
  "name": "iPoval",
  "role": "SDE &mdash; Software consulting and development",
  "contacts": {
    "mobile": "213-253-5665",
    "email": "ipoval@ya.ru",
    "github": "ipoval",
    "twitter": "@ipoval",
    "location": "San Francisco, CA"
  },
  "welcomeMessage": "Web Design + New Media",
  "skills": ['linux', 'ruby lang', 'go lang', 'js lang', 'web development', 'system administration'],
  "bioPic": "images/jdit.jpg",

  display: function() {
    $('#header').prepend(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));
    $('#header').prepend(HTMLheaderRole.replace('%data%', this.role));
    $('#header').prepend(HTMLheaderName.replace('%data%', this.name));
    $('#header').append(HTMLbioPic.replace('%data%', this.bioPic));

    this.showContacts();
    this.showSkills();
  },

  showContacts: function() {
    $('#topContacts').append(HTMLmobile.replace('%data%', this.contacts.mobile));
    $('#topContacts').append(HTMLemail.replace('%data%', this.contacts.email));
    $('#topContacts').append(HTMLgithub.replace('%data%', this.contacts.github));
    $('#topContacts').append(HTMLtwitter.replace('%data%', this.contacts.twitter));
    $('#topContacts').append(HTMLlocation.replace('%data%', this.contacts.location));
  },

  showSkills: function() {
    if (this.skills.length > 0) {
      $('#header').append(HTMLskillsStart);
      for (var skill in this.skills) {
        var formatted = HTMLskills.replace("%data%", this.skills[skill]);
        $("#skills").append(formatted);
      }
    }
  }
};

var education = {
  "schools": [
    {
      "name": "Academy of Arts University",
      "date": "2004-2008",
      "degree": "BS",
      "major": "Computer Science",
      "location": "79 New Montgomery St, San Francisco, CA 94105"
    }
  ],
  "onlineCourses": [
    {
      "title": "Javascript Udacity",
      "school": "Udacity Online",
      "date": "2015-02 - 2015-05",
      "url": "https://udacity.com"
    }
  ],

  display: function() {
    for (school in this.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
      $('.education-entry:last').append(formattedName + formattedDegree);

      var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].date);
      $('.education-entry:last').append(formattedDates);

      var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
      $('.education-entry:last').append(formattedLocation);

      var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].major);
      $('.education-entry:last').append(formattedMajor);
    }

    for (onlineCourse in this.onlineCourses) {
      $("#education").append(HTMLschoolStart);
      $('.education-entry:last').append(HTMLonlineClasses);
      var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[onlineCourse].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[onlineCourse].school);
      $('.education-entry:last').append(formattedTitle + formattedSchool);

      var formattedDates = HTMLonlineDates.replace("%data%", this.onlineCourses[onlineCourse].date);
      $('.education-entry:last').append(formattedDates);

      var formattedURL = HTMLonlineURL.replace("%data%", this.onlineCourses[onlineCourse].url);
      $('.education-entry:last').append('<br/>');
    }
  }
};

var work = {
  "jobs": [
    {
      "employer": "Google",
      "title": "SDE II",
      "years": 2,
      "location": "1600 Amphitheatre Parkway, Mountain View, CA 94043",
      "description": "Lead Performance Engineer",
      "dates": "Feb 2014 - Current"
    },
    {
      "employer": "Gobbler Inc.",
      "title": "Web developer",
      "years": 2,
      "location": "340 Main Street, Los Angeles, CA 90291",
      "description": "Web development, Dev. Ops., Cloud Storage and Transfer Company",
      "dates": "Jun 2009 - Jun 2012"
    },
  ],

  display: function() {
    for (job in this.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);

      var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);

      var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  },

  locationizer: function() {
    var locationArray = [];
    for (job in this.jobs) {
      var newLoc = this.jobs[job].location;
      locationArray.push(newLoc);
    }
    return locationArray;
  }
};

var projects = {
  "projects": [
    {
      "title": "Secrets Out of Source",
      "team": "Rails",
      "initiative": "Core Services",
      "description": "Secrets Out of Source",
      "dates": "2014-2015"
    },
    {
      "title": "Android Notifications",
      "team": "Teams on Mobile",
      "initiative": "Mobile Growth",
      "description": "Android Notifications",
      "dates": "2013-2014"
    },
  ],

  display: function() {
    for (project in this.projects) {
      $('#projects').append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
      $(".project-entry:last").append(formattedTitle);
      var formattedDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
      $(".project-entry:last").append(formattedDates);
      var formattedDescription = HTMLprojectDates.replace("%data%", this.projects[project].description);
      $(".project-entry:last").append("<br/>");
      $(".project-entry:last").append(formattedDescription);
      $(".project-entry:last").append("<br/><br/>");
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();

function inName(name) {
  var names = name.trim().split(' ');
  var fN = names[0];
  fN = fN.slice(0, 1).toUpperCase() + fN.slice(1).toLowerCase();
  var lN = names[1].toUpperCase();
  return fN + ' ' + lN;
}

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);
