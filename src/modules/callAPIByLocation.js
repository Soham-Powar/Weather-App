export default async function callAPIByLocation(locationName) {
  const fetchURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationName}?unitGroup=metric&key=24FXFJRPS3HUBDAAH3AFTTNJY&contentType=json`;
  console.log(fetchURL);
  const response = await fetch(fetchURL, {
    mode: "cors",
  });
  const infoObject = await response.json();
  console.log(infoObject);
}
