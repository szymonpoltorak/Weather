let weather = {
    apiKey : "301b3b0cf8401e5f397049e31c72bbe5",

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

        document.querySelector(".loading").style.display = "none";
        document.querySelector(".city").innerText = name;
        document.querySelector(".temperature").innerText = temp + "°C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
    }
};

document.querySelector(".search").addEventListener("click", () => weather.search());

document.querySelector(".myText").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        weather.search();
    }
});
