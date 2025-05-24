import "./styles.css";
import "./dom/dom.css";

import addFooter from "./dom/footer";
import renderLandingPage from "./dom/renderLandingPage";

document.addEventListener("DOMContentLoaded", () => {
  addFooter();
  renderLandingPage();
});
