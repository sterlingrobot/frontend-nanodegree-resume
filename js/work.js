var work = {
	title: 'Employment',
	element: '#workExperience',
	jobs: [{
		employer: 'Cherry Tree Design',
		title: ['General Manager', 'Director of Product Development', 'Lead Designer'],
		location: ['Bozeman, Montana', 'Guangdong, China'],
		dates: '2008-present',
		url: 'http://www.cherrytreedesign.com',
		description: {
/*
			'Overview' : {
				summaries : [
					'Develop and maintain consistency and continuity among marketing, sales and the final product '
						+ 'throughout all aspects of operations',
					'Oversee Human Resources, including hiring, reviews, pay scales, payroll administration',
					'Organize company financial data, budgeting, reporting and analysis'
				]
			},
*/
			'Design & Marketing': {
				summaries: [
					'Design and execute all visual communications including website design, development and content, '
						+ 'catalogs, specifications, instructions and promotional materials, maintaining usability '
						+ 'functionality and consistency among various media',
					'Direct AdWords campaign management, spend and focus',
					'Utilize Google Analytics to analyze website performance and troubleshoot underperforming assets',
					'Develop effective, actionable email campaigns, and maintain internal mailing lists',
					'Design trade show installations, signage and materials'
				]
			},
			'Web Development': {
				summaries: [
					'Create several web applications for the company website to facilitate customer search, design,'
						+ 'and quoting of Cherry Tree Design product lines',
					'Develop effective web-based admininstrative tools for customer relations, quoting and '
						+ 'invoicing, staffing and production scheduling, inventory management and purchasing',
					'Migrate antiquated software to cloud-based SaaS providers: Google Apps, WORKetc CRM, '
						+ 'Xero Bookkeeping, and ADP Payroll and develop integrations among services',
					// 'Write style and script snippets to tailor third-party web applications to CTD workfows',
					'Integrate payment processing solutions via Authorize.net and PayPal, ensuring PCI compliance',
/*
					'Manage company IT infrastructure, LAN, router, switch and wireless access point',
					'Manage company VPS, web hosting, SSL and domain registration'
*/
				]
			},
/*
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
*/
			'Product Development': {
				summaries : [
/*
					'Analyze competition and industry trends, looking for new opportunities to bring affordable, '
						+ 'hand crafted wood products to a national market',
*/
					'Design and engineer new hardwood lighting and mirror accessories, working with '
						+ 'overseas factories to ensure quality and consistency',
					'Develop several new screening and sliding door product lines '
						+ 'in traditional Japanese, Contemporary and Arts & Crafts styles',
					'Produce 3D modeling and renderings of products in Sketchup',
					'Determine costing and pricing, balancing profitability and competitiveness',
					'Optimize production methods within standardized quality expectations'
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
	},
	{
		employer: 'Freelance Design',
		title: '',
		location: ['Bozeman, Montana'],
		dates: '',
		url: '',
		description: {
			'From Both Sides: Curtis Vs. Daines' : {
				summaries: [
					'Create motion graphics in Photoshop for a Montana PBS profile piece on the 2014 '
					+ 'Montana U.S. Senate Election, produced by Story Architech.'
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
				job[key].forEach(function(val) {
					$el.append(window['HTMLwork'+keyTitle].replace('%data%', val));
				});
			} else if(key === 'description' && typeof job[key] !== 'string') {
				for(var duty in job.description) {
					var $workDuty = $(HTMLworkduty),
						hdg = HTMLdutyheading.replace('%data%', duty),
						$summary = $(HTMLdutysummary);
					job.description[duty].summaries.forEach(function(sum) {
						$summary.append('<li>'+sum+'</li>');
					});
					$workDuty.append(hdg).append($summary);
					$workDuty.removeClass('col-md-4');
					$el.append($workDuty);
				}
			} else if(key === 'url') {
				$el.find('a').attr('href', job[key]);
			} else {
				$el.append(window['HTMLwork'+keyTitle].replace('%data%', job[key]));
			}
		}
		$el.find('.date-text').after('<hr>');
	});

	$('.work-entry').wrapAll($row);
	$row.wrap(HTMLcontainer);
}

