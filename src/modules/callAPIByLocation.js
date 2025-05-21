import dayWeather from "./makeWeekDayInfo";
import extractData from "./extractData";

export default async function callAPIByLocation(locationName) {
  const fetchURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationName}/next7days?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Cname%2Caddress%2CresolvedAddress%2Clatitude%2Clongitude%2Ctempmax%2Ctempmin%2Ctemp%2Cfeelslikemax%2Cfeelslike%2Chumidity%2Cprecipprob%2Cvisibility%2Cuvindex%2Csunrise%2Cmoonphase%2Cconditions%2Cdescription%2Cicon&key=24FXFJRPS3HUBDAAH3AFTTNJY&contentType=json`;

  const response = await fetch(fetchURL, {
    mode: "cors",
  });

  const infoObject = await response.json();
  // console.log(infoObject);

  extractData(infoObject);
}
