- [Introduction](#introduction)
  - [Resources](#resources)
    - [Github](#github)
  - [Zoom Tips](#zoom-tips)
  - [Summary of Tools and Technology](#summary-of-tools-and-technology)
  - [Introductory Exercise](#introductory-exercise)
    - [Dev Tools](#dev-tools)
    - [The Box Model](#the-box-model)
    - [Block vs Inline](#block-vs-inline)
    - [HTML and Semantics](#html-and-semantics)
    - [User Agent Styles](#user-agent-styles)
  - [CSS Syntax](#css-syntax)
    - [Three Pillars of the Web](#three-pillars-of-the-web)
    - [Streamline/Modernize the JS](#streamlinemodernize-the-js)
      - [The Fourth Pillar](#the-fourth-pillar)
  - [Data Visualization](#data-visualization)
  - [Homework](#homework)

# Introduction

1. There is no such thing as a silly question, you are encouraged to speak up anytime something is not clear to you
2. There is no such thing as a silly mistake, they are a gateway to learning
3. Do not dismiss someone because they have a different level of experience - be kind to others
4. During class exercises you promise to alert me the second something goes awry with your project
5. I will make myself available before or after class to clarify or expand on topics (or we can set an alternate time via email)

## Resources

Your instructor - Daniel Deverell (he, him): Front & Back end developer specializing in CSS, JavaScript, React and Node.

[Email](mailto:daniel.deverell@nyu.edu) - `daniel.deverell@nyu.edu`

### Github

Go to [the class home page on Github](https://github.com/Data-Visualization-Intro). `https://github.com/Data-Visualization-Intro`, is the source for _all files_ and notes used in this class. Class activities are documented in a readme file.

Please keep the notes open in a tab or another browser during class for reference and in order to copy and paste code.

At the end of class I typically upload or "push" my files back up to Github for your reference.

## Zoom Tips

- Do not run Zoom in full screen mode. It will hinder your ability to switch apps
- Press the spacebar if muted to temporarily enable the microphone
- If possible, leave your camera on
- Use a second screen by dialing into Zoom on another device or use a larger monitor
- You may need to configure Zoom for screen sharing (requires restarting Zoom)
- Recordings are made available on request
- If you raise your hand please alert me via voice

## Summary of Tools and Technology

A listing of applications and technologies you will be introduced to in the class include:

- HTML, CSS and JavaScript DOM manipulation
- SVG and D3 for data visualization
- Visual Studio Code
- AJAX and fetching and displaying data from APIs

## Introductory Exercise

This exercise introduces some web development basics but is also intended to get you set up and to give you a feel for the class structure.

1. Create a directory in your preferred location that you will use for _all files in this class_.
2. Download the zip file from this page using the green "Code" download button on Github
3. Unarchive the zip file into your new directory
4. Open the folder `introduction-main` in VS Code
5. Create a new file `index.html` in the `app` directory
6. In your .html file - type in ! and press tab and this should appear:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

1. Add the code below to `index.html`

```html
<h1>Hello world!</h1>
<div>
  <p>Paragraph's and divs are block elements. They're rendered inside a box.</p>
  <p>
    This <em>italic text</em> is an inline element. Here is a
    <a href="#test">link</a> - also an inline element.
  </p>
</div>
```

1. Install the Prettier extension in VS Code
1. Install the Live Server extension in VS Code and use it to open `app/index.html` in Google Chrome
1. Right click on any text and choose `Inspect`.

### Dev Tools

No matter which browser you are working in, the developer tools are your first line of defense when troubleshooting and should be kept open when you are working.

Set the inspector to the right side of the screen using the "kebab" (...) menu.

(The shortcut for opening the developer tools is `command-option-i`.)

### The Box Model

HTML tags or elements are interpreted as a box in the browser. They have CSS properties such as padding, border, position and margins. Taken together these elements form the box model.

### Block vs Inline

Most HTML elements have a default `display` property of `block` which means that they create a rectangular box in the browser and be stacked in the order they appear in the HTML.

The "opposite" of block in HTML is `inline`. An example might be a piece of italicized text `<em>` or a link `<a>`. A `<div>` tag is used to create an arbitrary block element and a `<span>` tag is used to create arbitrary inline elements.

The paragraph tag `<p>` creates a box (block) and by default has space above and below it while the italicized text (inline) does not and simply flows along with the rest of the text.

A `<div>` tag is a block tag which is used to create a logical division in your code. It creates an arbitrary box in a browser but other than that has no display characteristics. `div` tags are useful but don't convey information about the content inside them. Use HTML5 [semantic tags](https://www.w3schools.com/html/html5_semantic_elements.asp) whenever possible.

Try:

- Use the inspector to add `margin`, `padding`, `border` and `height` to the `em` tag with and without `display: block` and `display: inline-block` noting the box model graphic in the inspector

### HTML and Semantics

HTML tags convey _meaning_ to the content that makes up the document to help make it understandable. Since HTML tags can be made to look anyway you want via CSS they are [semantically](https://en.wikipedia.org/wiki/Semantic_HTML) - not stylistically - important. The proper use of HTML tags is important for accessibility.

HTML tags have _attributes_ that provide additional information about HTML elements such as the `href` in the anchor (`<a href >`) tag.

Try:

- Use the inspector to change the `div` tag to an `article` tag

There are quite a [few html tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) - each has a meaning and appropriate use.

### User Agent Styles

`User agent styles` are the default styles for HTML elements. By default the browser places margins above and below the header, paragraph and on all four sides of the body. These default styles make sure that the document can be displayed even in the absence of a style sheet. You will typically build on top of these.

1. Add `<link rel="stylesheet" href="styles.css" />` to the head of the html document

## CSS Syntax

CSS rules consist of a [selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors), a set of curly braces, and a series of properties and values separated by a full colon and terminated by a semi colon.

```css
selector {
  property: value;
  property: value;
}
```

The selector determines which HTML element will be selected and properties are set by the value after the full colon. These almost always have a unit such as `px`, `s`, `em` or `%`.

Let's add padding, border and override the margins.

Edit `styles.css` to add:

```css
p {
  padding: 16px;
  margin: 1em;
  border: 3px solid #333;
  height: 100px;
  width: 80%;
}
```

Inspect the paragraph again. Note the changes in the inspector.

<!-- Try:

- Setting the height to 4px with `overflow: hidden;` and `overflow: auto;` -->

Note the drop down (triangle) next to padding, margin and border properties in the inspector. This indicates a CSS shortcut. Click on it. Our border property could also be written in long form.

```css
border-style: solid;
border-color: #333333;
border-width: 3px;
```

Try:

- `border-top-style: dotted;`

Delete the body tag and its contents. Paste the following in in its place.

```html
<body id="top">
  <h1>Hello world!</h1>
  <main>
    <p>Paragraph's and divs are block elements. They rendered inside a box.</p>

    <p>
      This <em>italic text</em> is an inline element. Here is a
      <a href="#test">link</a> - also an inline element.
    </p>

    <img src="http://placekitten.com/320/240" alt="click the kitten" />

    <p>You clicked on the kitten <span aria-live="polite">0</span> times</p>
  </main>

  <p id="test"><a href="#top">Down here!</a></p>

  <script src="scripts.js"></script>
</body>
```

Note that the CSS is linked in the head of the document and the JavaScript is the last item in the HTML just above the closing body tag.

Click on the kitten and on the links to test.

Try:

- Click on the cat picture and note how the Elements inspector displays the number, and what happens in the Console tab
- Click on the link and note the change in the browser's address bar
- Force the link to hover using the inspector

Examine the applicable JS and CSS.

### Three Pillars of the Web

This simple document illustrates the three pillars of the web - content, appearance and behavior - working together. It is an example of the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) - an important principle in programming.

1. Content (HTML) - uses HTML to _semantically_ markup the content
1. Appearance (CSS) - uses CSS to determine how the content will appear to the user
1. Behavior (JavaScript) - uses JavaScript to control how the pages works and allow the user to interact with the content

### Streamline/Modernize the JS

```js
// select document elements & store them in variables
const textSpan = document.querySelector(".kitten-num");
const kittenPic = document.querySelector(".kitten-pic");

// create a new variable and initialize it to zero (to store kitten clicks)
let kittenClicks = 0;

kittenPic.addEventListener("click", () => {
  // commands to run when the kitten is clicked
  kittenClicks++;
  console.log("You kitten clicked " + kittenClicks + " times.");
  textSpan.innerText = kittenClicks;
});
```

Use a named function:

```js
// add a click event listener to kittenPic
kittenPic.addEventListener("click", registerClick);

function registerClick() {
  // commands to run when the kitten is clicked
  kittenClicks++;
  console.log(`You kitten clicked ${kittenClicks} times!`);
  textSpan.innerText = kittenClicks;
}
```

Explore the `registerClick` function:

```js
function registerClick(event) {
  console.log(event.target.width);
  kittenClicks++;
  console.log(`You kitten clicked ${kittenClicks} times.`);
  textSpan.innerText = kittenClicks;
}
```

#### The Fourth Pillar

In this class we will be using an additional web technology - Scalable Vector Graphics (SVG). SVG is to web graphics what HTML is to text.

Copy and paste this beneath the first `<p>` in `index.html`:

```svg
<svg width="300" height="200">
   <circle cx="150" cy="100" r="80" fill="green" />
</svg>
```

SVG can be styled with CSS:

```css
svg {
  width: 300px;
  height: 200px;
}

svg circle {
  fill: blue;
}
```

## Data Visualization

If our needs are simple we can use HTML and CSS to display data visualizations.

Add the following to `index.html` after the first paragraph:

<!-- prettier-ignore -->
```html
<!-- prettier-ignore -->
<div style="font: 10px sans-serif; text-align: right; color: white;">
  <div style="background: steelblue; padding: 3px; margin: 1px; width: 40px;">4</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: 80px;">8</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: 150px;">15</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: 160px;">16</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: 230px;">23</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: 420px;">42</div>
</div>
```

Hard-coding is impractical for most datasets. To create reusable logic we'll use JavaScript.

Add this to `scripts.js`:

```js
var firstParagraph = document.querySelector("p");

const para = document.createElement("p");
para.innerText = "I'm a new paragraph!";
firstParagraph.after(para);
```

Same as above but using a function:

```js
var firstParagraph = document.querySelector("p");

function makePara() {
  const para = document.createElement("p");
  para.innerText = "I'm a new paragraph!";
  firstParagraph.after(para);
}

makePara();
```

---

Demo: What's with all these dots?

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.id);
console.log(person.fullName());
```

---

Create the bars based on data:

```js
let data = [40, 80, 150, 160, 230, 420];

// console.log(data[4])
// var len = data.length;
// var idx = data.indexOf(160);
// console.log("length:", len, "index of 160:", idx);

var chart = `
  <div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[0]}px;">${data[0]}</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[1]}px;">${data[1]}</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[2]}px;">${data[2]}</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[3]}px;">${data[3]}</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[4]}px;">${data[4]}</div>
  <div style="background: steelblue; padding: 3px; margin: 1px; width: ${data[5]}px;">${data[5]}</div>
`;

firstParagraph.innerHTML = chart;
```

Use CSS to format the bars:

```html
var chart = `
<div class="dv-bar" style="width: ${data[0]}px;">${data[0]}</div>
<div class="dv-bar" style="width: ${data[1]}px;">${data[1]}</div>
<div class="dv-bar" style="width: ${data[2]}px;">${data[2]}</div>
<div class="dv-bar" style="width: ${data[3]}px;">${data[3]}</div>
<div class="dv-bar" style="width: ${data[4]}px;">${data[4]}</div>
<div class="dv-bar" style="width: ${data[5]}px;">${data[5]}</div>
`;
```

```css
.dv-bar {
  background: steelblue;
  padding: 3px;
  margin: 1px;
}
```

Use a for loop to generate the bar chart:

```js
var chart = "";

for (let dataPoint = 0; dataPoint < data.length; dataPoint++) {
  chart += `<div class="dv-bar" style="width: ${data[dataPoint]}px;">
      ${data[dataPoint]}
    </div>`;
}

firstParagraph.innerHTML = chart;
```

Please the bars inside a `div` with a class name of `dv-container`:

```js
var chart = document.createElement("div");
chart.className = "dv-container";

for (var dataPoint = 0; dataPoint < data.length; dataPoint++) {
  chart.innerHTML += `<div class="dv-bar" style="width: ${data[dataPoint]}px;">
      ${data[dataPoint]}
    </div>`;
}

firstParagraph.after(chart);
```

Add CSS to style `dv-container`.

```css
.dv-container {
  font: 10px sans-serif;
  text-align: right;
  color: white;
}
```

An alternate form of looping:

```js
for (var dataPoint in data) {
  chart.innerHTML += `<div class="dv-bar" style="width: ${data[dataPoint]}px;">
      ${data[dataPoint]}
    </div>`;
}

firstParagraph.after(chart);
```

Examples of using Array methods:

```js
var dataPlusHundered = data.map(function (d) {
  return d + 100;
});

console.log(dataPlusHundred);

console.log([3, 6, 5, 1, 9, 6, 5, 8, 2, 7].sort());
const valuesList = [3, 6, 5, 1, 9, 6, 5, 8, 2, 7];
console.log(valuesList.sort());
console.log(
  valuesList.filter(function (d) {
    return d > 5;
  })
);
```

<!-- prettier-ignore -->
```js
var chart = `<div class="dv-container">
  ${data.map( bar =>
      `<div class="dv-bar" style="width: ${bar}px;">
      ${bar}
    </div>`
  )}
</div>`;

firstParagraph.innerHTML = chart;
```

Use `.join("")` to join the array of strings into a single string.

<!-- prettier-ignore -->
```js
var chart = `<div class="dv-container">
  ${data.map( bar =>
      `<div class="dv-bar" style="width: ${bar}px;">
      ${bar}
    </div>`
  ).join("")}
</div>`;

firstParagraph.innerHTML = chart;
```

## Homework

Convert the hard-coded circle chart below to JavaScript using the methods discussed above. (You do not need to format the numbers.)

A starting point:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Homework</title>
    <style>
      .circle {
        border-radius: 50%;
        background-color: green;
        margin: 12px;
      }
    </style>
  </head>
  <body>
    <div
      class="circle-container"
      style="
        display: flex;
        align-items: center;
        text-align: center;
        line-height: 180px;
        font-size: 36px;
      "
    >
      <div class="circle" style="width: 200px; height: 200px">200</div>
      <div class="circle" style="width: 180px; height: 180px">180</div>
      <div class="circle" style="width: 220px; height: 220px">220</div>
    </div>
    <script></script>
  </body>
</html>
```

Add the data:

```js
var chartData = [200, 180, 220];
```

Create the circles in JavaScript using the data:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .circle {
        border-radius: 50%;
        background-color: green;
        margin: 12px;
      }
      .circle-container {
        display: flex;
        align-items: center;
        text-align: center;
        line-height: 180px;
        font-size: 36px;
      }
    </style>
  </head>
  <body>
    <div class="circle-container"></div>

    <script>
      var chartData = [200, 180, 220];

      var container = document.querySelector(".circle-container");

      var chart = `
      <div class="circle" style="width: ${chartData[0]}px; height: ${chartData[0]}px">${chartData[0]}</div>
      <div class="circle" style="width: ${chartData[1]}px; height: ${chartData[1]}px">${chartData[1]}</div>
      <div class="circle" style="width: ${chartData[2]}px; height: ${chartData[2]}px">${chartData[2]}</div>
      `;

      container.innerHTML = chart;
    </script>
  </body>
</html>
```

Possible end solution:

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Homework</title>
    <style>
      body {
        font-family: sans-serif;
      }
      .circle {
        border-radius: 50%;
        background-color: green;
        margin: 12px;
      }
      .circle-container {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
        line-height: 4;
      }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
    <script>
      let header = document.querySelector("h1");

      var chartData = [200, 120, 160];

      var circleChart = document.createElement("div");
      circleChart.className = "circle-container";

      for (let dataPoint in chartData) {
        circleChart.innerHTML += `<div class="circle" style="width: ${chartData[dataPoint]}px; height: ${chartData[dataPoint]}px">
      ${chartData[dataPoint]}
    </div>`;
      }

      header.after(circleChart);
    </script>
  </body>
</html>

```
