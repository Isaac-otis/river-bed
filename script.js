const imageArea = document.querySelector(".column-wrapper");
const button = document.querySelector("button");

button.addEventListener("click", function() {
  imageArea.classList.toggle("grid");

  if (imageArea.classList.contains("grid")) {
    button.innerHTML = "DO SOMETHING";
  } else {
    button.innerHTML = "DO NOTHING";
  }
});

function themeSwitch() {
    var t1 = document.getElementById('theme');
    var t2 = document.getElementById('alttheme');
    t1.disabled = !t1.disabled;
    t2.disabled = !t1.disabled;
}