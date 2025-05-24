import renderDaysWeather from "./renderDaysWeather";
import renderMainWeather from "./renderMainWeather";
import renderWeekWeather from "./renderWeekWeather";

export default function displayWeather(generalWeather, weekArray) {
  const bodyContainer = document.querySelector(".body-container");
  bodyContainer.innerHTML = "";
  //   console.table(generalWeather);
  //   console.table(weekArray);
  renderMainWeather(generalWeather, weekArray[0]);
  renderDaysWeather(weekArray[0]);
  renderWeekWeather(weekArray);
}
