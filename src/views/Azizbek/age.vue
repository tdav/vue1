<template>
    <h1>Age</h1>
</template>
<script setup>

import { ref } from 'vue'

let year = prompt('Сколько тебе лет?');

alert(`Тебе ${2024 - year} age!`); 

</script>
