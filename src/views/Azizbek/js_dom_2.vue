<template>
  <!-- 1. Exercise -->

  <footer id="footer">
    <h1>Footer Element</h1>
  </footer>

  <!-- 2. Exercise -->
   
  <h3>h3 element</h3>

  <!-- 3. Exercise  -->

  <button>Buttons</button>
  <button>Buttons</button>
  <button>Buttons</button>
  <button>Buttons</button>
  <button>Buttons</button>

  <!-- 4. Exercise -->

  <h4>h4 element</h4>
  
  <!-- 5. Exercise -->

  <footer>footer innerHTML</footer>

  <!-- 6. Exercise -->

  <button>Buttun Style</button>

  <!-- 7. Exercise -->

  <footer>footer setAttribute</footer>

  <!-- 8. Exercise -->

  <img src="#">

  <!-- 9. Exercise -->
  
  <h2 id="click">Click</h2>

  <button onclick="h2Event()" id="event" class="btn btn-primary">
    Event 
  </button>

  <!-- 11. Exercise  -->

  <input type="text" id="innerText">
  
</template>
<script setup>
// 2 - Homework

// 1. document.getElementById ёрдамида <footer> элементни танланг.

const footer = document.getElementById("footer");
console.log(footer);

// 2. document.querySelector ёрдамида <h3> элементни танланг

const h3 = document.querySelector("h3");
console.log(h3);

// 3. document.querySelectorAll ёрдамида барча <button> элементларни танланг.

const buttons = document.querySelectorAll("button");
console.log(buttons);

// 4. textContent ёрдамида <h4> элементнинг мазмунини ўзгартиринг.

const h3TextContent = document.querySelector("h3");
h3TextContent.textContent = "Text Content";
console.log(h3TextContent);


// 5. innerHTML ёрдамида <footer> элементнинг мазмунини HTML-код орқали ўзгартиринг.

const footerInnnerHTML = document.querySelector("footer");
footerInnnerHTML.innerHTML = "<footer>innerHTML</footer>";
console.log(footerInnnerHTML);

// 6. style ёрдамида <button> элементларнинг ўлчамларини ўзгартиринг.

const buttonStyle = document.querySelector("button");
buttonStyle.style.width = "300px";
console.log(buttonStyle);

// 7. setAttribute ёрдамида <footer> элементга data-info атрибутини қўшинг.

const footerAtr = document.querySelector("footer");
footerAtr.setAttribute("data-info", "footer");
console.log(footerAtr);

// 8. getAttribute ёрдамида <img> элементнинг alt атрибути қийматини олинг ва шу қийматни веб-саҳифада кўрсатинг.

const imgAlt = document.querySelector("img");
// imgAlt.innerHTML = 'imgAlt.getAttribute('alt', 'logo')'
console.log(imgAlt);

// 9. addEventListener ёрдамида <button> элементга click ҳодисаси қўшинг ва унга <h2>
// элементнинг мазмунини ўзгартирувчи функцияни бириктиринг.

const eventBtn = document.getElementById('event')

function h2Event() {
    const h2 = document.getElementById('click');
    h2.textContent = 'Event'
}
eventBtn.addEventListener('click', h2Event)
// eventBtn.appendChild(h2)

// 10. mouseover ҳодисасини <footer> элементга қўшинг ва унга фон рангини ўзгартирувчи 
// функцияни бириктиринг.



// 11. input ҳодисасини <input> элементга қўшинг ва унга <footer> элементнинг мазмунини 
// ўзгартирувчи функцияни бириктиринг.

const inputFooter = document.getElementById('innerText');

function footerText() {
    const footerText = document.createElement('footer');
    footerText.innerText = 'footerEvent'
}

inputFooter.addEventListener('click', footerText);
// inputFooter.appendChild(footerText)



</script>
