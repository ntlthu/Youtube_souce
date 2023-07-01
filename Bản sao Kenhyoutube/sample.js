// // Lấy tất cả các div chứa nội dung và button
// const slideCarousels = document.querySelectorAll(".slideCarousel");

// // Thêm sự kiện cho từng slideCarousel
// slideCarousels.forEach(function (slideCarousel) {
//   const button = slideCarousel.querySelector("button");
//   const contentVN = slideCarousel.querySelector('[id^="ContentVN"]');
//   const contentJP = slideCarousel.querySelector('[id^="ContentJP"]');
//   const jpvn = [contentVN.querySelector("p"), contentJP.querySelector("p")];
//   const headings = [
//     contentVN.querySelector("h6"),
//     contentJP.querySelector("h6"),
//   ];

//   button.addEventListener("click", function () {
//     toggleContent(jpvn, headings);
//   });
// });

// function toggleContent(jpvn, headings) {
//   jpvn.forEach(function (element) {
//     element.classList.toggle("hidden");
//   });

//   headings.forEach(function (element) {
//     element.style.display = element.style.display === "none" ? "block" : "none";
//   });
// }

// Lấy các button và div tương ứng
const button1 = document.getElementById("button1");
const jpvn1 = [
  document.getElementById("jpvn1"),
  document.getElementById("jpvn2"),
];
const headings1 = [
  document.getElementById("h1"),
  document.getElementById("h2"),
];

const button2 = document.getElementById("button2");
const jpvn2 = [
  document.getElementById("jpvn3"),
  document.getElementById("jpvn4"),
];
const headings2 = [
  document.getElementById("h3"),
  document.getElementById("h4"),
];

const button3 = document.getElementById("button3");
const jpvn3 = [
  document.getElementById("jpvn5"),
  document.getElementById("jpvn6"),
];
const headings3 = [
  document.getElementById("h5"),
  document.getElementById("h6"),
];

const button4 = document.getElementById("button4");
const jpvn4 = [
  document.getElementById("jpvn7"),
  document.getElementById("jpvn8"),
];
const headings4 = [
  document.getElementById("h7"),
  document.getElementById("h8"),
];

// Xử lý sự kiện khi nhấn vào button 1
button1.addEventListener("click", () => {
  toggleContent(jpvn1);
  toggleContent(headings1);
});

// Xử lý sự kiện khi nhấn vào button 2
button2.addEventListener("click", () => {
  toggleContent(jpvn2);
  toggleContent(headings2);
});

// Xử lý sự kiện khi nhấn vào button 3
button3.addEventListener("click", () => {
  toggleContent(jpvn3);
  toggleContent(headings3);
});

// Xử lý sự kiện khi nhấn vào button 4
button4.addEventListener("click", () => {
  toggleContent(jpvn4);
  toggleContent(headings4);
});

// Hàm ẩn hiện nội dung
function toggleContent(elements) {
  elements.forEach((element) => {
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
