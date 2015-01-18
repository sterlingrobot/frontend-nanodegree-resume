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
			];
		for(var contact in self.contacts) {
			$('#topContacts').append(window['HTML'+contact].replace('%data%', self.contacts[contact]));
		}
		$('#header')
			.prepend(HTMLheaderRole.replace('%data%', self.role))
			.prepend(HTMLheaderName.replace('%data%', self.name))
			.append(HTMLbioPic.replace('%data%', self.biopic))
			.append(HTMLWelcomeMsg.replace('%data%', self.welcomeMessage))
			.append(HTMLskillsStart);
		self.skills.forEach(function(skill) {
			var el = $(HTMLskills.replace('%data%', skill.name));
			el.find('.skill-logo img').css('top', -skill.logoPos*36 + 'px');
			$('#skills').append(el);
			el.find('.skill-proficiency')
				.css('background-color', levels[skill.proficiency].color)
				.text(levels[skill.proficiency].name)
				.animate({ width : '+'+skill.proficiency*15+'%'}, skill.proficiency*500);

		});
	}
};

var education = {
	schools: [{
		name: 'Augustana College',
		location: 'Sioux Falls, South Dakota',
		degree: 'Bachelor of Arts',
		majors: ['Studio Art', 'Spanish'],
		dates: 1999,
		url: 'http://www.augie.edu'
	}],
	onlineCourses: [{
	     title: 'Front-End Web Developer Nanodegree',
	     school: 'Udacity',
	     date: 2015,
	     url: 'http://www.udacity.com'
	 }],
	display: function () {
		var self = this;


	}
};

var work = {
	jobs: [{
		employer: 'Cherry Tree Design',
		title: 'General Manager',
		location: 'Bozeman, Montana',
		dates: '2008-',
		description: 'Responsible for all day to day operations...'
	}],
	display: function () {
		var self = this;
		self.jobs
			.forEach(function(job) {
				var el = $(HTMLworkStart);
				$('#workExperience').append(el);
				Object.keys(job)
					.forEach(function(key) {
						var keyTitle = key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();
						if(key === 'dates') {

						} else {
							el.append(window['HTMLwork'+keyTitle].replace('%data%', job[key]));
						}
					});
			});
	}
};

var projects = {
	projects: [{
		title: 'Modular Partition Configurator',
		dates: '2010',
		description: 'A Flash application to configure a partition system.',
		images: []
	}],
	display: function () {

	}
};

bio.display();
work.display();