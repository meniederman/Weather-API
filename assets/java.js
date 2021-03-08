var searchBtnEl = document.querySelector(".search-Btn");
var cityInputEl = document.querySelector(".searchWeather");
var cityDateEl = document.querySelector(".cityDate");
var futureDateEl = document.querySelector(".future");

var thisSucks = function (event) {
    event.preventDefault();
    var cityInput = cityInputEl.value.trim();
    var futureInput = futureDateEl.value.trim();
    if(cityInput) {
        cityInputEl.textContent(cityInput);
    cityS(cityInput);
      }
      if(futureInput){
          futureDateEl.textContent(futureInput);
          forecastS(futureInput);
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

var forecastS = function (cityName) {
    var cityUrl  = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=' +cityName+ '&cnt=5&appid=6051ccf89f20e16cb1ece2484634b69c'
    fetch(cityUrl)
    .then(function(response){
        return response.json();
        console.log(response)
    }) .then(function(data) {
    });
    then.function(response);{
        var forecastS = (".card-body") 
        forecastS.empty();
        for (var i = 0; i < 5; i++){
            var ugh = <div class = "card-group bg-info col-12"></div>;
            forecastS.append(ugh)
        }
    }
};

}

var citySearch = JSON.parse(localStorage.getItem('searchHistory'))
function saveToList(cityInput){
    citySearch.push(cityInput);
    localStorage.setItem('searchHistory', JSON.stringify(citySearch));
    renderSearchHistory();
}

searchBtnEl.addEventListener('click', thisSucks);
