// select document elements & store them in variables
const textSpan = document.querySelector(".kitten-num");
const kittenPic = document.querySelector(".kitten-pic");

// create a new variable and initialize it to zero (stores kitten clicks)
let kittenClicks = 0;

// add a click event listener to kittenPic
kittenPic.addEventListener("click", registerClick);

function registerClick(event) {
  console.log(event.target.width);
  // commands to run when the kitten is clicked
  kittenClicks++;
  console.log(`You kitten clicked ${kittenClicks} times!`);
  textSpan.innerText = kittenClicks;
}

// ===

var firstParagraph = document.querySelector("p");

const para = document.createElement("p");
para.innerText = "I'm a new paragraph!";
firstParagraph.after(para);

let data = [40, 80, 150, 160, 230, 420, 600];

var chart = `
<h3>Chart Title</h3>
<div class="dv-container">
${data
  .map(
    (bar) => `<div class="dv-bar" style="width: ${bar}px;">
      ${bar}
    </div>`
  )
  .join("")}
</div>`;

firstParagraph.innerHTML = chart;

var dataPlusHundered = data.map((d) => d + 100).filter((d) => d > 250);
