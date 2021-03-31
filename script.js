var city = 'Rotterdam';

//API WEATHERSTACK
function getWeatherAPI(city, functie) {
    
    var city = city;
    var functie = functie;
    var weatherStack = 'http://api.weatherstack.com/current?access_key=c0e0f85c5546e1d9bfb619a4a91d9a59&query=' + city;

    fetch(weatherStack)

    //Parse to JSON format
    .then(function(response) {
        return response.json();
    })

    //Render weather
    .then(function(response) {
        functie(response);	
    });
}


function getWeatherData(response) {
    var sunOrClouds = response.current.weather_descriptions[0];
    var feelsLike = response.current.feelslike;
    var temperature = response.current.temperature;
    var humidity = response.current.humidity;
    var pressure = response.current.pressure;
    var icon = "";
    
    if (sunOrClouds == 'Sunny' || sunOrClouds == 'Clear') {
        var icon = "<img src='https://weatherstack.com/site_images/weather_icon_full_sun.svg'>";
    } else if (sunOrClouds == 'Partly cloudy') {
        var icon = "<img src='https://weatherstack.com/site_images/weather_icon_partly_cloudy.svg'>";
    } else if (sunOrClouds == 'Overcast' || sunOrClouds == 'Mist') {
        var icon = "<img src='https://weatherstack.com/site_images/weather_icon_full_clouds.svg'>";
    } else if (sunOrClouds == 'Light Rain' || sunOrClouds == 'Light           Drizzle') {
        var icon = "<img src='https://weatherstack.com/site_images/weather_icon_cloud_slight_rain.svg'>";
    } else if (sunOrClouds == 'Heavy rain at times' || sunOrClouds == 'Heavy rain') {
        var icon = "<img src='https://weatherstack.com/site_images/weather_icon_rainy.svg'>"
    } else if (sunOrClouds == 'Thundery outbreaks possible') {
        var icon = "<img src='https://weatherstack.com/site_images/weather_icon_thunder.svg'>"
    }
    
    var temperatureDiv = document.getElementById('temperature');
    temperatureDiv.innerHTML = '<p>Huidige temperatuur: </p>' + temperature + '&#176;C';
    var feelsLikeDiv = document.getElementById('feelsLike');
    feelsLikeDiv.innerHTML = '<p>Voelt aan als: </p>' + feelsLike + '&#176;C';
    var humidityDiv = document.getElementById('humidity');
    humidityDiv.innerHTML = '<p>Vochtigheid: </p>' + humidity + '%';
    var pressureDiv = document.getElementById('pressure');
    pressureDiv.innerHTML = '<p>Luchtdruk: </p>' + pressure + ' hPa';
    var sunOrCloudsDiv = document.getElementById('sunOrClouds');
    sunOrCloudsDiv.innerHTML = '<p>Vandaag: </p>' + sunOrClouds + icon;
}

document.getElementById('button').onclick = function(){
    getCity();
}

function getCity() {
    var textValue = document.getElementById("myText").value;
    getWeatherAPI(textValue, getWeatherData);
    getWeatherAPI(textValue, getMapLocation);
}

getWeatherAPI(city, getWeatherData);
getWeatherAPI(city, getMapLocation);



//API MAPBOX
mapboxgl.accessToken = 'pk.eyJ1IjoiaGFubmVrZTMxMDgiLCJhIjoiY2ttbHRsajV5MDlhNDJwbHc1MmdwbHdoNSJ9.AijgnojlL0zQrsuxoIpURw';

function getMapLocation(response) {
    var weatherLoc = response.location;
    var weatherLocCity = document.getElementById('city');
    weatherLocCity.innerHTML = weatherLoc.name;
    
    var map = new mapboxgl.Map({
        style: 'mapbox://styles/mapbox/satellite-v9',
        container: 'map',
        center: [weatherLoc.lon, weatherLoc.lat],
        //[4.322840, 52.067101]
        //bearing: -45,
        pitch: 0,
        zoom: 12,
    });

map.addControl(new mapboxgl.NavigationControl()); 
}


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



