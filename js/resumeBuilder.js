var bio = {
	title: 'Contact',
	element: '#header',
	name: 'Tor Gilbertson',
	role: 'Web Developer',
	contacts: {
	      mobile: {
	      	content: '(406) 624-9775',
	      	url: 'tel:4066249775',
	      	icon: 'iphone'
	      },
	      email: {
	      	content: 'sterlingrobot@gmail.com',
	      	url: 'mailto:sterlingrobot@gmail.com',
	      	icon: 'envelope'
	      },
	      github: {
	      	content: 'sterlingrobot',
	      	url: 'http://github.com/sterlingrobot',
	      	icon: 'github'
	      },
	      linkedin: {
	      	content: 'Tor\'s Profile',
	      	url: 'http://www.linkedin.com/pub/tor-gilbertson',
	      	icon: 'linked-in'
	      },
	      location: {
	      	content: 'Bozeman, Montana',
	      	url: 'https://www.google.com/maps/place/Bozeman,+MT',
	      	icon: 'map-marker'
	      }
  	},
	welcomeMessage: 'I look forward to honing my web development skills within a team environment '
					+ 'in a challenging and rewarding position that utilizes my creative problem solving '
					+ 'capabilities and design acumen.',
	skills: {
		'Coding': [
			{ name: 'HTML5', logoPos: 5, proficiency: 4 },
			{ name: 'CSS3', logoPos: 6, proficiency: 3 },
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
			{ name: 'Bootstrap', logoPos: 7, proficiency: 5 },
			{ name: 'jQuery', logoPos: 3, proficiency: 4 },
			{ name: 'AMFPHP', logoPos: 20, proficiency: 4 },
			{ name: 'AngularJS', logoPos: 8, proficiency: 2 }
		],
		'Workflow': [
			{ name: 'Apache', logoPos: 2, proficiency: 2 },
			{ name: 'Git', logoPos: 19, proficiency: 2 },
			{ name: 'Bower', logoPos: 21, proficiency: 1 }
		]
	},
	biopic: 'images/bio.jpg',
	display: function() {
		var self = this,
			flag = true,
			scrolled = false,
			viewWidth = $(window).width(),
			levels = [
				{}, // empty for starting point 0
				{ name: 'Learning', color: '#F56B23' },
				{ name: 'Training', color: '#F5AE23' },
				{ name: 'Developing Skills', color: '#23DDF5' },
				{ name: 'Actively Using', color: '#23F58D' },
				{ name: 'Rocking it!', color: '#40F523' },
			],
			$banner = $('<div id="banner"></div>'),
			$menu = $('<ul id="navigation" class="z3 collapse"></ul>'),
			$menuBtn = $('<a id="menuBtn" href="#" data-toggle="collapse" data-target="#navigation"></a>'),
			$pic = $(HTMLbioPic.replace('%data%', self.biopic)),
			$welcome = $(HTMLWelcomeMsg.replace('%data%', self.welcomeMessage)),
			$legend = $('<ul class="skill-legend"></ul>'),
			$colLeft = $('<div class="col-sm-4"></div>'),
			$colRight = $('<div class="col-sm-8"></div>'),
			$container = $('<div class="row"></div>'),
			$skillsTabs = $('<ul id="skillsTabs" class="nav nav-tabs" role="tablist"></ul>'),
			$skillsContent = $('<div class="tab-content"></div>');

	//**** LAYOUT / DOM BUILDING ****//

		for(var contact in self.contacts) {
			var html = $(window['HTML'+contact].replace('%data%', self.contacts[contact].content));
			html.addClass('z3');
			html.find('.white-text').wrap('<a href="' + self.contacts[contact].url + '" target="_blank"></a>');
			$('#topContacts, #footerContacts').append(html);
		}
		$('#topContacts').append('<li id="contactBtn" class="flex-item z5">&plus;</li>');

		[bio, work, projects, education, locationData].forEach(function(nav) {
			$menu.append('<li><a href="' + nav.element + '">' + nav.title + '</a></li>');
		});

		$banner.addClass('z1')
			.prepend(HTMLheaderRole.replace('%data%', self.role))
			.prepend(HTMLheaderName.replace('%data%', self.name));

		$('body').prepend($menu)
			.prepend($menuBtn);

		for(var i=0; i < 3; i++) {
			$menuBtn.append('<span class="bar"></span>');
		}

		$pic.addClass('z1');
		$colLeft.append($pic)
			.append('<svg class="speech" height="40" width="100%" viewBox="0 0 100 40" preserveAspectRatio="none">'
					 	+ '   <polyline points="70,40 65,0 80,40"'
  						+ '			style="fill:#90CAF9;stroke:white;stroke-width:0.5" />'
						+ '</svg>')
			.append($welcome);
		$colRight.append(HTMLskillsStart);

		$('#main').prepend($banner);
		$('#main').prepend('<div id="scrollTop">&uarr;</div>');
		$('#header').append($colLeft).append($colRight);
		$('#header > .col-sm-4, #header > .col-sm-8').wrapAll('<div class="row"></div>');
		$('#skills').addClass('z2')
			.append($skillsTabs)
			.append($skillsContent);

		// Build tab panes and skill-proficiency bars

		levels.forEach(function(level) {
			var name = level.name || '&nbsp;',
				toggle = level.name ? 'data-toggle="tooltip"' : '';
			$legend.append('<li class="skill-level"><i ' + toggle + ' title="' + name + '"></i></li>');
		});
		$skillsContent.append($legend)

		for(var category in self.skills) {
			var $tab = $('<li><a href="#' + category.replace(/(\s|&|\/)+/g, '-')
							+ '" role="tab" data-toggle="tab">' + category + '</a></li>'),
				$pane = $('<div id="' + category.replace(/(\s|&|\/)+/g, '-')
							+ '" class="tab-pane" role="tabpanel"><ul></ul></div>');
			$skillsTabs.append($tab);
			$skillsContent.append($pane);
			self.skills[category].forEach(function(skill) {
				var $el = $(HTMLskills.replace('%data%', skill.name));
				$pane.find('ul').append($el);
				$el.find('.skill-logo img').css('top', -skill.logoPos*36 + 'px');
				$el.find('.skill-proficiency').data('proficiency', skill.proficiency);
			});
		}

	//**** EVENT HANDLING  ****//

		$(window)
			.on('resize', function() {
				viewWidth = $(window).width();
			})
			.on('scroll', function() {
				scrolled = true;
			})

		setInterval(function() {
			var scrollY = window.scrollY,
				$scrollTop = $('#scrollTop');
			if(scrolled) {
				if(scrollY === 0) {
					$scrollTop.fadeOut()
						.removeClass('shown');
					return;
				}
				if($scrollTop.hasClass('shown')) return;
				if(scrollY > 200) {
					$scrollTop.fadeIn()
						.addClass('shown');
				}
			}
		}, 1000);

		$('body').on('click', function(e) {

			if(e.target !== $menuBtn) {
				if($menu.hasClass('in')) {
					$menu.collapse('hide');
				}
			}
		});

		$('#contactBtn').on('click', function() { bio.showContacts(); });

		$('#topContacts li:not(#contactBtn)').each(function() {
			var $el = $(this),
				$label = $el.find('.orange-text'),
				$content = $el.find('.white-text'),
				txt = $label.text(),
				iconClass = 'icon-' + bio.contacts[txt].icon,
				$icon = $('<span class="icon-large ' + iconClass + '"></span>');

			$el.prepend($icon);
			$label.addClass('hidden');
			$content.addClass('hidden');
			$el.hover(function() {
					if($el.hasClass('expanded')) return;
					$label.removeClass('hidden');
					$icon.addClass('hidden');
				}, function() {
					if($el.hasClass('expanded')) return;
					$label.addClass('hidden');
					$icon.removeClass('hidden');
				})
				.on('click', expandContact);
		});

		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			var $skills = $($(e.target).attr('href')).find('.skill-proficiency');
			$skills.each(function() {
				var $sk = $(this);
				$sk.css('width', 0)
					.animate({ 'width' : '+' + $sk.data('proficiency')*16.667 + '%' },
						$sk.data('proficiency')*250, 'easeInQuart');
			});
		});

		$('#scrollTop').on('click', function() {
			$('body').animate({ scrollTop: 0 }, 500);
		});

	  	$('#navigation').on('click', 'a', function(e) {

	  		var href = $(this).attr('href');

	  		if(href === '#header') { bio.showContacts(); }
			else $('body').animate({scrollTop: $(href).offset().top }, 500);

	  		e.preventDefault();

	  	});


	//**** COMMON FUNCTIONS ****//

		this.showContacts = function() {
			var i = 1,
				$contactBtn = $('#contactBtn')
				$skills = $('#skills');

			$('#topContacts li:not(#contactBtn)').each(function() {
				var $el = $(this);
				if($el.hasClass('expanded')) $el.each(collapseContact);
				$el.animate(
					{ left : flag ? i*16.66667 + '%' : '40px', opacity: flag ? 1 : 0 },
					flag ? i*200 : i*100,
					flag ? 'easeOutQuart' : 'easeInCirc');
				i++;
			});
			$contactBtn.html(flag ? '&minus;' : '&plus;');
			$skills.animate({ 'margin-top' : flag ? '+=60px' : '-=60px' }, 800, 'easeOutQuart');
			flag = !flag;
		};


		function expandContact() {
			var $el2 = $(this),
				$label2 = $el2.find('.orange-text'),
				$content2 = $el2.find('.white-text');
			if($el2.hasClass('expanded')) {
				$el2.each(collapseContact);
				return;
			}
			$el2.addClass('expanded')
				// adjust left position to keep centered
				.animate({
					width: '+=150px',
					left: '-=75px',
					top: viewWidth < 768 ? '+=65px' : 0
				}, 500, 'easeOutCirc')
					.css('z-index', '+=5' );
			$label2.addClass('hidden');
			$content2.removeClass('hidden');
				$('#topContacts li:not(#contactBtn)').not($el2).each(collapseContact);
		}

		function collapseContact() {
			var el3 = $(this),
				isExp = el3.hasClass('expanded'),
				label3 = el3.find('.orange-text'),
				content3 = el3.find('.white-text'),
				icon3 = el3.find('.icon-large');
			el3.animate({
					width: '60px',
					left: isExp ? '+=75px' : '+=0px',
					top: 0
				}, 500, 'easeOutCirc')
				.removeClass('expanded')
				.css('z-index', isExp ? '-=5' : '+=0');
			label3.addClass('hidden');
			content3.addClass('hidden');
			icon3.removeClass('hidden');
		}

	//**** INIT ****//

		// Wait a sec so animation is smoother
		setTimeout(function() { $('a[data-toggle="tab"]')[0].click(); }, 1000);

	}
};

