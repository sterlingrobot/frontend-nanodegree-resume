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
			{ name: 'Bower', logoPos: 21, proficiency: 3 }
		]
	},
	biopic: 'images/bio.jpg',
	display: function() {
		var self = this,
			flag = true,
			scrolled = false,
			viewWidth = window.innerWidth,
			levels = [
				{}, // empty for starting point 0
				{ name: 'Learning', color: '#F56B23' },
				{ name: 'Training', color: '#F5AE23' },
				{ name: 'Developing Skills', color: '#23DDF5' },
				{ name: 'Actively Using', color: '#23F58D' },
				{ name: 'Rocking it!', color: '#40F523' },
			],
			$banner = $('<div id="banner"></div>'),
			$menu = $('<ul id="navigation" class="z4 collapse"></ul>'),
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
			var $html = $(window['HTML'+contact].replace('%data%', self.contacts[contact].content));
			$html.addClass('z3');
			$html.find('.white-text').wrap('<a href="' + self.contacts[contact].url + '" target="_blank"></a>');
			$('#topContacts, #footerContacts').append($html);
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
				viewWidth = window.innerWidth;
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
