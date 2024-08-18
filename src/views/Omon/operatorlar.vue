<template>
    <div>
        <h1>Salom Vue3</h1>
    </div>
</template>

<script setup>
let marjon = 10, umida = 20
let aziz = 85, jasur = 65
let olmos = 20, murod = 5
let bohodir = 60, omon = 20 
let o = 20, d = 6

let a = 5,  b = 10,  c = "5"
const z = a

const yosh = 10;
const n = yosh > 18 // false
const m = yosh < 20 //true

// Arifmetik operatorlar

console.log(`marjon + umida ${marjon + umida}`);

console.log(`aziz - jasur  ${aziz - jasur}`);

console.log(`olmos * murod  ${olmos * murod}`);

console.log(`bohodir / omon  ${bohodir / omon}`);

console.log(`o % d 

 ${o % d}`);

// Taqqoslash operatorlari
console.log(`a = 5, c = "5"`);
console.log(`a == c: ${a == c}`); // true
console.log(`a === c: ${a === c}`); // false
console.log(`a != b: ${a != b}`); // true
console.log(`a !== z: ${a !== z}`); // false
console.log(`a < b: ${a < b}`); // true
console.log(`a > b: ${a > b}`); // false
console.log(`a <= b: ${a <= b}`); // true
console.log(`a >= b: ${a >= b}`); // false

// Logik operatorlar
console.log(`n (yosh > 18) = ${n}`);
console.log(`m (yosh < 20) = ${m}`);
console.log(`n && m: ${n && m}`); // false
console.log(`n || m: ${n || m}`); // true 

// Negatsiya
console.log(`!n: ${!n}`); // true
console.log(`!m: ${!m}`); // false
</script>
