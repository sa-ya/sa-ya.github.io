var map;
function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 12,
    center: {lat: 33.606785, lng: 130.418314}
  });
}

google.maps.event.addDomListener(window, 'load', initialize);