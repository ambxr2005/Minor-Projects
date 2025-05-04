const apiKey = "ffb62fc53889811467c22f2ddc60eae5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "Images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "Images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "Images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "Images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "Images/mist.png";
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "Images/snow.png";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && searchBox.value.trim() !== "") {
        checkWeather(searchBox.value);
    }
});