<template>
  <div>
    <div id="myDiv">Salom</div>
  </div>
  <div>
    <h2 id="name">Omon</h2>
  </div>
  <div>
    <span>Bmw</span>
    <span>Cls</span>
    <span>Lamborghini</span>
    <span>Rolls-Royce</span>
    <span>Nexia2</span>
  </div>
  <h2 id="number">Oldingi Matn</h2>
  <p id="innerHtml">innerHtml</p>
  <div id="setAttribute1">omon</div>
  <a id="imageLink" href="img1">Image Link</a>
  <div id="button1">Salom</div>
  <button id="changeButton">Change</button>
  <span id="mouseoverSpan" class="btn btn-success">mouseover</span>
  <input type="text" id="inputField" />
</template>

<script>
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      // DOM manipulyatsiyasini to'g'ridan-to'g'ri bajarish
      document.getElementById("myDiv").textContent = "Yangilangan Salom";

      document.getElementById("name").textContent = "Omon Yangilandi";

      document
        .querySelectorAll("span")
        .forEach((span) => (span.style.backgroundColor = "blue"));

      document.getElementById("number").textContent = "omon";

      document.getElementById("innerHtml").innerHTML = "<b>innerHtml</b>";

      document.getElementById("setAttribute1").setAttribute("data-custom", "someValue");

      const imageLink = document.getElementById("imageLink");
      console.log(imageLink.getAttribute("href"));

      document.getElementById("changeButton").addEventListener("click", () => {
        document.getElementById("button1").textContent = "Xayr";
      });

      document.getElementById("mouseoverSpan").addEventListener("mouseover", () => {
        const li = document.createElement("li");
        li.textContent = "Red";
        const listColor = document.querySelector(".list-color");
        if (listColor) {
          listColor.appendChild(li);
        }
      });

      document.getElementById("inputField").addEventListener("change", () => {
        const inputField = document.getElementById("inputField");
        const p = document.createElement("p");
        p.textContent = inputField.value;
        document.body.appendChild(p);
      });
    });
  },
};
</script>

<style scoped></style>
