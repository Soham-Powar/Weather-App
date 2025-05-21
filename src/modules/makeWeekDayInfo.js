export default class dayWeather {
  constructor(dayObject) {
    this.temp = dayObject.temp;
    this.tempMax = dayObject.tempmax;
    this.tempMin = dayObject.tempmin;
    this.humidity = dayObject.humidity;
    this.rainProb = dayObject.precipprob;
    this.uvIndex = dayObject.uvindex;
    this.icon = dayObject.icon;
    this.conditions = dayObject.conditions;
    this.date = dayObject.datetime;
    this.feelsLike = dayObject.feelslike;
  }
}
