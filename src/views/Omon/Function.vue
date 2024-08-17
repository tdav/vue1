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
const subtract = function (a, b) {
    return a - b;
};

// Ўқ функцияси
const multiply = (a, b) => {
    return a * b;
};

let  addFun = (a, b) => {
    return a + b
}


var obj = {}
obj.func=(a, b) => {
    return a + b
}


const fnOyna = (a, b) => {
    //return a * b;

    text.css = 'active'
};


let sum= fnOyna(19,2);


function multiply11(a,b) {
    return a * b;
};


var funcList = [];
funcList['m'] = multiply;
funcList['oyna'] = fnOyna;


funcList['motor']();
funcList['oyna']();


function Stanok(...list) {

    for (let i = 0; i < list.length; i++) {
        const el = list[i];


        fnOyna(1,2)
        fnOyna(2,2,2)


        switch (typeof (el)) {
            case 'motor':
                funcList['m'](el);
                motorFunc(el);

                break;

            case 'oyna':
                funcList['oyna'](el);
                oynaFunc(el)

                break;

            default:
                break;
        }


    }
}



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




function fibonacci(n) {
    // Agar n 0 yoki manfiy bo'lsa, 0 qaytariladi
    if (n <= 0) return 0;

    // Agar n 1 bo'lsa, 1 qaytariladi (Fibonacci ketma-ketligining birinchi elementi)
    if (n === 1) return 1;

    // Aks holda, fibonacci(n - 1) va fibonacci(n - 2) ni qo'shib qaytaradi
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));  // Natija: 55




function hamyon(a, b, ...rest) {
    console.log(a, b); // 1 2
    console.log(rest); // [3, 4, 5]
}

hamyon(1, 2, 3, 4, 5);

</script>
