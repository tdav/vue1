<template>
<!--1-->
<div>
    <div id="MyDiv">Salom</div>
</div>
<!--2-->
<div>
    <h2 class="MyName">Omon</h2>
</div>
<!--3-->
<div>
    <span>Bmw</span>
    <span>Cls</span>
    <span>Lamborghini</span>
    <span>Rolls-Royce</span>
    <span>Nexia2</span>
</div>
<!--4-->
<h2 class="number">1234</h2>
<!--5-->
<p class="html">innerHtml</p>
<!--6-->
<!--tepada-->
<!--7-->
<div id="setAttribute1">omon</div>
<!--8-->
<a class="imghref" href="img1"></a>
<!--9-->
<div id="button1">Salom</div>
<button class="btn btn-success onClick">Change</button>
<!--10-->
<span class="btn btn-success mouseover">mouseover</span>

<!--11-->
<input type="text" class="textarea" onchange="inputT()">
</template>

    
<script>
const div = document.getElementById('MyDiv');
console.log(div);

const omon = document.querySelector('.MyName');
console.log(omon); // 'MyName' o'rniga 'omon'

const spans = document.querySelectorAll('span'); // 'span' qavs ichida va o'zgaruvchi nomini o'zgartirdim
console.log(spans);

const textContent1 = document.querySelector('.number'); // '12345' o'rniga 'number' sinfini ishlatdim
textContent1.textContent = ('qwerty'); // '12345.1234' o'rniga 'textContent.textContent'

const innerHtml1 = document.querySelector('.html');
innerHtml1.innerHTML = '<b>innerHtml</b>'; // 'html' o'rniga 'innerHTML' va sintaksisni to'g'riladim

const span1 = document.querySelector('span'); // 'span' qavs ichida
span1.style.backgroundColor = 'blue';

const setAttribute1 = document.getElementById('setAttribute1'); // ID selektoridan nuqtani olib tashladim
setAttribute1.setAttribute('id', 'setattribute'); // 'setatribute' o'rniga 'setattribute'

const getAttribute = document.querySelector('.imghref');
var val = getAttribute.getAttribute('href');
console.log(val);

const btn = document.querySelector('.onClick');
btn.addEventListener('click', deleteList);

function deleteList() {
    let div = document.getElementById('button1');
    div.textContent = 'Xayr'; // '.value' o'rniga '.textContent'
}

const mouseover = document.querySelector('.mouseover'); // 'list-color' o'rniga 'mouseover'
mouseover.addEventListener('mouseover', mouseoverClick);

function mouseoverClick() {
    const li = document.createElement('li'); // <li> elementini yaratdim
    li.innerHTML = 'Red'; // 'innerHTML' dan oddiy matnga o'zgartirdim
    document.querySelector('.list-color').appendChild(li); // '.list-color' selektorini qo'shdim
}

const input = document.querySelector('.textarea');

function inputT() {
    const input1 = document.createElement('p');
    input1.innerHTML = input.value;
    document.body.appendChild(input1); // 'input1' o'zgaruvchisini qo'shdim
}

input.addEventListener('change', inputT); // 'click' o'rniga 'change' eventini ishlatdim
</script>
