const sidebar = document.getElementById("side-bar");
const questionContainer = document.querySelector(".click-event"); 
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.getElementById("p1");
const response2 = document.getElementById("video-1");
const response3 = document.getElementById("video-2");
const target = document.getElementById("target");
let array = ["ingénieur", "informaticien", "en herbe"]
let wordIndex = 0;
let letterIndex = 0;
const createLetter = () => {
  const letter = document.createElement("span");
	target.appendChild(letter);
  
	letter.textContent = array[wordIndex][letterIndex];
  
  setTimeout(() => {
    letter.remove();
  }, 2800);
};
const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};
loop();
const counterDisplay = document.querySelector("h9");
let counter = 0;

const bubbleMaker = () => {

  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  // document.body.appendChild(bubble);
  
  
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  
  
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter
    bubble.remove();
  })

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 300); 
const mouses = document.querySelectorAll(".mouse");


btn.addEventListener('click', () => {
  sidebar.classList.toggle("active");
});

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.toggle("show-response");
  response.style.background = "rgba(214, 96, 227, 0.728)";
  response2.classList.toggle("show-response2"); 
});

btn2.addEventListener("click", () => {
  response.classList.toggle("show-response");
  response.style.background = "#e23e30c7";
  response3.classList.toggle("show-response3");
});

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.y + "px";
    mouse.style.left = e.x + "px";
  });
});









