<template>
    <div id="myDiv1" class="myClass">
        <h2 id="main-heading">Dom</h2>
    </div>

    <div>
        <p>Omon</p>
        <p>JAsur</p>
        <p>Aziz</p>
    </div>

    <div>
        <ul>
            <li>Damas</li>
            <li>Nexia2</li>
            <li>Gentra</li>
        </ul>
    </div>

    <div>
        <h1>{{ heading }}</h1>
        <button @click="changeHeading">Change</button>
    </div>

    <div class="mt-4">
        <p v-html="paragraphContent"></p>
        <button @click="changeContent">Change</button>
    </div>

    <div>
        <p >Bu yerda matn bor</p>
    </div>

    <div>
        <a  href="https://omon"></a>
        <p>: {{ hrefValue }}</p>
    </div>

    <h1 ref="heading1">Salom!</h1>
    <button ref="myButton">Change</button>

    <ul>
        <li :style="{ color: textColor }" @mouseover="changeColor('red')" @mouseleave="changeColor('black')">
            Mover
        </li>
    </ul>

    <div>
        <input v-model="text" placeholder="Yozing" type="text" />
        <p>{{ text }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

 

const changeHeading = () => {
    heading.value = 'Yangi';
};

const changeColor = (color) => {
    textColor.value = color;
};

const changeContent = () => {
    paragraphContent.value = "Matn o'zgardi!";
};

const changeMessage = () => {
    if (heading1.value) {
        heading1.value.textContent = 'Xayr!';
    }
};

onMounted(() => {
    
    var myDiv1 = document.getElementById('myDiv1');
    var h2 = document.querySelector("div.myClass > h2");



    if (link.value) {
        hrefValue.value = link.value.getAttribute('href');
    }

    if (myButton.value) {
        myButton.value.addEventListener('click', changeMessage);
    }



    var paragraph = document.getElementById('myDiv1');

    if (paragraph.value) {
        paragraph.value.setAttribute('title', 'Бу параграфнинг title атрибути');
    }

    const liElements = document.querySelectorAll('li');
    liElements.forEach(li => {
        console.log(li.textContent);
    });
});



</script>

<style>
li {
    color: red;
}

.myClass{
    color: aqua;
}
</style>
