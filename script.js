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
