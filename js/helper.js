/*
 * Global variable strings for creating HTML elements from JSON data
 */
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span>';
var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">' + '%contact%</span><span class="data-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span>' + '<span class="data-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span>' + '<span class="data-text">%data%</span></li>';
var HTMLlinkedin = '<li class="flex-item"><span class="orange-text">linkedin</span>' + '<span class="data-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span>' + '<span class="data-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span>' + '<span class="data-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span>' + '<span class="data-text">%data%</span></li>';
var HTMLbioPic = '<div class="biopic"><img src="%data%"></div>';
var HTMLWelcomeMsg = '<div class="welcome-message">%data%</div>';
var HTMLskillsStart = '<div id="skills" class="flex-box">' + '<h3 id="skillsH3">Skills at a Glance</h3></div>';
var HTMLskills = '<li class="flex-item">' + '<span class="data-text">%data%</span>' + '<div class="skill-logo"><img src="images/logos-sprite.jpg"></div>' + '<div class="skill-proficiency"></div></li>';
var HTMLworkStart = '<div class="work-entry clearfix"></div>';
var HTMLworkEmployer = '<a href="#">%data%</a>';
var HTMLworkTitle = '<em>%data%</em>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectSkill = '<div class="skill-logo"><img src="images/logos-sprite.jpg"></div>';
var HTMLprojectImage = '<img src="%data%">';
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%</a>';
var HTMLschoolDegree = ' - %data%';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajors = '<br><em>%data%</em>';
var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineName = '<a href="#">%data%</a>';
var HTMLonlineTitle = '<br><em>%data%</em>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
// other reusable elements
var HTMLcontainer = '<div class="container"></div>';
var HTMLrow = '<div class="row"></div>';
var HTMLdiv = '<div></div>';
var HTMLmenu = '<ul id="navigation" class="z4 collapse"></ul>';
var HTMLmenulink = '<li><a href="%href%">%title%</a></li>';
var HTMLmenubtn = '<a id="menuBtn" href="#" data-toggle="collapse" data-target="#navigation"></a>';
var HTMLmenubar = '<span class="bar"></span>';
var HTMLcontactbtn = '<li id="contactBtn" class="flex-item z5">&plus;</li>';
var HTMLcontactlink = '<a href="%data%" target="_blank"></a>';
var HTMLcontacticon = '<span class="icon-large %class%"></span>';
var HTMLskilllegend = '<ul class="skill-legend"></ul>';
var HTMLskillstabs = '<ul id="skillsTabs" class="nav nav-tabs" role="tablist"></ul>';
var HTMLskilltab = '<li><a href="#%id%" role="tab" data-toggle="tab">%data%</a></li>';
var HTMLskillpane = '<div id="%id%" class="tab-pane" role="tabpanel"><ul></ul></div>';
var HTMLskilllevel = '<li class="skill-level"><i %toggle% title="%name%"></i></li>';
var HTMLlogos = '<div class="skill-logos"></div>';
var HTMLworkduty = '<div class="work-duty col-sm-6 col-md-4"></div>';
var HTMLdutyheading = '<h4 class="duty-heading">%data%</h4>';
var HTMLdutysummary = '<ul class="duty-summary"></ul>';
var HTMLmoretext = '<span class="moretext">&plus;</span>';
var HTMLscrolltop = '<span class="scrollTop">&uarr;</span>';
var HTMLspeechsvg = '<svg class="speech" height="40" width="100%" viewBox="0 0 100 40" preserveAspectRatio="none">' + '   <polyline points="70,40 65,0 80,40"' + '     style="fill:#90CAF9;stroke:white;stroke-width:0.5" />' + '</svg>';
var HTMLinfowindow = '<div class="location-data"><span class="location-text">%location%</span>%data%</div>';
/*
 * Define Google Map section and info window functionality
 */
var googleMap = '<div id="map"></div>';
var map; // declares a global map variable
function initializeMap() {
    var locations;
    var currWindow;
    var mapOptions = {
        disableDefaultUI: true
    };
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);
    /*
  locationFinder() returns an array of every location string from the JSONs
  bio, education, and work JSONs.
  */
    function locationFinder() {
        var locations = [];
        locations.push(bio.contacts.location.content); // update for object format
        for (var school in education.schools) {
            locations.push(education.schools[school].location);
        }
        for (var job in work.jobs) {
            if (Array.isArray(work.jobs[job].location)) {
                locations = locations.concat(work.jobs[job].location);
            } else {
                locations.push(work.jobs[job].location);
            }
        }
        // add a few other locations from personal history
        locations = locations.concat(['Seguin, Texas', 'Minneapolis, Minnesota', 'Granada, Spain']);
        return locations;
    }
    /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
    function createMapMarker(placeData) {
        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window
        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });
        var infoWindow = new google.maps.InfoWindow({
            content: HTMLinfowindow.replace('%location%', name).replace('%data%', locationData[name]),
            maxWidth: 300
        });
        google.maps.event.addListener(marker, 'click', function() {
            if (currWindow) currWindow.close(); // close any previously opened window
            infoWindow.open(map, this);
            currWindow = infoWindow;
        });
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        // Opting to center the map on Bozeman instead
        map.setCenter(new google.maps.LatLng(56.64226565583054, -123.18580179218753)); //  bounds.getCenter()
    }
    /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }
    /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
    function pinPoster(locations) {
        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);
        // Iterates through the array of locations, creates a search object for each location
        for (var place in locations) {
            // the search request object
            var request = {
                query: locations[place]
            };
            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        }
    }
    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();
    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();
    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);
}
// Calls the initializeMap() function when the page loads
if (typeof google !== 'undefined') {
    window.addEventListener('load', initializeMap);
    // Vanilla JS way to listen for resizing of the window
    // and adjust map bounds
    window.addEventListener('resize', function(e) {
        // Make sure the map bounds get updated on page resize
        map.fitBounds(mapBounds);
    });
}