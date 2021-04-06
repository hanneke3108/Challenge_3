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
    var weatherCode = response.current.weather_code;
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
    } else if (sunOrClouds == 'Light Rain' || sunOrClouds == 'Light Drizzle') {
        var icon = "<img src='https://weatherstack.com/site_images/weather_icon_cloud_slight_rain.svg'>";
    } else if (sunOrClouds == 'Heavy rain at times' || sunOrClouds == 'Heavy rain') {
        var icon = "<img src='https://weatherstack.com/site_images/weather_icon_rainy.svg'>"
    } else if (sunOrClouds == 'Thundery outbreaks possible') {
        var icon = "<img src='https://weatherstack.com/site_images/weather_icon_thunder.svg'>"
    }
    
    var temperatureDiv = document.getElementById('temperature');
    temperatureDiv.innerHTML = '<p>Current temperature </p>' + temperature + '&#176;C';
    var feelsLikeDiv = document.getElementById('feelsLike');
    feelsLikeDiv.innerHTML = '<p>Feels like </p>' + feelsLike + '&#176;C';
    var humidityDiv = document.getElementById('humidity');
    humidityDiv.innerHTML = '<p>Humidity </p>' + humidity + '%';
    var pressureDiv = document.getElementById('pressure');
    pressureDiv.innerHTML = '<p>Pressure </p>' + pressure + ' hPa';
    var sunOrCloudsDiv = document.getElementById('sunOrClouds');
    sunOrCloudsDiv.innerHTML = '<p>Today </p>' + sunOrClouds + icon;
}

document.getElementById('button').onclick = function(){
    getCity();
}
document.getElementById('button2').onclick = function(){
    getCity();
}

function getCity() {
    var textValue = document.getElementById('myText').value;
    getWeatherAPI(textValue, getWeatherData);
    getWeatherAPI(textValue, getMapLocation);
    var textValue2 = document.getElementById('myText2').value;
    getWeatherAPI(textValue2, getWeatherData);
    getWeatherAPI(textValue2, getMapLocation);
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
        pitch: 0,
        zoom: 12,
    });
    
    //HOE PAS IK GEOCODER TOE MET EIGEN INPUT
    var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });

    // Voeg de zoekbalk toe
    map.addControl( geocoder);

    map.on('load', function () {
        // Listen for the `geocoder.input` event that is triggered when a use makes a selection
        geocoder.on('result', function (ev) {
        // console.log(ev.result.center);
        });
    });

    map.addControl(new mapboxgl.NavigationControl()); 
}