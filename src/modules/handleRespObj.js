import generalWeather from "./makeMainInfo";
import dayWeather from "./makeWeekDayInfo";

export default function handleRespObj(respObj) {
  const genWeather = new generalWeather(respObj);
  const weekArray = [];
  respObj.days.forEach((day) => {
    weekArray.push(new dayWeather(day));
  });
  console.log(genWeather);
  console.log(weekArray);
}
