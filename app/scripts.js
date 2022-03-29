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
