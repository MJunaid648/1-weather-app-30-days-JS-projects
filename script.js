const apiKey = "fea657b560edd8d3cfafc8bfc68e23e2";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const weatherDetails = document.querySelector(".weather");
const searchTerm = document.querySelector(".search input");
const seearchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const error = document.querySelector(".error");
const loader = document.querySelector(".loader");
const card = document.querySelector(".card");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const fetchWeather = async (city) => {
  loader.style.display = "block";
  card.style.display = "none";

  const response = await fetch(apiURL + `&appid=${apiKey}` + `&q=${city}`);
  let data = await response.json();

  if (response.status == 404) {
    loader.style.display = "none";
    card.style.display = "block";
    error.style.display = "block";
    weatherDetails.style.display = "none";

    return;
  } else {
    loader.style.display = "none";
    card.style.display = "block";
    error.style.display = "none";

    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";
    weatherDetails.style.display = "block";

    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "images/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "images/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "images/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "images/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "images/mist.png";
        break;
    }
  }
};

seearchBtn.addEventListener("click", () => {
  fetchWeather(searchTerm.value);
});
