let weather = {
    apiKey : getApiKey(),

    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey + "&units=metric"
        ) .then((response) => {
                if (!response.ok){
                    alert("Wrong city name!");
                    return;
                }
                return response.json();
            }
        ) .then((data) => this.displayWeatherInfo(data));
    },

    search: function () {
        this.fetchWeather(document.querySelector(".myText").value);
    },

    displayWeatherInfo: function (data) {
        const {name} = data;
        const {temp} = data.main;
        const {icon, description} = data.weather[0];

        const loading = document.querySelector(".loading");
        const city = document.querySelector(".city");
        const temperature = document.querySelector(".temperature");
        const weatherIcon = document.querySelector(".icon");
        const weatherDescription = document.querySelector(".description");

        loading.style.display = "none";
        city.innerText = name;
        temperature.innerText = temp + "°C";
        weatherIcon.src = "https://openweathermap.org/img/wn/" + icon + ".png";
        weatherDescription.innerText = description;
    }
};

const searchBar = document.querySelector(".myText");
const submitButton = document.querySelector(".search");

submitButton.addEventListener("click", () => weather.search());

searchBar.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        weather.search();
    }
});
