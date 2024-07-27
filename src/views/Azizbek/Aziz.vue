<template>
    <h1 class="text-center">Azizbek Developer</h1>

    <h1 class="text-primary">Operatorlar</h1>
    <h3>Арифметик операторлар: + - * / %</h3>
    <h3>Таққослаш операторлари: == === != < > <= >= </h3>
    <h3>Мантиқий операторлар: || && !</h3>
    <h3>Тенглик ва таъриф операторлари: = += -= *= /= </h3>
</template>

<script setup>

// Арифметик операторлар

// +

let a1 = 5;
let b1 = 3;
let sum1 = a1 + b1;

console.log(`
    
        +

    let a1 = 5;
    let b1 = 3;
    let sum1 = a1 + b1; 
`);

console.log(`Result ${sum1}`);

// -

let a2 = 5;
let b2 = 3;
let sum2 = a2 - b2;


console.log(`
    
        -

    let a2 = 5;
    let b2 = 3;
    let sum2 = a2 - b2; 
`);

console.log(`Result ${sum2}`);

// * 

let a3 = 5;
let b3 = 3;
let sum3 = a3 * b3; 

console.log(`
    
        *

    let a3 = 5;
    let b3 = 3;
    let sum3 = a3 * b3; 
`);

console.log(`Result ${sum3}`);

// /

let a4 = 5;
let b4 = 3;
let sum4 = a4 / b4;

console.log(`
    
        / 

    let a4 = 5;
    let b4 = 3;
    let sum1 = a4 / b4; 
`);

console.log(`Result ${sum4}`);


// %

let a5 = 5;
let b5 = 3;
let sum5 = a5 % b5;

console.log(`
    
        %

    let a5 = 5;
    let b5 = 3;
    let sum1 = a5 + b5; 
`);

console.log(`Result ${sum5}`);

// Таққослаш операторлари

// >

let c1 = 5;
let c2 = 3;
let res1 = c1 > c2;

console.log(`
    
        >

    let c1 = 5;
    let c1 = 3;
    let sum1 = c1 > c1; 
`);

console.log(`Result ${res1}`);

// < 

let d1 = 5;
let d2 = 3;
let res2 = d1 < d2;

console.log(`
    
        <

    let d1 = 5;
    let d2 = 3;
    let res2 = d1 < d2; 
`);

console.log(`Result ${res2}`);

// => 

let e1 = 5;
let e2 = 5;
let res3 = e1 <= e2;

console.log(`
    
        <=

    let e1 = 5;
    let e2 = 3;
    let res3 = e1 <= e2; 
`);

console.log(`Result ${res3}`);


// => 

let f1 = 5;
let f2 = 3;
let res4 = f1 = f2;

console.log(`
    
        =>

    let f1 = 5;
    let f2 = 3;
    let res4 = f1 => f2; 
`);

console.log(`Result ${res4}`);

// == 

let z1 = 5;
let z2 = "5";
let res5 = z1 == z2;

console.log(`
    
        ==

    let z1 = 5;
    let z2 = 3;
    let res5 = z1 == z2; 
`);

console.log(`Result ${res5}`);

// === 

let w1 = "5";
let w2 = "5";
let res6 = w1 === w2;

console.log(`
    
        ===

    let w1 = 5;
    let w2 = 3;
    let res6 = w1 === w2; 
`);

console.log(`Result ${res6}`);

// != 

let q1 = 4;
let q2 = 3;
let res7 = q1 != q2;

console.log(`
    
        !=

    let q1 = 5;
    let q2 = 3;
    let res2 = q1 <= q2; 
`);

console.log(`Result ${res7}`);

// errors 

// // !== 

// let r1 = 2;
// let r2 = "2";
// let res8 = r1 !== r2;

// console.log(`
    
//         !==

//     let e1 = 5;
//     let e2 = 3;
//     let res2 = e1 !== e2; 
// `);

// console.log(`Result ${res8}`);



// console.log(`
    
//         !===

//     let t1 = 5;
//     let t2 = 3;
//     let res2 = t1 !=== t2; 
// `);

// console.log(`Result ${res8}`);


</script>

<style scoped>

</style> 