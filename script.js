function initMap() {
    var location = {lat: 46.9723, lng: -123.8227}; // Coordinates of 38 Newskah RD, Aberdeen, WA
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Load the Google Maps script
var script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
script.async = true;
document.head.appendChild(script);
