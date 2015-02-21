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
	 }]
};

education.display = function () {

	var self = this,
		$education = $('#education'),
		$colLeft = $(HTMLdiv).addClass('col-sm-5'),
		$colRight = $(HTMLdiv).addClass('col-sm-7'),
		$row = $(HTMLrow);

	$education.addClass('z1 main-card');

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

	$colRight.addClass('online-entries').prepend(HTMLonlineClasses);

	$row.append($colLeft).append($colRight).wrap(HTMLcontainer);

	$education.append($row);
}
