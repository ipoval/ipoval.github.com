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

  show: function() {
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
      "years": "2004-2008",
      "city": "San Francisco, CA, US",
      "degree": "BS",
      "major": "Computer Science",
      "location": "79 New Montgomery St, San Francisco, CA 94105"
    }
  ],
  "onlineCourses": [
    {
      "title": "Javascript Udacity",
      "school": "Udacity Online",
      "dates": "2015-02 - 2015-05",
      "url": "https://udacity.com",
      "location": "San Francisco, CA"
    }
  ]
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

  show: function() {
    for (job in this.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

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
      $(".project-entry:last").append("<br/>");
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDates.replace("%data%", this.projects[project].description);
      $(".project-entry:last").append("<br/>");
      $(".project-entry:last").append(formattedDescription);

      $(".project-entry:last").append("<br/><br/>");
    }
  }
};

bio.show();
work.show();
projects.display();

function inName(name) {
  var names = name.trim().split(' ');
  var fN = names[0];
  fN = fN.slice(0, 1).toUpperCase() + fN.slice(1).toLowerCase();
  var lN = names[1].toUpperCase();
  return fN + ' ' + lN;
}

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);
