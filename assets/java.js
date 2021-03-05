var searchBtnEl = document.querySelector('searchBtn');
var cityInputEl = document.querySelector('searchWeather');




var searchbtnAction = function(event){
    event.preventDefault();
    var city = cityInputEl;

    if (city){
        cityName(city);
    }
}


      
var cityName = function (cityName) {
    var apiUrl = ('https;//www.api.openweathermap.org/data/2.5/weather?q=' + 'city name')

    fetch(apiUrl)
    .then(function (response) {
        return response.json();
    }) .then(function(data) {
        console.log(data);
    });
}

searchBtnEl.addEventListener('click', searchbtnAction)