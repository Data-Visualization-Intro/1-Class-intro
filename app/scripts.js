// select parts of the document & store them in variables
var textSpan = document.querySelector("p span");
var kittenPic = document.querySelector("img");

// create a new variable to store kitten clicks
var kittenClicks = 0;

// set up the kittenPic to listen for clicks
kittenPic.addEventListener("click", function () {
  // and run commands when the kitten is clicked
  kittenClicks = kittenClicks + 1;
  console.log("You kitten clicked " + kittenClicks + " times!");
  textSpan.textContent = kittenClicks;
});

// ============================================================
var firstParagraph = document.querySelector("p");

function makeDiv() {
  const p = document.createElement("p");
  p.innerHTML = "Hello, world!";
  firstParagraph.append(p);
}
makeDiv();

// ============================================================

var data = [40, 80, 150, 160, 230, 420];

var chart = `
  <div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[0]}px;">${data[0]}</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[1]}px;">${data[1]}</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[2]}px;">${data[2]}</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[3]}px;">${data[3]}</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[4]}px;">${data[4]}</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[5]}px;">${data[5]}</div>
`;

firstParagraph.innerHTML = chart;

// ============================================================

var data = [40, 80, 150, 160, 230, 420];

var chart = `
  <div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[0]}px;">${data[0]}</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[1]}px;">${data[1]}</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[2]}px;">${data[2]}</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[3]}px;">${data[3]}</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[4]}px;">${data[4]}</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[5]}px;">${data[5]}</div>
`;

firstParagraph.innerHTML = chart;

// ============================================================

var data = [40, 80, 150, 160, 230, 420];
var chart = "";
for (var dataPoint = 0; dataPoint < data.length; dataPoint++) {
  chart += `<div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[dataPoint]}px;">
      ${data[dataPoint]}
    </div>`;
}

firstParagraph.innerHTML = chart;

// ============================================================

var data = [40, 80, 150, 160, 230, 420];

var chart = document.createElement("div");
chart.className = "dv-container";

for (var dataPoint = 0; dataPoint < data.length; dataPoint++) {
  chart.innerHTML += `<div class="dv-bar" style="width: ${data[dataPoint]}px;">
      ${data[dataPoint]}
    </div>`;
}

firstParagraph.append(chart);

// ============================================================

var data = [40, 80, 150, 160, 230, 420];

var dataPlusHundered = data.map( num => num + 100 );

console.log(dataPlusHundered)

// ============================================================

var data = [40, 80, 150, 160, 230, 420];

var chart = 
`<div class="dv-container">
  ${data.map( bar =>
    `<div class="dv-bar" style="width: ${bar}px;">
      ${bar}
    </div>`)}
</div>`;

firstParagraph.innerHTML = chart;

