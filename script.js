//API WEATHERSTACK
function getWeatherAPI(city, getWeatherData) {
    
    var city = 'Rotterdam';
    var weatherStack = 'http://api.weatherstack.com/current?access_key=c0e0f85c5546e1d9bfb619a4a91d9a59&query=' + city;

    fetch(weatherStack)

    //Parse to JSON format
    .then(function(response) {
        return response.json();
    })

    //Render weather
    .then(function(response) {
        getWeatherData(response);	
    });
	
//	//Render location
//	.then(function(response) {
//		getMapLocation(response);	
//	});

}


function getWeatherData(response) {
    var sunOrClouds = response.current.weather_descriptions[0];
    var feelsDegrees = response.current.feelslike;
    var degrees = response.current.temperature;
    
    var weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = 'Huidige temperatuur:' + degrees + '<br />' + 'Voelt aan als:' + feelsDegrees + '<br />' + sunOrClouds;  
}


document.getElementById('button').onclick = function(){
    getCity();
}


function getCity() {
    var city = document.getElementById("myText").value;
    getWeatherAPI(city, getWeatherData);
    getWeatherAPI(city, getMapLocation);
}

//getWeatherAPI(city, getWeatherData);
//getWeatherAPI(city, getMapLocation);



////API OPENWEATHERMAPS
//function getWeatherAPI() {
//
//	var city = 'the%20Hague,nl';
//    var openWeatherMaps = 'https://api.openweathermap.org/data/2.5/weather?appid=4b744423cf0a52b6dd15ef35e7a2cad9&q=' + city;
//	
//	fetch(openWeatherMaps)
//	
//	//Parse to JSON format
//	.then(function(response) {
//		return response.json();
//	})
//	
//	//Render weather
//	.then(function(response) {
//		getWeatherData(response);	
//	});
//}


//function getWeatherData(response) {
//	// get type of weather in string format
//	var sunOrClouds = response.weather[0].description;
//
//	// get temperature in Celcius
//	var degreesInC = Math.floor(response.main.temp - 273.15);
//
//	// render weather in DOM
//	var weatherDiv = document.getElementById('weather');
//	weatherDiv.innerHTML = degreesInC + '&#176;C <br />' + sunOrClouds;
//}
//
//getWeatherAPI();



//API MAPBOX
mapboxgl.accessToken = 'pk.eyJ1IjoiaGFubmVrZTMxMDgiLCJhIjoiY2ttbHRsajV5MDlhNDJwbHc1MmdwbHdoNSJ9.AijgnojlL0zQrsuxoIpURw';

function getMapLocation(response) {
    var weatherLoc = response.location;
    var weatherLocCity = document.getElementbyId('coord');
    weatherLocCity.innerHTML = weatherLoc.name;
    
    var map = new mapboxgl.Map({
        style: 'mapbox://styles/mapbox/satellite-v9',
        container: 'map',
        center: [weatherLoc.lon, weatherLoc.lat],
        //[4.322840, 52.067101]
        //bearing: -45,
        pitch: 0,
        zoom: 15,
    })
};

//map.addControl(new mapboxgl.NavigationControl()); 



//var HHSpopup = new mapboxgl.Popup().setHTML('<h3>De Haagse Hogeschool</h3><p>Is momenteel dicht.</p>');
//
//// Adding a marker based on lon lat coordinates
//var marker = new mapboxgl.Marker()
//  .setLngLat([30.7658, 20.1653])
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



