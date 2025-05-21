export default class generalWeather {
  constructor(respObject) {
    this.resolvedAddress = respObject.resolvedAddress;
    this.timezone = respObject.timezone;
    this.localTime = respObject.currentConditions.datetime;
    this.temp = respObject.currentConditions.temp;
    this.feelsLike = respObject.currentConditions.feelslike;
    this.humidity = respObject.currentConditions.humidity;
    this.rainProb = respObject.currentConditions.precipprob;
    this.uvIndex = respObject.currentConditions.uvindex;
    this.icon = respObject.currentConditions.icon;
    this.conditions = respObject.currentConditions.conditions;
  }
}
