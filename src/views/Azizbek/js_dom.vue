<template>
  <h1 id="domH1">DOM Homework</h1>
  <p class="exercise">Exerscise 2</p>
  <ul>
    <li>Exercise 1</li>
    <li>Exercise 2</li>
    <li>Exercise 3</li>
    <li>Exercise 4</li>
    <li>Exercise 5</li>
  </ul>
  <h1 id="textContent">TextContent</h1>
  <p class="innerHTML">innerHTML</p>
  <ul class="list-color">
    <li class="style">Red</li>
    <li>Blue</li>
    <li>Black</li>
    <li>Grey</li>
    <li>Blue</li>
    <li>Yellow</li>
    <li>Green</li>
    <li>Brown</li>
  </ul>
  <p class="atr">setAttribute</p>
  <a id="myHref" href="huxn"></a>
  <h1 id="event">Event</h1>
  <button class="d-block btn btn-danger" id="myClick">Click</button>
  <span class="btn btn-info" id="mouseover"> mouseover </span>
  <input class="d-block" type="text" id="input" />
</template>

<script setup>
// 1. Exercise

const h1 = document.getElementById("domH1");
console.log(h1);

const p = document.querySelector(".exercise");
console.log(p);

const li = document.querySelectorAll("li");
console.log(li);

const h1TextContext = document.getElementById("textContent");
h1TextContext.textContent = "h1TextContent";

const pInnerHTML = document.querySelector(".innerHTML");
pInnerHTML.innerHTML = `<b>bold innerHTML</b>`;

const lists = document.querySelector(".style");
lists.style.backgroundColor = "red";
lists.style.color = "white";

const setAttribute = document.querySelector(".atr");
setAttribute.setAttribute("id", "setAttribute");

const getAttribute = document.querySelector("#myHref");
var val = getAttribute.getAttribute("href");
console.log(val);

const btn = document.querySelector("#myClick");
btn.addEventListener("click", deleteList);

function deleteList() {
  var h1 = document.getElementById("domH1");
  h1.textContent = "sdsdsdsdsd"; // To'g'ri yo'l
}

const mouseover = document.querySelector(".list-color");
mouseover.addEventListener("mouseover", addLI);

function addLI() {
  mouseover.style.color = "red";
  const li = document.createElement("li");
  li.textContent = "New Item";
  mouseover.appendChild(li);
}

const input = document.querySelector("#input");
input.addEventListener("input", inputP);

function inputP() {
  const pElement = document.createElement("p");
  pElement.innerHTML = input.value;
  document.body.appendChild(pElement);
}
</script>
