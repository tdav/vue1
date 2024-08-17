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
        <span>LAmborgini</span>
        <span>Rolse-royse</span>
        <span>Nexia2</span>
    </div>
<!--4-->
        <h2 class="12345">1234</h2>
 <!--5-->
 <p class="html">innerHtml</p>
 <!--6-->
<!--tepada-->
<!--7-->
<div id="setAttribute1">omon</div>
<!--8-->
<a class="imghref" href="1234"></a>
<!--9-->
<div id="button1">Salom</div>
<button class="btn btn-success onClick">  change</button>
<!--10-->
<span class="btn btn-sucses mouseover" >
        mouseover
</span>

<!--11-->
<input type="text" class="textarea" onchange="inputT()">

</template>

<script setup>


const div = document.getElementById('MyDiv');
console.log(div);

const omon = document.querySelector('.MyName');
console.log(MyName);

const span = document.querySelectorAll(span);
console.log(span);

const TextContent = document.querySelector('.12345')
12345.1234 = '4321'

const innerhtml1 = document.querySelector('.html')
innerhtml1.html =<b>innerhtml1</b>

const span1 = document.querySelector(span);
span1.style.backgroundColor = 'blue'


const setAttribute1 = document.getElementById('.setAttribute1')
setAttribute1.setAttribute(id, 'setatribute');

const getAttribute = document.querySelector('.imghref');

var val = getAttribute.getAttribute('href');
console.log(val);


const btn = document.querySelector('.onClick');
    btn.addEventListener('click', deleteList)

    function deleteList() {
        var div = document.getElementById('button1')
        div.value = 'Xayr';
    }

    const mouseover = document.querySelector('.list-color');
    mouseover.addEventListener('mouseover', addLI)

    
    const colourLI = document.querySelector('.list-color');

    function addLI()
    {

    }


    function mouseoverClick() {

        const li = document.querySelector('li');
        li.innerHTML = `<li>Red</li>`
        colourLI.appendChild(li)

    }


    const input = document.querySelector('.textarea');

    function inputT() {
        const input1 = document.createElement('p');

        input1.innerHTML = input.value
        document.body.appendChild('input1')
    }

    input.addEventListener('click', inputT)

</script>