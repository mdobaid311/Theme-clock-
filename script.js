const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const circle = document.querySelector(".circle");
const toggleEl = document.querySelector(".toggle");
const dateEl = document.querySelector(".date");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec  ",
];

toggleEl.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    e.target.innerHTML = "Light mode";
  } else {
    e.target.innerHTML = "Dark mode";
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const ampm = hours >= 12 ? "PM" : "AM";

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;

  timeEl.innerText = `${
    hoursForClock < 10 ? `0${hoursForClock}` : hoursForClock
  }:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
  dateEl.innerHTML = `${days[day]},${months[month]} <span class="circle">${date}</span>`;
}
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
setInterval(setTime, 1000);
