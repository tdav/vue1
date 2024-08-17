<template>
<div>
    <h1 id="main-heading">Dom</h1>
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
    <p ref="paragraph">Bu yerda matn bor</p>
</div>

<div>
    <a ref="link" href="https://omon"></a>
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

<script>
import {
    ref,
    onMounted
} from 'vue';

export default {
    setup() {
        const heading = ref('Eski');
        const heading1 = ref(null);
        const myButton = ref(null);
        const paragraph = ref(null);
        const link = ref(null);
        const textColor = ref('black');
        const text = ref('');
        const paragraphContent = ref('Bu yerda matn yangilandi');
        const hrefValue = ref('');

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
            if (link.value) {
                hrefValue.value = link.value.getAttribute('href');
            }

            if (myButton.value) {
                myButton.value.addEventListener('click', changeMessage);
            }

            if (paragraph.value) {
                paragraph.value.setAttribute('title', 'Бу параграфнинг title атрибути');
            }

            const liElements = document.querySelectorAll('li');
            liElements.forEach(li => {
                console.log(li.textContent);
            });
        });

        return {
            heading,
            paragraphContent,
            hrefValue,
            heading1,
            myButton,
            paragraph,
            link,
            textColor,
            text,
            changeHeading,
            changeContent,
            changeColor
        };
    }
};
</script>

<style>
li {
    color: red;
}
</style>
