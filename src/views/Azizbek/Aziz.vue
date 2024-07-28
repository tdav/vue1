<template>
    <h1 class="text-center">Azizbek Developer</h1>

    <h1 class="text-primary">Operatorlar</h1>
    <h3>Arifmetik operatorlar</h3>
    <h3>{{`${a1} + ${b1} = ${sum1}`}}</h3>
</template>

<script setup>

// +

let a1 = 5;
let b1 = 3;
let sum1 = a1 + b1;
console.log(sum1);

// -

let a2 = 5;
let b2 = 3;
let sum2 = a2 - b2;
console.log(sum2);



</script>

<style scoped>

</style> 