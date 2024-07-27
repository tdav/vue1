<template>
  <div>
    <h1>Hello Function</h1>
  </div>
</template>

<script setup>

// Оддий функция
function add(a, b) {
    return a + b;
}

// Ифодали функция
const subtract = function(a, b) {
    return a - b;
};

// Ўқ функцияси
const multiply = (a, b) => {
    return a * b;
};

// Қисқа ёзилган ўқ функцияси
const divide = (a, b) => a / b;




function greet(greeting = "Hello", ...names) {
    if (names.length === 0) {
        console.log(`${greeting}, Guest!`);
    } else {
        names.forEach(name => {
            console.log(`${greeting}, ${name}!`);
        });
    }
}

// Функцияни чақириш
greet(); // Hello, Guest!
greet("Hi"); // Hi, Guest!
greet("Hey", "Alice", "Bob", "Charlie"); 
// Hey, Alice!
// Hey, Bob!
// Hey, Charlie!






// Функцияларни чақириш ва натижаларини консольга чиқариш
console.log("Qo'shish (2 + 3):", add(2, 3));         // 5
console.log("Ayirish (5 - 2):", subtract(5, 2)); // 3
console.log("Ko'paytirish (4 * 5):", multiply(4, 5)); // 20
console.log("Bo'lish (10 / 2):", divide(10, 2));    // 5

</script>
