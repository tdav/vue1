<template>
  <!--1-->
  <div>
    <nav id="myNav">Salom</nav>
  </div>

  <!--2-->
  <div>
    <h4 id="selector">Good day</h4>
  </div>

  <!--3-->
  <div>
    <section>car</section>
    <section>plane</section>
    <section>train</section>
  </div>

  <!--4-->
  <h2 id="mazmun">Eski</h2>

  <!--5-->
  <p id="innerHtml">Inner HTML</p>

  <!--6-->
  <div id="setAttributeW" data-custom="someValue">omon</div>

  <!--7-->
  <a id="link" href="#">LINK</a>

  <!--8-->
  <div id="Text1">TOP</div>
  <button id="changeButton">O'ZGARTIRISH</button>

  <!--9-->
  <!-- "mouseoverSection" elementini "changeButton" tugmasidan keyin joylashtirdik -->
  <section id="mouseoverSection" class="btn btn-success">mouseover</section>

  <!--10-->
  <hr />

  <input type="text" id="inputField" placeholder="..." />
  <h4 id="outputText"></h4>
</template>

<script>
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      // 1.
      document.getElementById("myNav").textContent = "Salom";

      // 2.
      document.getElementById("selector").textContent = "Omon";

      // 3.
      document
        .querySelectorAll("section")
        .forEach((section) => (section.style.borderRadius = "10px"));

      // 4.
      document.getElementById("mazmun").textContent = "omon";

      // 5.
      document.getElementById("innerHtml").innerHTML = "<b>innerHtml2</b>";

      // 6.
      document.getElementById("setAttributeW").setAttribute("data-custom", "someValue");

      // 7.
      const link = document.getElementById("link");
      if (link) {
        console.log(link.getAttribute("href"));
      }

      // 8.
      document.getElementById("changeButton").addEventListener("click", () => {
        document.getElementById("Text1").textContent = "BOTTOM";
      });

      // 9.
      const section = document.getElementById("mouseoverSection");
      section.addEventListener("mouseover", () => {
        section.style.borderColor = "Red";
      });
      section.addEventListener("mouseleave", () => {
        section.style.borderColor = "black";
      });

      // 10.
      document.getElementById("inputField").addEventListener("input", () => {
        const inputField = document.getElementById("inputField");
        const h4 = document.getElementById("outputText");
        h4.textContent = inputField.value;
      });
    });
  },
};
</script>
