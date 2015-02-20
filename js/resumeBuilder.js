(function($) {

	var $menu = $(HTMLmenu),
		$menuBtn = $(HTMLmenubtn);

	[bio, work, projects, education, locationData].forEach(function(section) {
		$menu.append(HTMLmenulink.replace('%href%', section.element).replace('%title%', section.title));
		section.display();
	});

	$('body').prepend($menu).prepend($menuBtn);

	for(var i=0; i < 3; i++) {
		$menuBtn.append(HTMLmenubar);
	}

	$('body').on('click', function(e) {

		if(e.target !== $menuBtn) {
			if($menu.hasClass('in')) {
				$menu.collapse('hide');
			}
		}
	});

	$('.scrollTop').on('click', function() {
		$('body').animate({ scrollTop: 0 }, 500);
	});

	$('#navigation').on('click', 'a', function(e) {

		var href = $(this).attr('href');

		if(href === '#header') { bio.showContacts(); }
		else $('html, body').animate({scrollTop: $(href).offset().top }, 500);

		e.preventDefault();

	});
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