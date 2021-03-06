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
    if(cityInput) {
        cityInputEl.textContent = cityInput;
    cityS(cityInput);
      }
    
}


var cityS = function (cityName) {
var cityUrl  ='https://api.openweathermap.org/data/2.5/weather?q=' +cityName+'&appid=6051ccf89f20e16cb1ece2484634b69c';
    fetch(cityUrl)
    .then(function(response){
        return response.json();
        console.log(response)
    }) .then(function(data) {
    });
    then.function(response);{
        return cityName.appendChild.cityDateEl;
    }
};

var citySearch = JSON.parse(localStorage.getItem('searchHistory'))
function saveToList(cityInput){
    citySearch.push(cityInput);
    localStorage.setItem('searchHistory', JSON.stringify(citySearch));
    renderSearchHistory();
}

searchBtnEl.addEventListener('click', thisSucks);