var education = {
	title: 'Education',
	element: '#education',
	schools: [{
		name: 'Augustana College',
		degree: 'Bachelor of Arts',
		dates: 1999,
		location: 'Sioux Falls, South Dakota',
		majors: ['Studio Art', 'Spanish'],
		url: 'http://www.augie.edu'
	}],
	onlineCourses: [{
		name: 'Udacity',
		dates: 2015,
		title: ['Front-End Web Developer Nanodegree, Candidate'],
		url: 'http://www.udacity.com'
	 },
	 {
	 	name: 'Code School',
	 	dates: 2014,
	 	title: ['Javascript Road Trip', 'Shaping Up with Angular'],
	 	url: 'http://www.codeschool.com'
	 }],
	display: function () {

		var self = this,
			$education = $('#education'),
			$colLeft = $('<div class="col-sm-5"></div>'),
			$colRight = $('<div class="col-sm-7"></div>'),
			$row = $('<div class="row"></div>');

		self.schools.forEach(function(school) {
			var $el = $(HTMLschoolStart);
			$colLeft.append($el);
			for(var key in school) {
				var keyTitle = key.charAt(0).toUpperCase() + key.substr(1, key.length-1).toLowerCase();

				if(Array.isArray(school[key])) {
					school[key].forEach(function(val) {
						$el.append(window['HTMLschool'+keyTitle].replace('%data%', val));
					});
				} else if(key === 'url') {
					$el.find('a').attr('href', school[key]);
				} else if(key === 'degree') {
					$el.find('a').append(window['HTMLschool'+keyTitle].replace('%data%', school[key]));
				} else {
					$el.append(window['HTMLschool'+keyTitle].replace('%data%', school[key]));
				}
			}
		});

		$colLeft.addClass('education-entries');

		self.onlineCourses.forEach(function(course) {
			var $el = $(HTMLschoolStart);
			$el.addClass('online-entry');
			$colRight.append($el);
			for(var key in course) {
				var keyTitle = key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();
				if(Array.isArray(course[key])) {
					$el.append(window['HTMLonline'+keyTitle].replace('%data%', course[key].join('<br>')));
				} else if(key === 'url') {
					$el.find('a').attr('href', course[key]);
				} else {
					$el.append(window['HTMLonline'+keyTitle].replace('%data%', course[key]));
				}
			}
		})

		$colRight.addClass('online-entries')
			.prepend(HTMLonlineClasses);

		$row.append($colLeft).append($colRight);
		$row.wrap('<div class="container"></div>');

		$education.append($row);
	}
};

