const weekDays = document.querySelector(".week-days");

export default function renderWeekWeather(weekArray) {
  weekDays.innerHTML = "";
  weekArray.forEach(async (day) => {
    const para = document.createElement("p");
    para.classList.add("week-day");
    para.innerText = day.date;

    const imgIcon = document.createElement("img");
    imgIcon.classList.add("week-icon");
    try {
      const iconModule = await import(`../resources/icons/${day.icon}-day.svg`);
      imgIcon.src = iconModule.default;
    } catch (err) {
      console.error(`Icon not found: ${day.icon}-day.svg`, err);
      imgIcon.src = "fallback-icon.svg";
    }

    const desc = document.createElement("p");
    desc.classList.add("week-desc");
    desc.innerText = day.conditions;

    const temp = document.createElement("p");
    temp.classList.add("week-temp");
    temp.innerText = day.temp;

    const div = document.createElement("div");
    div.appendChild(para);
    div.appendChild(imgIcon);
    div.appendChild(desc);
    div.appendChild(temp);

    weekDays.appendChild(div);
  });
}
