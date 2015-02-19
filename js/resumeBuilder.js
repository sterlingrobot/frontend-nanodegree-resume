(function($) {

	[bio, work, projects, education, locationData].forEach(function(section) { section.display(); });

  	// Bootstrap tooltips for skill-levels and project icons
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