var work = {
	title: 'Employment',
	element: '#workExperience',
	jobs: [{
		employer: 'Cherry Tree Design',
		title: 'General Manager',
		location: ['Bozeman, Montana', 'Zhongshan, China', 'Shenzhen, China', 'Zhuhai, China'],
		dates: '2008-present',
		description: {
			'Overview' : {
				summaries : [
					'Develop and maintain consistency and continuity between the sales process and the end product '
						+ 'throughout all aspects of operations',
					'Oversee Human Resources, including hiring, reviews, pay scales, payroll administration',
					'Organize company financial data, budgeting, reporting and analysis'
				]
			},
			'Marketing': {
				summaries: [
					'Website infrastructure, design, layout, development, testing and content',
					'AdWords campaign management and direction',
					'Utilize Google Analytics to analyze website performance and troubleshoot underperforming assets',
					'Print materials design, layout and oversight of production',
					'Email campaign management, mailing lists',
					'Trade show'
				]
			},
			'Systems & Development': {
				summaries: [
					'Maintain all internal and external software and web tools',
					'Company website admin tools',
					'Payment processing, PCI Compliance and integrations with Authorize.net, PayPal',
					'Xero Bookkeeping',
					'Company IT Infrastructure, LAN, router, switch and wireless access point',
					'Company VPS, web hosting, SSL and domain registration management'
				]
			},
			'Sales & Customer Service': {
				summaries : [
					'Oversee all aspects of sales, office work',
					'Develop and define sales lead processes and procedures',
					'Develop and define order processing procedures',
					'Define freight and package shipping procedures and damage claims',
					'Oversee and personally handle customer concerns',
					'Create and maintain documentation',
				],
				details : [
					[],
					['Includes quoting and follow-up materials and lead management, utilizing the company website and '
						+ 'Customer Relationship Management system, WORKetc'],
					['Includes contract & work order creation, invoicing and ship date scheduling within CRM'],
					[],
					['Resolve quality exceptions, missing parts, shipping damages',
					 'Develop solutions for preventing such issues from arising again'],
					['Production procedures, technical specs, instructions for customers']
				]
			},
			'Production Management': {
				summaries : [
					'Ensure that the company stays on schedule according to the production calendar',
					'Manage inventory levels of raw materials and finished products'
				],
				details : [[
						'Organize production calendar, based on sales and demand',
						'Schedule production with shop leads',
						'Lead weekly Sales+Production Meetings, reviewing timelines for the week, discussing solutions '
							+ 'to problems and resolving conflicts',
						'Delegate shop tasks in conjunction with production',
						'Develop workflows to streamline production (batching orders, finishing, crating)',
						'Define quality expectations for production'
					],
					[
						'Develop inventory management system',
						'Maintain vendor relations, oversee purchasing of raw materials'
					]
				]
			},
			'Product Development': {
				summaries : [
					'Market analysis',
					'Product Design',
					'3D Modeling and rendering in Sketchup',
					'Costing and pricing',
					'Production planning, workflows and quality expectations'
				]
			},
		}
	}],
	display: function () {
		var self = this,
			$workExp = $('#workExperience'),
			$row = $('<div class="row"></div>');

		self.jobs.forEach(function(job) {

			var $el = $(HTMLworkStart);
			$workExp.append($el);

			for(var key in job) {
				var keyTitle = key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();
				if(Array.isArray(job[key])) {
					$el.prepend(window['HTMLwork'+keyTitle].replace('%data%', job[key].join('<br>')));
				} else if(key === 'description' && typeof job[key] !== 'string') {
					for(var duty in job.description) {
						var $workDuty = $('<div class="work-duty col-sm-6 col-md-4"></div>'),
							hdg = '<h4 class="duty-heading">' + duty + '</h4>',
							$summary = $('<ul class="duty-summary"></ul>');
						job.description[duty].summaries.forEach(function(sum) {
							$summary.append('<li>'+sum+'</li>');
						});
						$workDuty.append(hdg).append($summary);
						$el.append($workDuty);
					}
				} else if(key === 'title') {
					$el.find('a').append(window['HTMLwork'+keyTitle].replace('%data%', job[key]));
				} else {
					$el.append(window['HTMLwork'+keyTitle].replace('%data%', job[key]));
				}
			}
			$el.find('.date-text').after('<hr>');
		});

		$('.work-entry').wrapAll($row);
		$row.wrap('<div class="container"></div>');
	}
};

