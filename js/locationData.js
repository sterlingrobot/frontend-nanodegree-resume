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

locationData.display = function() {

	$('#mapDiv').append(googleMap).addClass('z1 main-card');

}
