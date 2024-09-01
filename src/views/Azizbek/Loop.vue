<template>
  <div>
    <h1>Loop</h1>

    <h3 class="text-danger">1. For Loop</h3>

    <p class="text-success">
      For loop eng ko'p ishlatiladigan looplardan biridir. U kod blokini aniq
      miqdorda bajaradi. For loopning asosiy afzalliklaridan biri uning yuqori
      darajadagi nazoratni taqdim etishidir. Bu loop, o'zgaruvchini boshlash,
      shartni tekshirish, va increment/decrementni o'z ichiga olgan uchta
      qismdan tashkil topgan.
    </p>

    <h2>Sintaksis: | Syntax</h2>

    <pre class="d-block bg-dark text-info">

      for (initialization; condition; increment) {
        // code to be executed
      }
      </pre
    >

    <h2>Misol | Example</h2>

    <pre class="d-block bg-dark text-info">

      for (let i = 0; i &lt; 5; i++) {
        console.log(i);
      }
      </pre
    >

    <h3>Output | Chiqish</h3>

    <ul class="d-block bg-dark text-light">
      <li v-for="number in numbers" :key="number">{{ number }}</li>
    </ul>

    <ul>
      <li>Izoh | Comment</li>
      <li>
        <strong>Initialization:</strong> <code>let i = 0</code> - Bu yerda loop
        hisoblagichi <code>i</code> boshlanadi va boshlang'ich qiymat sifatida 0
        o'rnatiladi.
      </li>
      <li>
        <strong>Condition:</strong> <code>i &lt; 5</code> - Bu shart har bir
        iteratsiyada tekshiriladi. Agar <code>i</code> 5 dan kichik bo'lsa, kod
        blokini bajarishda davom etadi.
      </li>
      <li>
        <strong>Increment:</strong> <code>i++</code> - Har bir iteratsiyadan
        keyin hisoblagich <code>i</code> 1 ga oshiriladi.
      </li>
    </ul>

    <h3 class="text-danger">2. While Loop</h3>

    <p class="text-success">
      While loop berilgan shart true bo'lganida kod blokini bajaradi. Bu loop
      shart to'g'ri bo'lmaganida to'xtatiladi. Agar shart dastlabki qiymatda
      false bo'lsa, kod blokini hech qachon bajarilmasligi mumkin.
    </p>

    <h2>Sintaksis: | Syntax</h2>

    <pre class="d-block bg-dark text-info">


      while (condition) {
        // code to be executed
      }
      </pre
    >

    <h2>Misol | Example</h2>

    <pre class="d-block bg-dark text-info">

      let i = 0;
      while (i &lt; 5) {
        console.log(i);
        i++;
      }
      </pre
    >

    <h3>Output | Chiqish</h3>

    <ul class="d-block bg-dark text-light">
      <li v-for="number in numbers2" :key="number">{{ number }}</li>
    </ul>

    <ul>
      <li>Izoh | Comment</li>
      <li>
        <strong>Condition:</strong> <code>i &lt; 5</code> - Har bir iteratsiyada
        bu shart tekshiriladi. Agar <code>i</code> 5 dan kichik bo'lsa, kod
        blokini bajarishda davom etadi.
      </li>
    </ul>

    <h3 class="text-danger">3. Do...While Loop</h3>

    <p class="text-success">
      Do...while loop, while loopning o'zgarishi bo'lib, avval kod blokini
      bajaradi va keyin shartni tekshiradi. Bu loop kamida bir marta bajarilishi
      kafolatlanadi, chunki shartni tekshirishdan oldin kod blokini bajaradi.
    </p>

    <h2>Sintaksis: | Syntax</h2>

    <pre class="d-block bg-dark text-info">

      do {
        // code to be executed
      } while (condition);
      </pre
    >

    <h2>Misol | Example</h2>

    <pre class="d-block bg-dark text-info">

      let i = 0;
      do {
        console.log(i);
        i++;
      } while (i &lt; 5);

      
    </pre>

    <h3>Output | Chiqish</h3>

    <ul class="d-block bg-dark text-light">
      <li v-for="number in numbers3" :key="number">{{ number }}</li>
    </ul>

    <ul>
      <li>Izoh | Comment</li>
      <li>
        <strong>Do-While:</strong> Kod blokini birinchi bajaradi, so'ngra
        shartni tekshiradi. Shart true bo'lsa, kod blokini yana bajaradi. Agar
        shart dastlabki qiymatda false bo'lsa, loop faqat bir marta bajariladi.
      </li>
    </ul>

    <h3 class="text-danger">4. For...Of Loop</h3>

    <p class="text-success">
      For...of loop, ma'lum bir iterable (masalan, massiv) elementlarini qayta
      ishlash uchun ishlatiladi. Har bir iteratsiyada elementning qiymatini
      olish imkonini beradi va bu loop massivlar, stringlar, va boshqa iterable
      obyektlar bilan ishlashda juda qulaydir.
    </p>

    <h2>Sintaksis: | Syntax</h2>

    <pre class="d-block bg-dark text-info">
      for (const item of iterable) {
        // code to be executed
      }
      </pre
    >

    <h2>Misol | Example</h2>

    <pre class="d-block bg-dark text-info">
      const numbersArray = [1, 2, 3, 4, 5];
      for (const number of numbersArray) {
        console.log(number);
      }
      </pre
    >

    <h3>Output | Chiqish</h3>

    <ul class="d-block bg-dark text-light">
      <li v-for="number in numbersArray" :key="number">{{ number }}</li>
    </ul>

    <ul>
      <li>Izoh | Comment</li>
      <li>
        <strong>For...Of:</strong> Iterable (masalan, massiv) elementlarini
        to'g'ridan-to'g'ri olish uchun ishlatiladi. Bu loop har bir elementni
        qayta ishlash imkonini beradi, va iterator metodlaridan foydalanishga
        imkon beradi.
      </li>
    </ul>

    <h3 class="text-danger">5. For...In Loop</h3>

    <p class="text-success">
      For...in loop, obyektlar va massivlarning indekslarini yoki kalitlarini
      qayta ishlash uchun ishlatiladi. Obyektlarning kalitlarini, massivlarning
      indekslarini olish uchun foydalidir. Bu loop orqali obyektning barcha
      xususiyatlarini tekshirish va ulardan foydalanish mumkin.
    </p>

    <h2>Sintaksis: | Syntax</h2>

    <pre class="d-block bg-dark text-info">
      for (const key in object) {
        // code to be executed
      }
      </pre
    >

    <h2>Misol | Example</h2>

    <pre class="d-block bg-dark text-info">
      const person = { name: 'John', age: 30, city: 'New York' };
      for (const key in person) {
        console.log(key, person[key]);
      }
      </pre
    >

    <h3>Output | Chiqish</h3>

    <ul class="d-block bg-dark text-light">
      <li v-for="(value, key) in person" :key="key">{{ key }}: {{ value }}</li>
    </ul>

    <ul>
      <li>Izoh | Comment</li>
      <li>
        <strong>For...In:</strong> Obyektlarning kalitlarini olish uchun
        ishlatiladi. Har bir iteratsiyada kalit va uning qiymatini qaytaradi. Bu
        loop yordamida obyektning barcha xususiyatlarini ko'rib chiqish mumkin.
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define reactive data
const numbers = ref([0, 1, 2, 3, 4]);
const numbers2 = ref([0, 1, 2, 3, 4]);
const numbers3 = ref([0, 1, 2, 3, 4]);
const numbersArray = ref([1, 2, 3, 4, 5]);
const person = ref({ name: "John", age: 30, city: "New York" });
</script>
