document.getElementById("screen-width").textContent =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
document.getElementById("screen-height").textContent =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
document.getElementById("screen-avail-width").textContent =
  window.screen.availWidth;
document.getElementById("screen-avail-height").textContent =
  window.screen.availHeight;
