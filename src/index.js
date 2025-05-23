import "./styles.css";
import "./dom/dom.css";

import addFooter from "./dom/footer";
import callAPIByLocation from "./modules/callAPIByLocation";
import renderLandingPage from "./dom/renderLandingPage";

document.addEventListener("DOMContentLoaded", () => {
  addFooter();
  // renderLandingPage();
  callAPIByLocation("Kolhapur");
});
