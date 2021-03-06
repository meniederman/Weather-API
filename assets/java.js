var searchBtnEl = document.querySelector(".search-Btn");
var cityInputEl = document.querySelector(".searchWeather");
var tempEl = document.querySelector(".temperature");
var humEl = document.querySelector(".humidity")
var wSEl = document.querySelector(".windSpeed")
var uvIndexEl = document.querySelector(".uvI")
var cityDateEl = document.querySelector(".cityDate")

var thisSucks = function (event) {
    event.preventDefault();
    var cityInput = cityInputEl.value.trim();
    cityName(cityInput);
    
}


var cityName = function (cityName) {
    fetch('https://www.api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=75c3ab4ae18755f10a323f2a0172dbf2')
    .then(function (response) {
        return response.json();
    }) .then(function(data, cityName) {
    });
};

var citySearch = JSON.parse(localStorage.getItem('searchHistory'))
function saveToList(cityInput){
    citySearch.push(cityInput);
    localStorage.setItem('searchHistory', JSON.stringify(citySearch));
    renderSearchHistory();
}

searchBtnEl.addEventListener('click', thisSucks);