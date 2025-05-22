import renderMainWeather from "./renderMainWeather";

export default function displayWeather(generalWeather, weekArray) {
  console.table(generalWeather);
  console.table(weekArray);
  renderMainWeather(generalWeather, weekArray[0]);
}
