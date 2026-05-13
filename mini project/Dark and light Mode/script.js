const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");

/* LIGHT MODE BUTTON */
lightBtn.onclick = function () {

  document.body.classList.remove("dark");
  document.body.classList.add("light");

};

/* DARK MODE BUTTON */
darkBtn.onclick = function () {

  document.body.classList.remove("light");
  document.body.classList.add("dark");

};