var projects = {
	title: 'Projects',
	element: '#projects',
	projects: [
		{
			title: 'Modular Partition Configurator',
			dates: '2010',
			description: 'An ActionScript3 Flash application to select and configure a partition system, from '
							+ 'hundreds of possible configurations and product options.  Use Flash remoting to '
							+ 'fetch product data from a MySQL database.  Leverage Flash timeline '
							+ 'animation with 3D Sketchup to create rotatable models of partitions.',
			url: '',
			skills: ['Flash', 'ActionScript3', 'PHP', 'MySQL'],
			images: []
		},
		{
			title: 'Space Creator Shoji Configurator',
			dates: '2011',
			description: 'An ActionScript3 Flash application to select, design and configure options for '
							+ 'Cherry Tree Design\'s In-Stock and Custom Shoji products, which allowed users to '
							+ 'save multiple projects to a database, and allowed administrators to access customer '
							+ 'projects, calculate pricing, send an HTML email quote sheet.  Customer requests for '
							+ 'quotes are also passed into the company\'s Customer Relationship Management service, '
							+ 'WORKetc, by means of a RESTful web service API, via the PHP SOAP extension module.',
			url: 'http://www.cherrytreedesign.com/shoji/SpaceCreator2.3.php',
			skills: ['Flash', 'Flash Builder', 'ActionScript3', 'AMFPHP', 'PHP', 'MySQL'],
			images: []
		},
		{
			title: 'Village Dance Theater Website',
			dates: '2012',
			description: 'Using Joomla, a PHP/MySQL based CMS, design and configure a small dance school\'s '
							+ 'website, allowing for ease of updates and article and gallery creation via '
							+ 'the Joomla administration portal and use of third-party plugins.',
			url: 'http://www.villagedancetheatre.com',
			skills: ['Joomla!', 'PHP', 'MySQL'],
			images: []
		},
		{
			title: 'Story Arcitech Website',
			dates: '2013',
			description: 'Create a dynamic, data-driven website for my wife, a freelance filmmaker and editor, '
							+ 'to feature embedded videos, AJAX functionality and jQuery animation. Work towards SEO '
							+ 'best practices to increase website exposure.',
			url: 'http://www.katiegilbertson.com',
			skills: ['JavaScript', 'jQuery', 'PHP', 'MySQL'],
			images: []
		},
		{
			title: 'CTD Website Redesign',
			dates: '2014',
			description: 'Update Cherry Tree Design\'s company website, its primary means of reaching potential '
							+ 'customers, in order to create a responsive designed, interactive and engaging space '
							+ 'for interested homeowners, designers and architects to learn, plan, design and price '
							+ 'Cherry Tree Design stock and custom hardwood shoji and doors.<br>Using Bootstrap and '
							+ 'jQuery, provide mobile friendly, intuitive tools and resources where customers '
							+ 'and sales staff can coordinate and plan new construction and remodeling projects.'
							+ '<br>Integrate with the company Customer Relationship Management platform, WORKetc, '
							+ 'to create web forms and quoting tools that feed customer and product data directly '
							+ 'into WORKetc, avoiding unnecessary data entry.',
			url: '',
			skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'WordPress', 'PHP', 'MySQL'],
			images: []
		},
		{
			title: 'CTD Admin Purchase Orders',
			dates: '2014',
			description: 'Extend <a href="http://xataface.com" target="_blank">Xataface</a>, an open-source web '
							+ 'based GUI for MySQL in JavaScript and PHP to create, '
							+ 'update and delete company purchase orders and related materials and supplies line '
							+ 'items.<br>Integrate with Xero, a cloud accounting SaaS, for creating and updating '
							+ 'Accounts Payable invoices.  '
							+ 'Also leverage WORKetc, a cloud CRM SaaS, via their API to create and retrieve '
							+ 'vendor contact information.',
			url: '',
			skills: ['JavaScript', 'PHP', 'MySQL'],
			images: []
		},
		{
			title: 'CTD Admin Production Schedule',
			dates: '2014',
			description: 'Extend <a href="http://dhtmlx.com" target="_blank">DHTMLX</a>, an open-source JavaScript '
							+ 'component library, to create a daily work '
							+ 'schedule by employee, by pulling current order data from WORKetc, the company\'s'
							+ 'CRM, via PHP SOAP and AJAX calls to the WORKetc API.',
			url: '',
			skills: ['JavaScript', 'jQuery', 'PHP', 'MySQL'],
			images: []
		},
		{
			title: 'SUMO Shoji Configurator',
			dates: '2014',
			description: 'An HTML5 Canvas and JavaScript adaptation of Space Creator\'s door drawing, '
							+ 'focusing on Object-Oriented JavaScript programming, intended to explore the '
							+ 'possibilities for migrating Space Creator, a Flash app, to JavaScript and Canvas. ',
			url : 'http://www.cherrytreedesign.com/shoji/sumo-shoji.php',
			skills: ['HTML5', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
			images: []
		},
		{
			title: 'Flat Screen Surrounds Configure',
			dates: '2015',
			description: 'A small AngularJS app to load, sort and filter available product options for '
							+ 'Cherry Tree Design\'s Flat Screen Surround products.  This module on the main landing '
							+ 'page allows users to quickly select from the web store\'s database of product options '
							+ 'to configure a SKU and provide a direct link to the web store listing, with all of the '
							+ 'user\'s choices pre-selected, ready to add to cart.<br>A quick sizing check field '
							+ 'provides a modal quote request form for custom sizes, with Bootstrap and Angular input '
							+ 'validation.  The form performs an AJAX submit to an AMFPHP service which sends the '
							+ 'pertinent information by email to Cherry Tree Design sales staff.',
			url : 'http://www.cherrytreedesign.com/furnishings/flat-screen-tv-cabinets.php',
			skills: ['JavaScript', 'AngularJS', 'PHP', 'AMFPHP', 'MySQL', 'Bootstrap'],
			images: []
		}
	],
	display: function () {
		var self = this,
			$projects = $('#projects'),
			$row = $('<div class="row"></div>');

		self.projects.forEach(function(project) {

			var $el = $(HTMLprojectStart);

			$projects.append($el);
			$el.addClass('col-sm-6 col-md-4 col-lg-3');

			for(var key in project) {
				if(Array.isArray(project[key])) {

					project[key].forEach(function(val) {
						var logoPos,
							keyTitle = key.charAt(0).toUpperCase() + key.substr(1, key.length-2).toLowerCase(),
							item = $(window['HTMLproject'+keyTitle].replace('%data%', val));

						if(key === 'skills') {
							// find logo position for each skills
							// TODO:: store skills in common location so we don't have to loop through every time?
							for(var category in bio.skills) {
								bio.skills[category].forEach(function(skill) {
									if(skill.name === val) logoPos = skill.logoPos;
								});
							}
							item.find('img').css({
									top: -logoPos*36*0.5 + 'px',
									width: 50*0.5 + 'px'
								})
								.parent()
									.css({
										width: '31px',
										height: 36*0.5 + 'px'
									})
									.attr({
										title: val,
										'data-toggle': 'tooltip'
									});
							$el.find('.date-text ').after(item);
						} else {
							$el.append(item);
						}
					});
				} else if(key === 'url') {
					if(project[key].length > 0) {
						$el.find('a').attr('href', project[key]);
					} else {
						// remove <a> if url is blank
						$el.find('h4').unwrap();
					}
				} else {
					var keyTitle = key.charAt(0).toUpperCase() + key.substr(1).toLowerCase(),
						item = $(window['HTMLproject'+keyTitle].replace('%data%', project[key]));

					if(key === 'title') item.html('<h4>' + project[key] + '</h4>');
					$el.append(item);
				}
			}
			$logosCtr = $('<div class="skill-logos"></div>');
			$el.find('.skill-logo').wrapAll($logosCtr);
		});

		$('.project-entry').wrapAll($row);
		$row.wrap('<div class="container"></div>');

		// Add blind animation for content reveal on longer paragraphs
		$('.project-entry p').each(function() {
			var $el = $(this),
				$more = $('<span class="moretext">&plus;</span>');

			if($el.get(0).scrollHeight > $el.height()) {
				$el.addClass('truncated');
				$el.append($more);
				$more.click(function() {
					var $span = $(this);
						$p = $span.parent('p');
					$p.css({
						'position': 'absolute',
						'top': $p.position().top,
						'left': $p.position().left,
						'width': $p.width(),
						'padding-bottom': $p.hasClass('expanded') ? '0' : '20px',
						'box-shadow': $p.hasClass('expanded') ? 'none' : '0px 20px 15px -10px rgba(0, 0, 0, 0.2)'
					}).animate({
						'height': $p.hasClass('expanded') ? '168px' : $p.get(0).scrollHeight
					}, 100, 'easeInQuad', function() {
						$p.css({
							'position': $p.hasClass('expanded') ? 'absolute' : 'static'
						});
					});
					$p.toggleClass('expanded');
					$span.html($p.hasClass('expanded') ? '&minus;' : '&plus;')
				});
			}
		});
	}
};

