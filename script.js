//API MAPBOX
mapboxgl.accessToken = 'pk.eyJ1IjoiaGFubmVrZTMxMDgiLCJhIjoiY2ttbHRsajV5MDlhNDJwbHc1MmdwbHdoNSJ9.AijgnojlL0zQrsuxoIpURw';

var map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/satellite-v9',
    container: 'map',
    center: [4.322840, 52.067101],
//    bearing: -17.6,
    pitch: 0,
    zoom: 15,
});

map.addControl(new mapboxgl.NavigationControl()); 



//var HHSpopup = new mapboxgl.Popup().setHTML('<h3>De Haagse Hogeschool</h3><p>Is momenteel dicht.</p>');

//// Adding a marker based on lon lat coordinates
//var marker = new mapboxgl.Marker()
//  .setLngLat([4.324439, 52.067200])
//  .setPopup(HHSpopup)
//  .addTo(map);



//// wacht tot de map en styles geladen zijn
//map.on('load', function () {
//
//  // laad een extern bestand
//  map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', function (error, image) {
//
//      // voeg image toe en noem het cat
//      map.addImage('cat', image);
//
//      // defineer een punt in het geheugen
//      map.addSource('point', {
//        type: 'geojson',
//        data: {
//          type: 'FeatureCollection',
//          features: [{
//            type: 'Feature',
//            geometry: {
//              type: 'Point',
//              coordinates: [4.32284, 52.067101]
//            }
//          }]
//        }
//      });
//
//      // plak de nieuwe source 'point' op de kaart in een eigen layer
//      map.addLayer({
//        id: 'points',
//        type: 'symbol',
//        source: 'point',
//        layout: {
//          'icon-image': 'cat',
//          'icon-size': 0.25
//        }
//      });
//    }
//  );
//});



//// wacht totdat de map geladen is
//map.on('load', function () {
//
//  // nieuwe source places
//  map.addSource('places', {
//    'type': 'geojson',
//    'data': {
//      'type': 'FeatureCollection',
//      // Saved in locations.js
//      'features': myLocationsList
//    }
//  });
//
//  // Add a layer showing the places.
//  map.addLayer({
//    'id': 'places',
//    'type': 'symbol',
//    'source': 'places',
//    'layout': {
//      'icon-image': '{icon}-15', // icon verwijst naar de properties in het object met een plaats en wordt vervangen
//      'icon-allow-overlap': true
//    }
//  });
//});



//map.on('load', function () {
//  map.addSource('places', {
//    'type': 'geojson',
//    'data': {
//      'type': 'FeatureCollection',
//      'features': myLocationsList
//    }
//  });
//
//  // Add a layer showing the places.
//  map.addLayer({
//    'id': 'places',
//    'type': 'symbol',
//    'source': 'places',
//    'layout': {
//      'icon-image': '{icon}-15',
//      'icon-allow-overlap': true
//    }
//  });
//
//  // Create a popup, but don't add it to the map yet.
//  var popup = new mapboxgl.Popup({
//    closeButton: false,
//    closeOnClick: false
//  });
//
//  map.on('mouseenter', 'places', function (e) {
//    var coordinates = e.features[0].geometry.coordinates.slice();
//    var description = e.features[0].properties.description;
//
//    // Populate the popup and set its coordinates based on the feature found.
//    popup.setLngLat(coordinates)
//         .setHTML(description)
//         .addTo(map);
//  });
//
//  map.on('mouseleave', 'places', function () {
//    popup.remove();
//  });
//});



//// Voeg de zoekbalk toe
//map.addControl(
//  new MapboxGeocoder({
//    accessToken: mapboxgl.accessToken,
//    mapboxgl: mapboxgl
//  }),
//  'top-right'
//);



//// Voeg de planner toe
//map.addControl(
//  new MapboxDirections({
//    accessToken: mapboxgl.accessToken
//  }),
//  'top-left'
//);



