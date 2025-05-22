const locationDiv = document.querySelector(".location");
const dateDiv = document.querySelector(".date");
const timeDiv = document.querySelector(".time");
const genTempDiv = document.querySelector(".temp");
const genTempMinMax = document.querySelector(".temp-minmax");
const genDesc = document.querySelector(".weather-desc");
const icon = document.querySelector(".weather-icon > img");

export default function renderMainWeather(generalWeather, dayInfo) {
  locationDiv.innerText = generalWeather.resolvedAddress;
  timeDiv.innerText = generalWeather.localTime;
  dateDiv.innerText = dayInfo.date;
  genTempDiv.innerText = dayInfo.temp + "°c";
  genTempMinMax.innerText = dayInfo.tempMin + "°c / " + dayInfo.tempMax + "°c";
  genDesc.innerText = generalWeather.conditions;
}
