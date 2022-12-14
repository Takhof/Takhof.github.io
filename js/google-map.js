var google;

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
  var myLatlng = new google.maps.LatLng(35.659756, 139.668808);
  var mySecondLatlng = new google.maps.LatLng(42.3445876, -71.0802099);
  // 39.399872
  // -8.224454

  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 7,

    // The latitude and longitude to center the map (always required)
    center: myLatlng,

    // How you would like to style the map.
    scrollwheel: false,
    styles: [
      {
        featureType: "administrative.country",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified",
          },
          {
            hue: "#ff0000",
          },
        ],
      },
    ],
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById("map");

  // Create the Google Map using out element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  var addresses = ["Tokyo", "Boston"];

  new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: "images/loc.png",
  });

  new google.maps.Marker({
    position: mySecondLatlng,
    map: map,
    icon: "images/loc.png",
  });
}
google.maps.event.addDomListener(window, "load", init);
