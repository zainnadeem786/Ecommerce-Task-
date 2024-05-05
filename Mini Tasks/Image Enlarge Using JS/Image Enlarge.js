function toggleEnlarge() {
    let image = document.getElementById("image");
    if (image.style.transform === "scale(2)") {
      image.style.transform = "scale(1)";
      document.getElementsByClassName("enlarge-button")[0].innerHTML = "Enlarge Image";
    } else {
      image.style.transform = "scale(2)";
      document.getElementsByClassName("enlarge-button")[0].innerHTML = "Reduce Image";
    }
  }