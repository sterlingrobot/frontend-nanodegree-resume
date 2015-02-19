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
