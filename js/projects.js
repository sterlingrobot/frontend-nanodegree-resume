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
							+ 'schedule by employee, by pulling current order data from WORKetc, the company\'s '
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
		},
		{
			title: 'HTML5 Arcade Game',
			dates: '2015 (development)',
			description: 'An HTML5 and JavaScript adaptation of a classic arcade game, created for Udacity\'s '
							+ 'Front End Web Developer Nanodegree.  Written in AMD pattern with '
							+ '<a href="http://requirejs.org" target="_blank">RequireJS</a>, and utilizing '
							+ 'Object-Oriented JavaScript inheritance.  Uses Git for version control, Bower '
							+ 'for package management and Grunt to automate linting tasks.',
			url: 'https://github.com/sterlingrobot/arcade-game',
			skills: ['HTML5', 'JavaScript', 'Git', 'Bower', 'Grunt'],
			images: []
		}
	]
};

projects.display = function () {
	var self = this,
		$projects = $('#projects'),
		$row = $(HTMLrow);

	$projects.addClass('z3 main-card');
	// sort projects by dates, descending
	self.projects.sort(function(a,b) {
		return parseInt(a.dates) > parseInt(b.dates) ? -1 : 1;
	})
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
						// TODO:: store skills in common location so we don't have
						// to loop through every time?
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
		$logosCtr = $(HTMLlogos);
		$el.find('.skill-logo').wrapAll($logosCtr);
	});

	$('.project-entry').wrapAll($row);
	$row.wrap(HTMLcontainer);

	// Add blind animation for content reveal on longer paragraphs
	$('.project-entry p').each(function() {
		var $el = $(this),
			$more = $(HTMLmoretext);

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
};