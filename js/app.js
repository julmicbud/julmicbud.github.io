  //Error handling if Google Maps fails to load
  this.mapRequestTimeout = setTimeout(function() {
    $('#map-canvas').html('We had trouble loading Google Maps. Please refresh your browser and try again.');
  }, 8000);
  
  // Initialize Google map, perform initial deal search on a city.
  function mapInitialize() {
    city = new google.maps.LatLng(38.906830, -77.038599);
    map = new google.maps.Map(document.getElementById('map-canvas'), {
          center: city,
          zoom: 10,
          zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER,
            style: google.maps.ZoomControlStyle.SMALL
          },
          streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
            },
          mapTypeControl: false,
          panControl: false
        });
    clearTimeout(self.mapRequestTimeout);

    google.maps.event.addDomListener(window, "resize", function() {
       var center = map.getCenter();
       google.maps.event.trigger(map, "resize");
       map.setCenter(center); 
    });

    infowindow = new google.maps.InfoWindow({maxWidth: 300});
    getGroupons('washington-dc');
    getGrouponLocations();
  }