// dark and light mode button 
var num = 0;

// this get the all elements from index file 
let btn = document.getElementById("mode")
let sun = document.getElementsByClassName("bi bi-sun")[0]
let moon = document.getElementsByClassName("bi bi-moon")[0]
let circle = document.getElementById("circle")
let body = document.querySelector("body")

btn.addEventListener("click", function () {
  // light mode
  circle.style.transform = "translate(33px)"
  circle.style.borderColor = "var(--c1)"
  circle.style.backgroundColor = "rgba(253, 203, 103, 0.800)"
  sun.style.color = "var(--c3)"
  sun.style.opacity = "1"
  moon.style.opacity = "0"
  btn.style.backgroundColor = "var(--c1)"
  body.style.backgroundColor = "var(--c1)"
  num++

  if (num == 2) {
    // dark mode 
    num = 0;
    circle.style.transform = "translate(4px)"
    circle.style.borderColor = "var(--c1)"
    circle.style.backgroundColor = "rgba(42, 51, 64, 0.800)"
    moon.style.color = "var(--c1)"
    moon.style.opacity = "1"
    sun.style.opacity = "0"
    btn.style.backgroundColor = "var(--c5)"
    body.style.backgroundColor = "var(--c4)"

  }
})