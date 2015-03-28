var bio = {
	title: 'Contact',
	element: '#header',
	name: 'Tor Gilbertson',
	role: 'Designer | Developer',
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
	      	url: 'https://www.linkedin.com/profile/view?id=224046476',
	      	icon: 'linked-in'
	      },
	      location: {
	      	content: 'Bozeman, Montana',
	      	url: 'https://www.google.com/maps/place/Bozeman,+MT',
	      	icon: 'map-marker'
	      }
  	},
	welcomeMessage: 'I look forward to creating engaging, interactive designs within a team environment '
					+ 'in a challenging and rewarding position that utilizes my creative problem solving '
					+ 'capabilities and design acumen.',
	skills: {
		'Design': [
			{ name: 'Photoshop', logoPos: 9, proficiency: 5 },
			{ name: 'Illustrator', logoPos: 10, proficiency: 5 },
			{ name: 'Fireworks', logoPos: 13, proficiency: 4 },
			{ name: 'InDesign', logoPos: 11, proficiency: 4 },
			{ name: 'Flash', logoPos: 12, proficiency: 4 },
			{ name: 'Flash Builder', logoPos: 14, proficiency: 3 }
		],
		'Coding': [
			{ name: 'HTML5', logoPos: 5, proficiency: 4 },
			{ name: 'CSS3', logoPos: 6, proficiency: 3 },
			{ name: 'JavaScript', logoPos: 4, proficiency: 4 },
			{ name: 'PHP', logoPos: 0, proficiency: 4 },
			{ name: 'ActionScript3', logoPos: 15, proficiency: 4 }
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
	biopic: 'images/bio.jpg'
};

bio.display = function() {

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
		$banner = $(HTMLdiv).attr('id', 'banner'),
		$contactBtn = $(HTMLcontactbtn),
		$pic = $(HTMLbioPic.replace('%data%', self.biopic)),
		$welcome = $(HTMLWelcomeMsg.replace('%data%', self.welcomeMessage)),
		$legend = $(HTMLskilllegend),
		$colLeft = $(HTMLdiv).addClass('col-sm-4'),
		$colRight = $(HTMLdiv).addClass('col-sm-8'),
		$row = $(HTMLrow),
		$skillsTabs = $(HTMLskillstabs),
		$skillsContent = $(HTMLdiv).addClass('tab-content');

	//**** LAYOUT / DOM BUILDING ****//

	for(var contact in self.contacts) {
		var $html = $(window['HTML'+contact].replace('%data%', self.contacts[contact].content));
		$html.addClass('z3');
		$html.find('.data-text').wrap(HTMLcontactlink.replace('%data%', self.contacts[contact].url));
		$('#topContacts, #footerContacts').append($html);
	}
	$('#topContacts').append($contactBtn);

	$banner.addClass('z1')
		.prepend(HTMLheaderRole.replace('%data%', self.role))
		.prepend(HTMLheaderName.replace('%data%', self.name));

	$pic.addClass('z1');
	$colLeft.append($pic)
		.append(HTMLspeechsvg)
		.append($welcome);
	$colRight.append(HTMLskillsStart);

	$('#main').prepend($banner);
	$('#header').append($colLeft).append($colRight);
	$('#header > .col-sm-4, #header > .col-sm-8').wrapAll(HTMLrow);
	$('#skills').addClass('z2')
		.append($skillsTabs)
		.append($skillsContent);

	// Build tab panes and skill-proficiency bars

	levels.forEach(function(level) {
		var name = level.name || '&nbsp;',
			toggle = level.name ? 'data-toggle="tooltip"' : '';
		$legend.append(HTMLskilllevel.replace('%toggle%', toggle).replace('%name%', name));
	});
	$skillsContent.append($legend)

	for(var category in self.skills) {
		var catID = category.replace(/(\s|&|\/)+/g, '-');
			$tab = $(HTMLskilltab.replace('%id%', catID).replace('%data%', category)),
			$pane = $(HTMLskillpane.replace('%id%', catID));
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

	$(window).on('resize', function() {
		viewWidth = window.innerWidth;
	});


	$('#contactBtn').on('click', function() { bio.showContacts(); });

	$('#topContacts li:not(#contactBtn)').each(function() {
		var $el = $(this),
			$label = $el.find('.orange-text'),
			$content = $el.find('.data-text'),
			txt = $label.text(),
			iconClass = 'icon-' + bio.contacts[txt].icon,
			$icon = $(HTMLcontacticon.replace('%class%', iconClass));

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
			$content2 = $el2.find('.data-text');
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
			content3 = el3.find('.data-text'),
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
	setTimeout(function() { $('a[data-toggle="tab"]')[0].click(); }, 2000);

	}
