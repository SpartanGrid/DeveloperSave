const sidebar = document.getElementById("side-bar");
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
// const response = document.querySelector("correct");

// console.log(response)


btn.addEventListener('click', () => {
  sidebar.classList.toggle("active");
});

// btn1.addEventListener('click', () => {
//   response.style.visibility = "visible";
// });
// btn2.addEventListener('click', () => {

// });
// questionContainer.style.borderRadius = ("150px");


questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked")
})







