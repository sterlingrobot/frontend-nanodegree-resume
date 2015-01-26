var bio = {
	name : 'Tor Gilbertson',
	role : 'Web Developer',
	contacts : {
	      mobile: { content: '(406) 624-9775', url: 'tel:4066249775', icon: 'iphone' },
	      email: { content: 'sterlingrobot@gmail.com', url: 'mailto:sterlingrobot@gmail.com', icon: 'envelope' },
	      github: { content: 'sterlingrobot', url: 'http://github.com/sterlingrobot', icon: 'github' },
	      linkedin: { content: 'Tor\'s Profile', url: 'http://www.linkedin.com/pub/tor-gilbertson', icon: 'linked-in' },
	      location: { content: 'Bozeman, Montana', url: 'https://www.google.com/maps/place/Bozeman,+MT', icon: 'map-marker' }
  	},
	welcomeMessage: 'Let\'s get this party started.' ,
	skills: {
		'Coding': [
			{ name: 'HTML5', logoPos: 5, proficiency: 4 },
			{ name: 'CSS3', logoPos: 6, proficiency: 4 },
			{ name: 'JavaScript', logoPos: 4, proficiency: 4 },
			{ name: 'PHP', logoPos: 0, proficiency: 4 },
			{ name: 'ActionScript3', logoPos: 15, proficiency: 4 }
		],
		'Design': [
			{ name: 'Photoshop', logoPos: 9, proficiency: 5 },
			{ name: 'Illustrator', logoPos: 10, proficiency: 5 },
			{ name: 'Fireworks', logoPos: 13, proficiency: 4 },
			{ name: 'InDesign', logoPos: 11, proficiency: 4 },
			{ name: 'Flash', logoPos: 12, proficiency: 4 },
			{ name: 'Flash Builder', logoPos: 14, proficiency: 3 }
		],
		'DB & CMS': [
			{ name: 'MySQL', logoPos: 1, proficiency: 4 },
			{ name: 'osCommerce', logoPos: 16, proficiency: 5 },
			{ name: 'WordPress', logoPos: 17, proficiency: 3 },
			{ name: 'Joomla!', logoPos: 18, proficiency: 3 }
		],
		'Framework': [
			{ name: 'Bootstrap', logoPos: 7, proficiency: 4 },
			{ name: 'jQuery', logoPos: 3, proficiency: 4 },
			{ name: 'AngularJS', logoPos: 8, proficiency: 1 }
		],
		'Workflow': [
			{ name: 'Apache', logoPos: 2, proficiency: 2 },
			{ name: 'Git', logoPos: 19, proficiency: 2 }
		]
	},
	biopic: 'images/bio.jpg',
	display: function() {
		var self = this,
			levels = [
				{}, // empty for starting point 0
				{ name: 'Learning', color: '#F56B23' },
				{ name: 'Training', color: '#F5AE23' },
				{ name: 'Developing Skills', color: '#23DDF5' },
				{ name: 'Actively Using', color: '#23F58D' },
				{ name: 'Rocking it!', color: '#40F523' },
			],
			banner = $('<div id="banner"></div>'),
			pic = $(HTMLbioPic.replace('%data%', self.biopic)),
			welcome = $(HTMLWelcomeMsg.replace('%data%', self.welcomeMessage)),
			legend = $('<ul class="skill-legend"></ul>'),
			colLeft = $('<div class="col-sm-4"></div>'),
			colRight = $('<div class="col-sm-8"></div>'),
			skillsTabs = $('<ul id="skillsTabs" class="nav nav-tabs" role="tablist"></ul>'),
			skillsContent = $('<div class="tab-content"></div>');

		for(var contact in self.contacts) {
			var html = $(window['HTML'+contact].replace('%data%', self.contacts[contact].content));
			html.addClass('z3');
			$('#topContacts, #footerContacts').append(html);
		}

		banner.addClass('z1')
			.prepend(HTMLheaderRole.replace('%data%', self.role))
			.prepend(HTMLheaderName.replace('%data%', self.name));

		pic.addClass('z1');
		colLeft.append(pic)
			.append('<div class="clearfix"></div>')
			.append('<svg class="speech" height="40" width="100%" viewBox="0 0 100 40" preserveAspectRatio="none">'
					 	+ '   <polyline points="70,40 65,0 80,40"'
  						+ '			style="fill:#90CAF9;stroke:white;stroke-width:0.5" />'
						+ '</svg>')
			.append(welcome);
		colRight.append(HTMLskillsStart);

		$('#main').prepend(banner);
		$('#header').append(colLeft).append(colRight);
		$('#skills').addClass('z2')
			.append(skillsTabs)
			.append(skillsContent);

		levels.forEach(function(level) {
			var name = level.name || '&nbsp;',
				toggle = level.name ? 'data-toggle="tooltip"' : '';
			legend.append('<li class="skill-level"><a href="" ' + toggle + ' title="' + name + '"></a></li>');
		});
		skillsContent.append(legend)

		for(var category in self.skills) {
			var tab = $('<li><a href="#' + category.replace(/(\s|&|\/)+/g, '-')
							+ '" role="tab" data-toggle="tab">' + category + '</a></li>'),
				pane = $('<div id="' + category.replace(/(\s|&|\/)+/g, '-')
							+ '" class="tab-pane" role="tabpanel"><ul></ul></div>');
			skillsTabs.append(tab);
			skillsContent.append(pane);
			self.skills[category].forEach(function(skill) {
				var el = $(HTMLskills.replace('%data%', skill.name));
				pane.find('ul').append(el);
				el.find('.skill-logo img').css('top', -skill.logoPos*36 + 'px');
				el.find('.skill-proficiency').data('proficiency', skill.proficiency);
			});
		}

		$('.skill-level a').on('click', function(e) { e.preventDefault(); });

		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			var skills = $($(e.target).attr('href')).find('.skill-proficiency');
			skills.each(function(i) {
				var sk = $(this);
				sk.css('width', 0)
					.animate({ 'width' : '+' + sk.data('proficiency')*16.667 + '%' },
						sk.data('proficiency')*400, 'easeInQuad');
			});
		});

		$('a[data-toggle="tab"]')[0].click();  // Initialize first tab
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
				var keyTitle = key.charAt(0).toUpperCase() + key.substr(1, key.length-1).toLowerCase();

				if(Array.isArray(school[key])) {
					school[key].forEach(function(val) {
						el.append(window['HTMLschool'+keyTitle].replace('%data%', val));
					});
				} else if(key === 'url') {
					el.find('a').attr('href', school[key]);
				} else if(key === 'degree') {
					el.find('a').append(window['HTMLschool'+keyTitle].replace('%data%', school[key]));
				} else {
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
				if(key === 'title') {
					el.find('a').append(window['HTMLwork'+keyTitle].replace('%data%', job[key]));
				} else {
					el.append(window['HTMLwork'+keyTitle].replace('%data%', job[key]));
				}
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

(function($) {

	$('#mapDiv').append(googleMap);

  	$('a[data-toggle="tooltip"]').tooltip();

	$('[class*="z"]').each(function() {
		var el = $(this),
		 	z = el.attr('class').substr(el.attr('class').search(/z[0-6]/)+1, 1),
			bx = (z*0.5) + 'px ' + z + 'px ' + z*5 + 'px ' + z*2 + 'px rgba(0,0,0,0.1)';
		el.css({
			'z-index' : z*3,
			'position' : 'relative',
			'box-shadow' : bx
			// 'background' : 'rgba(255,255,255,'+z*0.1+')'

		});
/*
		// .on('click', function() {
		// 		var bx = $(this).css('box-shadow').split(' '),
		// 			y = bx[5].substring(0, bx[5].indexOf('px')),
		// 			bl = bx[6].substring(0, bx[6].indexOf('px')),
		// 			sp = bx[7].substring(0, bx[7].indexOf('px'));

		// 		bx[5] = parseInt(y)+4 + 'px';
		// 		bx[6] = parseInt(bl)*5 + 'px';
		// 		bx[7] = parseInt(sp)*-1 + 'px';
		// 		$(this).css({ 'box-shadow' : bx.join(' ') })
		// 			.animate({ 'width' : '+=4', margin : '-=2'}, 100)
		// 			.on('mouseleave', function() {
		// 				var bx = $(this).css('box-shadow').split(' '),
		// 					y = bx[5].substring(0, bx[5].indexOf('px') + 1),
		// 					bl = bx[6].substring(0, bx[6].indexOf('px')),
		// 					sp = bx[7].substring(0, bx[7].indexOf('px'));

		// 				bx[5] = parseInt(y)-4 + 'px';
		// 				bx[6] = parseInt(bl)/5 + 'px';
		// 				bx[7] = parseInt(sp)*-1 + 'px';
		// 				$(this).css({ 'box-shadow' : bx.join(' ') })
		// 					.animate({ 'width' : '-=4', margin : '+=2'}, 50);
		// 			});
		// })
		// .animate({
		// 	'margin' : '-'+z*0.4+'%',
		// 	'padding' : '+'+z*4+'%'
		// }, 100);
*/
	});
	$('#topContacts li').each(function() {
		var el = $(this),
			label = el.find('.orange-text'),
			content = el.find('.white-text'),
			txt = label.text(),
			iconClass = 'icon-' + bio.contacts[txt].icon,
			icon = $('<span class="icon-large ' + iconClass + '"></span>');

		el.prepend(icon);
		label.addClass('hidden');
		content.addClass('hidden');
		content.wrap('<a href="' + bio.contacts[txt].url + '" target="_blank"></a>');
		el.hover(function() {
				if(el.hasClass('expanded')) return;
				label.removeClass('hidden');
				icon.addClass('hidden');
			}, function() {
				if(el.hasClass('expanded')) return;
				label.addClass('hidden');
				icon.removeClass('hidden');
			})
			.on('click', function() {
				if($(this).hasClass('expanded')) {
					$(this).each(collapseContact);
					return;
				}
				var el2 = $(this),
					label2 = el.find('.orange-text'),
					content2 = el.find('.white-text');
				el2.addClass('expanded')
					.animate({ width: '+=150px' }, 500, 'easeOutCirc');
				label2.addClass('hidden');
				content2.removeClass('hidden');
 				$('#topContacts li').not(el).each(collapseContact);
			});


			function collapseContact(el) {
				var el3 = $(this),
					label3 = el3.find('.orange-text'),
					content3 = el3.find('.white-text'),
					icon3 = el3.find('.icon-large');
				el3.animate({ width: '60px' }, 500, 'easeOutCirc')
					.removeClass('expanded')
					label3.addClass('hidden');
					content3.addClass('hidden');
					icon3.removeClass('hidden');
			}
	});
})(jQuery);
