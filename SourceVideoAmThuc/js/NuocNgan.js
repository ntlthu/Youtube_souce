var paragraphContents = {
  jpEN1:
    "Vietnamese Iced Tea is a popular and refreshing beverage enjoyed throughout Vietnam. This is a cold version of tea, prepared and served with ice. Iced tea typically has a refreshing, delicious, and thirst-quenching taste, making it a great choice on hot days. Iced tea has various variations and different brewing methods. One of the most popular types of iced tea is traditional iced tea, made from fresh tea leaves and hot water, or made using a special type of tea called [black tea] or [lotus leaf tea], then cooled and served with ice and sugar. People can also add lemon, peach, grapefruit, or other fruits to enhance the flavor and add more colors to the iced tea. Iced tea is an essential part of Vietnamese culture and cuisine. You can find iced tea being served from street food stalls to cafes and restaurants throughout Vietnam.",
  jpEN2: "aabc",
  jpEN3: "gfh",
};

var originalContents = {}; // Mảng lưu trữ nội dung ban đầu của từng thẻ p

// Lưu trữ nội dung ban đầu của từng thẻ p
for (var key in paragraphContents) {
  originalContents[key] = document.getElementById(key).innerHTML;
}

function changeJPEN(pIndex) {
  const targetParagraph = document.getElementById(`jpEN${pIndex}`);

  if (targetParagraph) {
    if (targetParagraph.innerHTML === paragraphContents[`jpEN${pIndex}`]) {
      targetParagraph.innerHTML = originalContents[`jpEN${pIndex}`];
      targetParagraph.classList.remove("English-text");
    } else {
      targetParagraph.innerHTML = paragraphContents[`jpEN${pIndex}`];
      targetParagraph.classList.add("English-text");
    }
  }
}

// am thanh

function toggleParagraph(index) {
  var paragraph = document.getElementById("p" + index);
  var audio = document.getElementById("audio" + index);

  if (paragraph.classList.contains("active")) {
    paragraph.classList.remove("active");
    paragraph.style.transform = "none";
    paragraph.classList.remove("highlight");
    audio.pause();
    audio.currentTime = 0;
  } else {
    paragraph.classList.add("active");
    paragraph.style.transform = "translateY(-5px)";
    paragraph.classList.add("highlight");
    audio.play();
  }
}

// JavaScript
function playVideo(videoId) {
  var video = document.getElementById(videoId);

  if (video) {
    video.load();
    video.play();
  }
}
