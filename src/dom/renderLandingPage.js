import callAPIByLocation from "../modules/callAPIByLocation";

export default function renderLandingPage() {
  const main = document.querySelectorAll(".hide-later");
  main.forEach((div) => {
    div.classList.add("main-container-hide");
  });

  const bodyEl = document.querySelector("body");

  let mainContainer = document.querySelector(".body-container");
  if (!mainContainer) {
    mainContainer = document.createElement("div");
    mainContainer.classList.add("body-container");
  }

  mainContainer.innerHTML = `
		<h2>Weatherly</h2>
		<div class="location-div">
			<h3>Enter a location</h3>
			<form>
				<input type="text" name="location" id="location" class="input-location">
				<button type="submit" class="search-btn">Search</button>
			</form>
		</div>
	`;

  bodyEl.prepend(mainContainer);
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputLocation = document.querySelector(".input-location");
    callAPIByLocation(inputLocation.value);
  });
}
