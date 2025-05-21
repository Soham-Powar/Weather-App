import callAPIByLocation from "../modules/callAPIByLocation";

export default function renderLandingPage() {
  const bodyEl = document.querySelector("body");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("body-container");

  mainContainer.innerHTML = `
		<h2>Welcome to weather</h2>
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
