import callAPIByLocation from "../modules/callAPIByLocation";

export default function renderLandingPage() {
  const bodyEl = document.querySelector("body");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("body-container");

  const welcomeHeading = document.createElement("h2");
  welcomeHeading.innerText = "Welcome to weather";

  const enterMsg = document.createElement("h3");
  enterMsg.innerText = "Enter a location";

  const form = document.createElement("form");
  form.innerHTML = `
  <input type="text" name="location" id="location" class="input-location">
  <button type="submit" class="search-btn">Search</button> 
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputLocation = document.querySelector(".input-location");
    callAPIByLocation(inputLocation.value);
  });

  mainContainer.appendChild(welcomeHeading);
  mainContainer.appendChild(enterMsg);
  mainContainer.appendChild(form);

  bodyEl.prepend(mainContainer);
}
