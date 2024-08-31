<template>
  <!-- 1. Mashq -->

  <h1>1. Exercise</h1>

  <!-- 1. document.getElementById ёрдамида <footer> элементни танланг. -->

  <footer id="footer">
    <h1>Footer Element</h1>
  </footer>

  <!-- 2. Mashq -->
  <h3>h3 elementi</h3>

  <!-- 3. Mashq -->
  <button >Button</button>
  <button >Button</button>
  <button >Button</button>
  <button >Button</button>
  <button >Button</button>

  <!-- 4. Mashq -->
  <h4>h4 elementi</h4>

  <!-- 5. Mashq -->
  <footer>footer innerHTML</footer>

  <!-- 6. Mashq -->
  <button>Button Style</button>

  <!-- 7. Mashq -->
  <footer>footer setAttribute</footer>

  <!-- 8. Mashq -->
  <img src="#" alt="Sample Image" />

  <!-- 9. Mashq -->
  <h2 id="click">Click</h2>
  <button id="event" class="btn btn-primary">Event</button>

  <!-- 10. Mashq -->

  <!-- Ushbu mashq skript bo'limida ko'rib chiqiladi. -->

  <!-- 11. Mashq -->
  <input type="text" id="innerText" />
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // 1. <footer> elementini ID bo'yicha tanlang.
  const footer = document.getElementById("footer");
  console.log(footer);

  // 2. <h3> elementini querySelector yordamida tanlang.
  const h3 = document.querySelector("h3");
  console.log(h3);

  // 3. Barcha <button> elementlarini querySelectorAll yordamida tanlang.
  const buttons = document.querySelectorAll("button");
  console.log(buttons);

  // 4. <h4> elementining kontentini textContent yordamida o'zgartiring.
  const h4 = document.querySelector("h4");
  h4.textContent = "Yangilangan h4 elementi";
  console.log(h4);

  // 5. <footer> elementining kontentini innerHTML yordamida o'zgartiring.
  const footerInnerHTML = document.querySelectorAll("footer")[0];
  footerInnerHTML.innerHTML = "Yangilangan footer innerHTML";
  console.log(footerInnerHTML);

  // 6. <button> elementlarining uslubini o'zgartiring.
  const buttonStyle = document.querySelector("button");
  buttonStyle.style.width = "300px";
  buttonStyle.style.height = "50px";
  console.log(buttonStyle);

  // 7. <footer> elementiga data-info atributini qo'shing.
  const footerAttr = document.querySelectorAll("footer")[1];
  footerAttr.setAttribute("data-info", "footer");
  console.log(footerAttr);

  // 8. <img> elementining alt atribut qiymatini oling va ko'rsating.
  const img = document.querySelector("img");
  const imgAlt = img.getAttribute("alt");
  console.log(imgAlt);

  // 9. <button> elementiga click hodisasini qo'shing va <h2> kontentini yangilang.
  const eventBtn = document.getElementById("event");
  eventBtn.addEventListener("click", () => {
    const h2 = document.getElementById("click");
    h2.textContent = "Event Button Click";
  });

  // 10. <footer> elementiga mouseover hodisasini qo'shing va fon rangini o'zgartiring.
  const footerForMouseOver = document.getElementById("footer");
  footerForMouseOver.addEventListener("mouseover", () => {
    footerForMouseOver.style.backgroundColor = "lightgray";
  });

  // 11. <input> elementiga input hodisasini qo'shing va <footer> kontentini yangilang.
  const input = document.getElementById("innerText");
  input.addEventListener("input", () => {
    const footerForInput = document.querySelectorAll("footer")[1];
    footerForInput.textContent = input.value;
  });
});
</script>
