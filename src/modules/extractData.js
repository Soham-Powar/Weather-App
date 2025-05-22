import displayWeather from "../dom/displayWeather";
import generalWeather from "./makeMainInfo";
import dayWeather from "./makeWeekDayInfo";

export default function extractData(respObj) {
  const genWeather = new generalWeather(respObj);
  const weekArray = [];
  respObj.days.forEach((day) => {
    weekArray.push(new dayWeather(day));
  });
  displayWeather(genWeather, weekArray);
}
