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
  <section id="mouseoverSection" class="btn btn-success">mouseover</section>
  <!--10-->
  <hr />
  <input type="text" id="inputField" />
</template>

<script>
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      // DOM manipulyatsiyasini to'g'ridan-to'g'ri bajarish
      document.getElementById("myNav").textContent = "Salom";

      document.getElementById("selector").textContent = "Omon";

      document
        .querySelectorAll("section")
        .forEach((section) => (section.style.borderRadius = "10px  "));

      document.getElementById("mazmun").textContent = "omon";

      document.getElementById("innerHtml").innerHTML = "<b>innerHtml2</b>";

      document.getElementById("setAttributeW").setAttribute("data-custom", "someValue");

      const link = document.getElementById("link");
      if (link) {
        console.log(link.getAttribute("href"));
      } else {
        console.log("Element topilmadi.");
      }

      document.getElementById("changeButton").addEventListener("Click", () => {
        document.getElementById("Text1").textContent = "BOTTOM";
      });

      document.getElementById("mouseoverSection").addEventListener("mouseover", () => {
        const section1 = document.createElement("li");
        section1.borderColor = "Red";
        const borderColor = document.querySelector(".border-color");
        if (borderColor) {
          borderColor.appendChild(li);
        }
      });

      document.getElementById("inputField").addEventListener("change", () => {
        const inputField = document.getElementById("inputField");
        const h4 = document.createElement("h4");
        h4.textContent = inputField.value;
        document.body.appendChild(h4);
      });
    });
  },
};
</script>

<style scoped></style>
