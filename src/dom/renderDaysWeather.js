const todayTemp = document.querySelector(".today-temp + span");
const todayFeel = document.querySelector(".today-feels-like + span");
const todayPrecip = document.querySelector(".today-rain-prob + span");
const todayHumidity = document.querySelector(".today-humidity + span");
const todayUV = document.querySelector(".today-uv + span");

export default function renderDaysWeather(dayWeather) {
  todayTemp.innerText = dayWeather.temp + "°c";
  todayFeel.innerText = dayWeather.feelsLike + "°c";
  todayPrecip.innerText = dayWeather.rainProb + "%";
  todayHumidity.innerText = dayWeather.humidity + "%";
  todayUV.innerText = dayWeather.uvIndex;
}
