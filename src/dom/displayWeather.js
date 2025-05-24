import renderDaysWeather from "./renderDaysWeather";
import renderLandingPage from "./renderLandingPage";
import renderMainWeather from "./renderMainWeather";
import renderWeekWeather from "./renderWeekWeather";

export default function displayWeather(generalWeather, weekArray) {
  const bodyContainer = document.querySelector(".body-container");
  const mainContainer = document.querySelectorAll(".hide-later");
  const heading = document.querySelector("h2.hide-later");

  heading.addEventListener("click", () => {
    renderLandingPage();
  });

  mainContainer.forEach((div) => {
    div.classList.remove("main-container-hide");
  });
  bodyContainer.innerHTML = "";
  //   console.table(generalWeather);
  //   console.table(weekArray);
  renderMainWeather(generalWeather, weekArray[0]);
  renderDaysWeather(weekArray[0]);
  renderWeekWeather(weekArray);
}
