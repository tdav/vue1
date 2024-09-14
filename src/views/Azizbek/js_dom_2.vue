<template>
  <h1>1. Exercise</h1>

  <footer id="footer">
    <h1>Footer Element</h1>
  </footer>

  <h3>h3 elementi</h3>

  <button class="btn btn-primary">Button</button>
  <button class="btn btn-primary">Button</button>
  <button class="btn btn-primary">Button</button>
  <button class="btn btn-primary">Button</button>
  <button class="btn btn-primary">Button</button>

  <h4>h4 elementi</h4>

  <footer>footer innerHTML</footer>

  <button>Button Style</button>

  <footer>footer setAttribute</footer>

  <img src="#" alt="Sample Image" />

  <h2 id="click">Click</h2>
  <button id="event" class="btn btn-primary">Event</button>

  <input type="text" id="innerText" />
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const footer = document.getElementById("footer");
  console.log(footer);

  const h3 = document.querySelector("h3");
  console.log(h3);

  const buttons = document.querySelectorAll("button");
  console.log(buttons);

  const h4 = document.querySelector("h4");
  h4.textContent = "Yangilangan h4 elementi";
  console.log(h4);

  // Barcha 'footer' elementlarini tanlash va ulardan birinchi va ikkinchisiga o'zgartirish kiritish
  const footers = document.querySelectorAll("footer");
  
  const footerInnerHTML = footers[0];
  footerInnerHTML.innerHTML = "Yangilangan footer innerHTML";
  console.log(footerInnerHTML);

  const buttonStyle = document.querySelector("button");
  buttonStyle.style.width = "300px";
  buttonStyle.style.height = "50px";
  console.log(buttonStyle);

  const footerAttr = footers[1];
  footerAttr.setAttribute("data-info", "footer");
  console.log(footerAttr);

  const img = document.querySelector("img");
  const imgAlt = img.getAttribute("alt");
  console.log(imgAlt);

  const eventBtn = document.getElementById("event");
  eventBtn.addEventListener("click", () => {
    const h2 = document.getElementById("click");
    h2.textContent = "Event Button Click";
  });

  const footerForMouseOver = document.getElementById("footer");
  footerForMouseOver.addEventListener("mouseover", () => {
    footerForMouseOver.style.backgroundColor = "lightgray";
  });

  const input = document.getElementById("innerText");
  input.addEventListener("input", () => {
    const footerForInput = footers[1];
    footerForInput.textContent = input.value;
  });
});
</script>
