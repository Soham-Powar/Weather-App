import "./styles.css";
import "./dom/dom.css";

import addFooter from "./dom/footer";
import renderLandingPage from "./dom/renderLandingPage";

import callAPIByLocation from "./modules/callAPIByLocation";

// callAPIByLocation("Kolhapur");

document.addEventListener("DOMContentLoaded", () => {
  addFooter();
  renderLandingPage();
});
