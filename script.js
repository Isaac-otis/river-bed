const imageArea = document.querySelector(".column-wrapper");
const button = document.querySelector("button");

button.addEventListener("click", function() {
  imageArea.classList.toggle("h1");

  if (imageArea.classList.contains("h1")) {
    button.innerHTML = "REMIX";
  } else {
    button.innerHTML = "AGAIN";
  }
});
function toggleTheme() {
  // Obtains an array of all <link>
  // elements.
  // Select your element using indexing.
  var theme = document.getElementsByTagName("link")[0];

  // Change the value of href attribute
  // to change the css sheet.
  if (theme.getAttribute("href") == "light.css") {
    theme.setAttribute("href", "dark.css");
  } else {
    theme.setAttribute("href", "light.css");
  }
}
