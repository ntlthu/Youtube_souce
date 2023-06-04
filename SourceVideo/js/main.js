function toggleParagraph(index) {
  var paragraph = document.getElementById("p" + index);
  var audio = document.getElementById("audio" + index);

  if (paragraph.classList.contains("active")) {
    paragraph.classList.remove("active");
    paragraph.style.transform = "none";
    paragraph.style.color = "black";
    audio.pause();
    audio.currentTime = 0;
  } else {
    paragraph.classList.add("active");
    paragraph.style.transform = "translateY(-5px)";
    paragraph.style.color = "red";
    audio.play();
  }
}
