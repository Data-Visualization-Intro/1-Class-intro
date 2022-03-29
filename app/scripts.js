// select document elements & store them in variables
var textSpan = document.querySelector("p span");
var kittenPic = document.querySelector("img");

// create a new variable and initialize it to zero (stores kitten clicks)
var kittenClicks = 0;

// add a click event listener to kittenPic
kittenPic.addEventListener("click", function () {
  // commands to run when the kitten is clicked
  kittenClicks = kittenClicks + 1;
  console.log("You kitten clicked " + kittenClicks + " times!");
  textSpan.textContent = kittenClicks;
});
