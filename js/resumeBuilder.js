/*
This is empty on purpose! Your code to build the resume will go here.
 */

const bio = {
  name : 'Jungpil YU',
  role : 'Software Engineer',
  contacts : {
    mobile: '010-1234-5678',
    email: 'yu@jungpil.org',
    github: 'https://github.com/jungpilyu',
    twitter: '@jungpilyu',
    location: 'Seoul, South Korea'
  },
  welcomeMessage: 'Welcome, you\'ve just entered my home',
  skills: ['Software', 'Hardware', 'Mechanics'],
  biopic: 'images/fry.jpg',
  display: () => {
    const role = HTMLheaderRole.replace('%data%', bio.role);
    $('#header:first').prepend(role);
    const name = HTMLheaderName.replace('%data%', bio.name);
    $('#header:first').prepend(name);

    const mobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    $('#topContacts:last').append(mobile);
    $('#footerContacts:last').append(mobile);
    const email = HTMLemail.replace('%data%', bio.contacts.email);
    $('#topContacts:last').append(email);
    $('#footerContacts:last').append(email);
    const github = HTMLgithub.replace('%data%', bio.contacts.github);
    $('#topContacts:last').append(github);
    $('#footerContacts:last').append(github);
    const twitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    $('#topContacts:last').append(twitter);
    $('#footerContacts:last').append(twitter);
    const location = HTMLlocation.replace('%data%', bio.contacts.location);
    $('#topContacts:last').append(location);
    $('#footerContacts:last').append(location);

    const biopic = HTMLbioPic.replace('%data%', bio.biopic);
    $('#header:last').append(biopic);

    const welcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header:last').append(welcome);
    $("#header:last").append(HTMLskillsStart);
    bio.skills.forEach((skill) => {
      const aSkill = HTMLskills.replace('%data%', skill);
      $("#skills:last").append(aSkill);
    });


  } //function taking no parameters
};

const education = {
  schools: [ //array of objects with
    {
      name: 'Telecom ParisTech',
      location: 'Paris, France',
      degree: 'PhD',
      majors: ['Communications','Electronics'],
      dates: '2002-12-12',
      url: 'http://telecom-paristech.fr'
    },
    {
      name: 'KAIST',
      location: 'Daejon, South Korea',
      degree: 'MSEE',
      majors: ['Neural Network','Signal Processing'],
      dates: '1997-2-28',
      url: 'http://www.kaist.ac.kr'
    },
    {
      name: 'Hanyang University',
      location: 'Seoul, South Korea',
      degree: 'BS',
      majors: ['Communications','Electronics'],
      dates: '1995-2-28',
      url: 'http://www.hanyang.ac.kr'
    }
  ],
  onlineCourses: [//array of objects with
    {
      title: 'FEND',
      school: 'Udacity',
      dates: '2019-1-30',
      url: 'https://udacity.com'
    },
    {
      title: 'CarND',
      school: 'Udacity',
      dates: '2018-1-30',
      url: 'https://udacity.com'
    }
  ],
  display: () => {
    $('#education').append(HTMLschoolStart);
    education.schools.forEach((school) => {
      const name = HTMLschoolName.replace('%data%', school.name);
      const degree = HTMLschoolDegree.replace('%data%', school.degree);
      $(".education-entry:last").append(name + degree);
      const dates = HTMLschoolDates.replace('%data%', school.dates);
      $(".education-entry:last").append(dates);
      const location = HTMLschoolLocation.replace('%data%', school.location);
      $(".education-entry:last").append(location);
      const majors = HTMLschoolMajor.replace('%data%', school.majors);
      $(".education-entry:last").append(majors);
      const url = HTMLonlineURL.replace('%data%', school.url);
      $(".education-entry:last").append(url);
    });
    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach((online) => {
      const title = HTMLonlineTitle.replace('%data%', online.title);
      const school = HTMLonlineSchool.replace('%data%', online.school);
      $(".education-entry:last").append(title + school);
      const dates = HTMLonlineDates.replace('%data%', online.dates);
      $(".education-entry:last").append(dates);
      const url = HTMLonlineURL.replace('%data%', online.url);
      $(".education-entry:last").append(url);
    });
  }//function taking no parameters
};

const work = {
  jobs: [//array of objects with
    {
      employer: 'Samsung Electronics',
      title: 'Principal Engineer',
      location: 'Suwon, South Korea',
      dates: '2005-4-1 ~ in procgress',
      description: 'Research and Development'
    },
    {
      employer: 'CNES',
      title: 'Engineer',
      location: 'Toulouse, France',
      dates: '2002-12.1 ~ 2004-11-31',
      description: 'Research and Development'
    }
  ],
  display: () => {
    //let here = document.querySelector('#workExperience');
    //const start = document.createElement(HTMLworkStart);
    //here.insertAdjacentElement('beforeend', start);
    $('#workExperience').append(HTMLworkStart);
    work.jobs.forEach((job) => {
      const employer = HTMLworkEmployer.replace('%data%', job.employer);
      const title = HTMLworkTitle.replace('%data%', job.title);
      $(".work-entry:last").append(employer + title);
      const location = HTMLworkLocation.replace('%data%', job.location);
      $(".work-entry:last").append(location);
      const dates = HTMLworkDates.replace('%data%', job.dates);
      $(".work-entry:last").append(dates);
      const desc = HTMLworkDescription.replace('%data%', job.description);
      $(".work-entry:last").append(desc);
    });
  }//function taking no parameters
};

const projects = {
  projects: [//array of objects with
    {
      title: 'Blockchain Bank',
      dates: '2018-7-16 ~ 2019-7-15',
      description: 'A blockchain-based application',
      images: 'images/197x148.gif'
    },
    {
      title: 'AI Codec',
      dates: '2017-7-16 ~ 2018-7-15',
      description: 'A Ai-based application',
      images: 'images/197x148.gif'
    }
  ],
  display: () => {
    $('#projects').append(HTMLprojectStart);
    projects.projects.forEach((project) => {
      const title = HTMLprojectTitle.replace('%data%', project.title);
      $(".project-entry:last").append(title);
      const dates = HTMLprojectDates.replace('%data%', project.dates);
      $(".project-entry:last").append(dates);
      const description = HTMLprojectDescription.replace('%data%', project.description);
      $(".project-entry:last").append(description);
      const images = HTMLprojectImage.replace('%data%', project.images);
      $(".project-entry:last").append(images)
    });
  }//function taking no parameters
};

bio.display();
education.display();
work.display();
projects.display();
$('#mapDiv:last').append(googleMap);
//$('#mapDiv:last').append(internationalizeButton);
