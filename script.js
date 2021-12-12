const imageArea = document.querySelector(".container");
const button = document.querySelector("button");

button.addEventListener("click", function() {
  imageArea.classList.toggle("h1");

  if (imageArea.classList.contains("h1")) {
    button.innerHTML = "REMIX";
  } else {
    button.innerHTML = "AGAIN";
  }
});
