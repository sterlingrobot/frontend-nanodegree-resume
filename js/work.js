var work = {
	title: 'Employment',
	element: '#workExperience',
	jobs: [{
		employer: 'Cherry Tree Design',
		title: 'General Manager',
		location: ['Bozeman, Montana', 'Guangdong, China'],
		dates: '2008-present',
		description: {
			'Overview' : {
				summaries : [
					'Develop and maintain consistency and continuity among marketing, sales and the final product '
						+ 'throughout all aspects of operations',
					'Oversee Human Resources, including hiring, reviews, pay scales, payroll administration',
					'Organize company financial data, budgeting, reporting and analysis'
				]
			},
			'Marketing': {
				summaries: [
					'Lead website design, layout, development, testing and content creation',
					'Direct AdWords campaign management, spend and focus',
					'Utilize Google Analytics to analyze website performance and troubleshoot underperforming assets',
					'Design and direct all visual communications including catalogs, specifications, instructions, '
						+ 'web assets and promotional materials, maintaining continuity among messaging',
					'Develop effective, actionable email campaigns, and maintain internal mailing lists',
					'Design trade show installations, signage and materials'
				]
			},
			'Systems & Development': {
				summaries: [
					'Develop effective web-based admininstrative tools for customer relations, invoicing, staff '
						+ 'and production scheduling, inventory management and purchasing',
					'Integrate payment processing solutions via Authorize.net and PayPal, ensuring PCI Compliance',
					'Migrate antiquated software to cloud-based SaaS providers: Google Apps, WORKetc CRM, '
						+ 'Xero Bookkeeping, and ADP Payroll',
					'Manage company IT infrastructure, LAN, router, switch and wireless access point',
					'Manage company VPS, web hosting, SSL and domain registration'
				]
			},
			'Sales & Customer Service': {
				summaries : [
					'Oversee all aspects of sales and office work',
					'Develop and define sales lead processes, materials and procedures',
					'Pursue increased sales conversions with targeted discount and incentive programs',
					'Track lead generation and sales performance and develop strategies for improvement',
					'Develop and define order processing procedures to reduce data-entry duplication',
					'Define freight and package shipping procedures and filing of damage claims',
					'Oversee and personally handle customer concerns related to products and service',
					'Create and maintain product specifications, instructions and customer resources'
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
			'Product Development': {
				summaries : [
					'Analyze competition and industry trends, looking for new opportunities to bring affordable, '
						+ 'hand crafted wood products to a national market',
					'Design and engineer dozens of new hardwood lighting and mirror accessories, working with '
						+ 'overseas factories to ensure quality and consistency',
					'Develop several new product lines within the hardwood screening and sliding door niche '
						+ 'in traditional Japanese, Contemporary and Arts & Crafts styles',
					'Produce 3D modeling and rendering of product designs in Sketchup',
					'Determine costing and pricing, maximizing profitability while being sensitive to customer '
						+ 'budget',
					'Optimize production methods and workflows within standardized quality expectations'
				]
			},
			'Production Management': {
				summaries : [
					'Organize production calendar based on sales and demand, and ensure that staff stays on schedule',
					'Lead weekly Sales+Production Meetings, reviewing timelines, discussing solutions '
						+ 'to problems and resolving conflicts',
					'Manage inventory levels of raw materials and finished products',
					'Develop workflows to streamline production (batching orders, finishing, crating)',
				],
				details : [
					['Organize production calendar, based on sales and demand',
					 'Schedule production with shop leads'
					],
					['Delegate shop tasks in conjunction with production',
					 'Define quality expectations for production'
					],
					['Develop inventory management system',
					 'Maintain vendor relations, oversee purchasing of raw materials'
					]
				]
			}
		}
	}]
};

work.display = function () {

	var self = this,
		$workExp = $('#workExperience'),
		$row = $(HTMLrow);

	$workExp.addClass('z1 main-card');

	self.jobs.forEach(function(job) {

		var $el = $(HTMLworkStart);
		$workExp.append($el);

		for(var key in job) {

			var keyTitle = key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();

			if(Array.isArray(job[key])) {
				$el.prepend(window['HTMLwork'+keyTitle].replace('%data%', job[key].join('<br>')));
			} else if(key === 'description' && typeof job[key] !== 'string') {
				for(var duty in job.description) {
					var $workDuty = $(HTMLworkduty),
						hdg = HTMLdutyheading.replace('%data%', duty),
						$summary = $(HTMLdutysummary);
					job.description[duty].summaries.forEach(function(sum) {
						$summary.append('<li>'+sum+'</li>');
					});
					$workDuty.append(hdg).append($summary);
					if(duty === 'Overview') $workDuty.removeClass('col-sm-6 col-md-4');
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
	$row.wrap(HTMLcontainer);
}

