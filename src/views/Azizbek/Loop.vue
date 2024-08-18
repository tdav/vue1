<template>
    <div>
        <h1>Loop</h1>

        <h3 class="text-danger">1. For Loop</h3>

        <p class="text-success">
            For loop eng ko'p ishlatiladigan looplardan biridir. U kod blokini aniq miqdorda bajaradi.
        </p>

        <h2>Sintaksis: | Syntax</h2>

        <pre class="d-block bg-dark text-info">
        for (initialization; condition; increment) {
            // code to be executed
        }
        </pre>

        <h2>Misol | Example</h2>

        <pre class="d-block bg-dark text-info">
        for (let i = 0; i < 5; i++) {
            console.log(i);
        }
        </pre>

        <h3>Output | Chiqish</h3>

        <ul class="d-block bg-dark text-light">
            <li v-for="number in numbers" :key="number">{{ number }}</li>
        </ul>

        <ul>
            <li>Izoh | Comment</li>
            <li>
                Initialization: let i = 0 - bu yerda loop hisoblagichi i boshlanadi.
            </li>
            <li>
                Condition: i < 5 - bu shart i 5 dan kichik bo'lsa, loop ishlashda davom etadi.
            </li>
            <li>
                Increment: i++ - har bir iteratsiyadan keyin hisoblagich i 1 ga oshiriladi.
            </li>
        </ul>

        <h3 class="text-danger">2. While Loop</h3>
        
        <p class="text-success">
            while loop berilgan shart true bo'lganida kod blokini bajaradi.
        </p>

        <h2>Sintaksis: | Syntax</h2>

        <pre class="d-block bg-dark text-info">
            while (condition) {
                // code to be executed
            }
        </pre>

        <h2>Misol | Example</h2>

        <pre class="d-block bg-dark text-info">
            let i = 0;
            while (i < 5) {
                console.log(i);
                i++;
            }
        </pre>

        <h3>Output | Chiqish</h3>

        <ul class="d-block bg-dark text-light">
            <li v-for="number in numbers2" :key="number">{{ number }}</li>
        </ul>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

// 1. For Loop - Bu safar Vue bilan integratsiya qilingan holda

const numbers = ref([]);

for (let i = 0; i < 5; i++) {
    numbers.value.push(i);
}

//  2. While Loop - while loop berilgan shart true bo'lganida kod blokini bajaradi.

// Misol | Example

const numbers2 = ref([]);
let i = 0; // `i` ni `while` loopdan oldin aniqlash
while (i < 5) {
    numbers2.value.push(i);
    i++;
}
</script>

<style scoped>
/* CSS styling (agar kerak bo'lsa) */
</style>
