var bio = {
	name : 'Tor Gilbertson',
	role : 'Web Developer',
	contacts : {
	      mobile: '(406) 624-9775',
	      email: 'sterlingrobot@gmail.com',
	      github: 'sterlingrobot',
	      twitter: '@sterlingrobot',
	      location: 'Bozeman, Montana'
  	},
	welcomeMessage: 'Let\'s get this party started.' ,
	skills: [
		{ name: 'HTML5', logoPos: 5, proficiency: 4 },
		{ name: 'CSS3', logoPos: 6, proficiency: 4 },
		{ name: 'Bootstrap', logoPos: 7, proficiency: 4 },
		{ name: 'Apache', logoPos: 2, proficiency: 2 },
		{ name: 'PHP', logoPos: 0, proficiency: 4 },
		{ name: 'MySQL', logoPos: 1, proficiency: 3 },
		{ name: 'JavaScript', logoPos: 4, proficiency: 4 },
		{ name: 'jQuery', logoPos: 3, proficiency: 4 },
		{ name: 'AngularJS', logoPos: 8, proficiency: 1 },
		{ name: 'ActionScript3', logoPos: 15, proficiency: 4 },
		{ name: 'Photoshop', logoPos: 9, proficiency: 5 },
		{ name: 'Illustrator', logoPos: 10, proficiency: 5 },
		{ name: 'Fireworks', logoPos: 13, proficiency: 4 },
		{ name: 'InDesign', logoPos: 11, proficiency: 4 },
		{ name: 'Flash', logoPos: 12, proficiency: 4 },
		{ name: 'Flash Builder', logoPos: 14, proficiency: 3 },
	],
	biopic: 'images/fry.jpg',
	display: function() {
		var self = this,
			levels = [
				{},
				{ name: 'Learning', color: '#F56B23' },
				{ name: 'Training', color: '#F5AE23' },
				{ name: 'Developing', color: '#23DDF5' },
				{ name: 'Using', color: '#23F58D' },
				{ name: 'Rocking it!', color: '#40F523' },
			],
			colLeft = $('<div class="col-sm-4"></div>'),
			colRight = $('<div class="col-sm-8"></div>');

		for(var contact in self.contacts) {
			$('#topContacts, #footerContacts').append(window['HTML'+contact].replace('%data%', self.contacts[contact]));
		}

		$('#header').prepend(HTMLheaderRole.replace('%data%', self.role))
		$('#header').prepend(HTMLheaderName.replace('%data%', self.name));

		colLeft.append(HTMLbioPic.replace('%data%', self.biopic))
		colLeft.prepend(HTMLWelcomeMsg.replace('%data%', self.welcomeMessage))
		colRight.append(HTMLskillsStart);

		$('#header').append(colLeft).append(colRight);

		$('#skills').append('<li class="skill-legend"><ul></ul></li>');

		levels.forEach(function(level) {
			var name = level.name || '&nbsp;',
				toggle = level.name ? 'data-toggle="tooltip"' : '';
				el = $('#skills').find('.skill-legend > ul');
			el.append('<li class="skill-level"><a href="" ' + toggle + ' title="' + name + '"></a></li>');
		});

		$('.skill-level a').on('click', function(e) { e.preventDefault(); });

		self.skills.forEach(function(skill) {
			var el = $(HTMLskills.replace('%data%', skill.name));
			el.find('.skill-logo img').css('top', -skill.logoPos*36 + 'px');
			$('#skills').append(el);
			el.find('.skill-proficiency')
				.css({ 'background-color': levels[skill.proficiency].color, opacity : 0.7 })
				.text(levels[skill.proficiency].name)
				.animate({ width : '+'+skill.proficiency*15+'%'}, skill.proficiency*500);

		});
	}
};

var education = {
	schools: [{
		name: 'Augustana College',
		degree: 'Bachelor of Arts',
		dates: 1999,
		location: 'Sioux Falls, South Dakota',
		majors: ['Studio Art', 'Spanish'],
		url: 'http://www.augie.edu'
	}],
	onlineCourses: [{
	     title: 'Front-End Web Developer Nanodegree',
	     school: 'Udacity',
	     dates: 2015,
	     url: 'http://www.udacity.com'
	 }],
	display: function () {
		var self = this;
		self.schools.forEach(function(school) {
			var el = $(HTMLschoolStart);
			$('#education').append(el);
			for(var key in school) {
				if(Array.isArray(school[key])) {
					school[key].forEach(function(val) {
						var keyTitle = key.charAt(0).toUpperCase() + key.substr(1, key.length-2).toLowerCase();
						el.append(window['HTMLschool'+keyTitle].replace('%data%', val));
					});
				} else if(key === 'url') {
					el.find('a').attr('href', school[key]);
				} else {
					var keyTitle = key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();
					el.append(window['HTMLschool'+keyTitle].replace('%data%', school[key]));
				}
			}
		});
		$('#education').append(HTMLonlineClasses);
		self.onlineCourses.forEach(function(course) {
			var el = $(HTMLschoolStart);
			$('#education').append(el);
			for(var key in course) {
				if(key === 'url') {
					el.find('a').attr('href', course[key]);
				} else {
					var keyTitle = key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();
					el.append(window['HTMLonline'+keyTitle].replace('%data%', course[key]));
				}
			}
		})

	}
};

var work = {
	jobs: [{
		employer: 'Cherry Tree Design',
		title: 'General Manager',
		location: 'Bozeman, Montana',
		dates: '2008-present',
		description: 'Responsible for all day to day operations...'
	}],
	display: function () {
		var self = this;
		self.jobs.forEach(function(job) {
			var el = $(HTMLworkStart);
			$('#workExperience').append(el);
			for(var key in job) {
				var keyTitle = key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();
				el.append(window['HTMLwork'+keyTitle].replace('%data%', job[key]));
			}
		});
	}
};

var projects = {
	projects: [{
			title: 'Modular Partition Configurator',
			dates: '2010',
			description: 'An ActionScript 3 Flash application to select and configure a partition system, from hundreds of possible configurations and product options.',
			url : '',
			images: []
		},
		{
			title: 'Space Creator Shoji Configurator',
			dates: '2011',
			description: 'An ActionScript 3 Flash application to select, design and configure options for Cherry Tree Design\'s In-Stock and Custom Shoji products, which allowed users to save multiple projects to a database, and allowed administrators to access customer projects, calculate pricing, send an HTML email quote sheet.  Customer requests for quotes are also passed into the company\'s Customer Relationship Management service, WORKetc, by means of a RESTful web service API, via the PHP SOAP extension module.',
			url : 'http://www.cherrytreedesign.com/shoji/SpaceCreator2.3.php',
			images: []
		}
		],
	display: function () {
		var self = this;
		self.projects.forEach(function(project) {
			var el = $(HTMLprojectStart);
			$('#projects').append(el);
			for(var key in project) {
				if(Array.isArray(project[key])) {
					project[key].forEach(function(val) {
						var keyTitle = key.charAt(0).toUpperCase() + key.substr(1, key.length-2).toLowerCase();
						el.append(window['HTMLschool'+keyTitle].replace('%data%', val));
					});
				} else if(key === 'url') {
					el.find('a').attr('href', project[key]);
				} else {
					var keyTitle = key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();
					el.append(window['HTMLproject'+keyTitle].replace('%data%', project[key]));
				}
			}
		});
	}
};

[bio, work, projects, education].forEach(function(section) { section.display(); });
