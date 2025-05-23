const locationDiv = document.querySelector(".location");
const dateDiv = document.querySelector(".date");
const timeDiv = document.querySelector(".time");
const genTempDiv = document.querySelector(".temp");
const genTempMinMax = document.querySelector(".temp-minmax");
const genDesc = document.querySelector(".weather-desc");
const icon = document.querySelector(".weather-icon > img");
const backDiv = document.querySelector(".day-weather");

function dayOrNight(time) {
  console.log(parseInt(time.slice(0, 3)));
  if (parseInt(time.slice(0, 3)) >= 19) {
    return "night";
  } else {
    return "day";
  }
}

export default async function renderMainWeather(generalWeather, dayInfo) {
  locationDiv.innerText = generalWeather.resolvedAddress;
  timeDiv.innerText = generalWeather.localTime;
  dateDiv.innerText = dayInfo.date;
  genTempDiv.innerText = dayInfo.temp + "°c";
  genTempMinMax.innerText = dayInfo.tempMin + "°c / " + dayInfo.tempMax + "°c";
  genDesc.innerText = generalWeather.conditions;

  const dayOrNightString = dayOrNight(generalWeather.localTime);
  const weather = generalWeather.icon;
  try {
    const iconModule = await import(
      `../resources/icons/${weather}-${dayOrNightString}.svg`
    );
    icon.src = iconModule.default;

    const bgModule = await import(
      `../resources/backgrounds/${weather}-${dayOrNightString}.png`
    );
    backDiv.style.backgroundImage = `url(${bgModule.default})`;
  } catch (err) {
    console.error("Image loading error:", err);
    icon.src = "";
    backDiv.style.backgroundImage = "none";
  }
}
