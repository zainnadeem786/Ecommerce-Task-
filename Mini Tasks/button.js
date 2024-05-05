const button = document.getElementById("Button");

button.addEventListener("click", function() {
  const currentColor = button.style.backgroundColor;
  let newColor;

  if (currentColor === "lightblue") {
    newColor = "lightgreen";
  } else {
    newColor = "lightblue";
  }

  button.style.backgroundColor = newColor;
});