var locationData = {
	title: 'Locations',
	element: '#mapDiv',

	'Bozeman, Mt, USA': '<h4>The Last Best Place</h4><p>I love Bozeman.  How could you complain when your '
							+ 'commute is surrounded by awe-inspiring snow-capped mountains as far as the '
							+ 'eye can see?  In 2009, we celebrated the birth of our daughter, who does a '
							+ 'fine job of keeping us on our toes, and putting a smile on our faces.</p>',
	'Seguin, TX, USA': '<h4>Home of the World\'s Largest Pecan</h4><p>Yeah, that\'s right.  It\'s also where '
						+ 'I was born and raised.  There will always be a soft spot in my heart for South Texas '
						+ 'living... and BBQ.</p>',
	'Sioux Falls, SD, USA': '<h4>Texas Boy Faces Brutal Winter</h4><p>There\'s more to Sioux Falls, home of my '
							+ 'alma mater, than cold weather, but it was sure a shock to experience -70&deg;F! '
							+ 'Augustana cultivated my thirst for knowledge with excellent professors and community.',
	'Granada, Granada, Spain': '<h4>Study Abroad</h4><p>I was very fortunate in college to participate in a semester '
								+ 'of Spanish language and culture study in Granada, a beautiful city of  great '
								+ 'historical significance, and home of the the great Moorish palace, Alhambra.' ,
	'Minneapolis, MN, USA': '<h4>Art Degree = Server</h4><p>After Sioux Falls I wanted to experience some big city '
							+ 'life and Minneapolis was the closest logical place.  Waiting tables paid the bills, '
							+ 'then I joined a custom framing shop, which allowed me to utilize some artistic skills. '
							+ ' Most importantly though, I met my lovely wife there. We just celebrated 10 years of '
							+ 'marriage!</p>',
	'Zhongshan, Guangdong, China': '<h4>Huaxia Wood Lighting</h4><p>From 2006 - 2011, Cherry Tree Design worked with '
									+ 'several Chinese factories to produce our line of hardwood lighting and mirrors. '
									+ 'I coordinated with our agents and the factory to troubleshoot design, '
									+ 'construction and sourcing challenges, keeping a close eye on quality.</p>',
	'Zhuhai, Guangdong, China' : '<h4>Comfort Electronics</h4><p>Cherry Tree Design\'s third factory partner '
									+ 'introduced new capabilities with exotic wood veneers and touch-dimmable LED '
									+ 'lamping. I worked directly with the lead designer to incorporate these elements '
									+ 'into new product designs for Cherry Tree\'s lighting catalog.</p>',
	'Shenzhen, Guangdong, China': '<h4>ArtsMax</h4><p>In 2008, Cherry Tree searched for an alternate supplier as '
									+ 'quality concerns and slow lead times jeopardized the outsourcing venture. '
									+ 'I worked with ArtsMax for an intensive 6 week stint, developing a new line of '
									+ 'eco-conscious EnergyStar fluorescent lighting fixtures made in bamboo.</p>'
};

(function($) {

	[bio, work, projects, education].forEach(function(section) { section.display(); });

	$('#mapDiv').append(googleMap);

  	$('[data-toggle="tooltip"]').tooltip();

  	// style sheets of material
	$('[class*="z"]').each(function() {
		var el = $(this),
		 	z = el.attr('class').substr(el.attr('class').search(/z[0-6]/)+1, 1),
			bx = (z*0.5) + 'px ' + z + 'px ' + z*5 + 'px ' + z*2 + 'px rgba(0,0,0,0.2)';
		el.css({
			'z-index' : z*3,
			'border-radius' : '2px',
			'box-shadow' : bx
		});
	});

})(jQuery);
