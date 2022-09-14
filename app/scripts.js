// select document elements & store them in variables
const textSpan = document.querySelector("p span");
const kittenPic = document.querySelector("img");

// create a new variable and initialize it to zero (stores kitten clicks)
let kittenClicks = 0;

// add a click event listener to kittenPic
kittenPic.addEventListener("click", registerEvent);

function registerEvent() {
  // commands to run when the kitten is clicked
  kittenClicks++;
  // console.log("You kitten clicked " + kittenClicks + " times.");
  console.log(`You kitten clicked ${kittenClicks} times!`);
  textSpan.innerText = kittenClicks;
}
