<template>
    <h1>New Operators</h1>

    <pre>
        1. Arithmetic Operators:

        + : Qo‘shish
        - : Ayirish
        * : Ko‘paytirish
        / : Bo‘lish
        % : Qoldiq
        ** : Darajaga ko‘tarish (ES2016)
        
        2. Assignment Operators:

        = : Tayinish
        += : Qo‘shish va tayinish
        -= : Ayirish va tayinish
        *= : Ko‘paytirish va tayinish
        /= : Bo‘lish va tayinish
        %= : Qoldiq va tayinish
        **= : Darajaga ko‘tarish va tayinish
        Amaliy qo‘llanilishi:

       
        3. Comparison Operators:
        Nazariy jihatlari:

        == : Teng
        === : Qattiq teng
        != : Teng emas
        !== : Qattiq teng emas
        > : Katta
        < : Kichik
        >= : Katta yoki teng
        <= : Kichik yoki teng
        Amaliy qo‘llanilishi:

        javascript
        Copy code
        console.log(5 == '5');    // true
        console.log(5 === '5');   // false
        console.log(5 != '5');    // false
        console.log(5 !== '5');   // true
        console.log(5 > 3);       // true
        console.log(5 < 3);       // false
        console.log(5 >= 5);      // true
        console.log(5 <= 3);      // false
        4. Logical Operators:
        Nazariy jihatlari:

        && : Mantiqiy VA
        || : Mantiqiy YOKI
        ! : Mantiqiy EMAS
        Amaliy qo‘llanilishi:

        javascript
        Copy code
        console.log(true && false);  // false
        console.log(true || false);  // true
        console.log(!true);          // false
        5. Bitwise Operators:
        Nazariy jihatlari:

        & : VA
        | : YOKI
        ^ : XOR (Eksklyuziv YOKI)
        ~ : EMAS
        << : Chapga siljitish
        >> : O‘ngga siljitish
        >>> : Nolga to‘ldirib o‘ngga siljitish
        Amaliy qo‘llanilishi:

        javascript
        Copy code
        console.log(5 & 1);  // 1 (0101 & 0001)
        console.log(5 | 1);  // 5 (0101 | 0001)
        console.log(5 ^ 1);  // 4 (0101 ^ 0001)
        console.log(~5);     // -6 (~0101)
        console.log(5 << 1); // 10 (0101 << 1)
        console.log(5 >> 1); // 2 (0101 >> 1)
        console.log(5 >>> 1);// 2 (0101 >>> 1)
        6. String Operators:
        Nazariy jihatlari:

        + : Birlashtirish
        += : Birlashtirish va tayinish
        Amaliy qo‘llanilishi:

        javascript
        Copy code
        let str = "Hello, " + "World!";  // "Hello, World!"
        str += " How are you?";          // "Hello, World! How are you?"

        console.log(str);
        7. Conditional (Ternary) Operator:
        Nazariy jihatlari:

        condition ? expr1 : expr2 : Shartli operator
        Amaliy qo‘llanilishi:

        javascript
        Copy code
        let age = 20;
        let canVote = (age >= 18) ? "Yes" : "No";  // "Yes"

        console.log(canVote);
        8. Type Operators:
        Nazariy jihatlari:

        typeof : O‘zgaruvchi turini qaytaradi
        instanceof : Ob’ekt turini tekshiradi
        void : Ifodani baholaydi va qiymatni qaytarmaydi
        delete : Ob’ekt mulkini o‘chiradi
        Amaliy qo‘llanilishi:

        javascript
        Copy code
        console.log(typeof 123);             // "number"
        console.log(typeof "Hello");         // "string"
        console.log(typeof true);            // "boolean"
        console.log(typeof {});              // "object"
        console.log(typeof undefined);       // "undefined"
        console.log(typeof function(){});    // "function"
        console.log([] instanceof Array);    // true
        console.log({} instanceof Object);   // true
        9. Unary Operators:
        Nazariy jihatlari:

        + : Unary plus
        - : Unary minus
        ++ : Increment (Oshirish)
        -- : Decrement (Kamaytirish)
        Amaliy qo‘llanilishi:

        javascript
        Copy code
        let a = 10;
        a++;        // 11
        console.log(a); // 11
        a--;        // 10
        console.log(a); // 10

        let b = -a; // -10
        console.log(b); // -10

        let c = +b; // -10
        console.log(c); // -10
        10. Relational Operators:
        Nazariy jihatlari:

        in : Belgilangan mulk ob’ektda mavjudligini qaytaradi
        instanceof : Ob’ekt berilgan ob’ekt turiga tegishli ekanligini tekshiradi
        Amaliy qo‘llanilishi:

        javascript
        Copy code
        let obj = { name: "Alice", age: 25 };
        console.log('name' in obj);        // true
        console.log('gender' in obj);      // false

        let arr = [1, 2, 3];
        console.log(2 in arr);             // true (indeksni tekshiradi)
        console.log('length' in arr);      // true (mulkni tekshiradi)

        console.log(obj instanceof Object); // true
        console.log(arr instanceof Array);  // true
        Bu misollar JavaScript operatorlari nazariy va amaliy jihatdan qanday ishlatilishini ko‘rsatadi.


    </pre>
</template>

<script setup>

console.log(`1.Arithmetic Operators`);

let a = 5;
let b = 2;

console.log(`let a = 5`);
console.log(`let b = 2`);

let addition = a + b;         // 7
console.log(`let addition = a + b`);
console.log(addition);
let subtraction = a - b;      // 3
console.log(`let subtraction = a - b`);
console.log(subtraction);
let multiplication = a * b;   // 10
console.log(`let multiplication = a * b`);
console.log(multiplication);
let division = a / b;         // 2.5
console.log(`let division = a / b;`);
console.log(division);
let modulus = a % b;          // 1
console.log(`let modulus = a % b`);
console.log(modulus);
let exponentiation = a ** b;  // 25
console.log(`let exponentiation = a ** b`);
console.log(exponentiation);

console.log(addition, subtraction, multiplication, division, modulus, exponentiation);

console.log(`2. Assignment Operators`);

let x = 10;
console.log(`let x = 10`);
x += 5;  // x = x + 5; x = 15
console.log(`x += 5`);
console.log(x);
x -= 3;  // x = x - 3; x = 12
console.log(`x -= 3`);
console.log(x);
x *= 2;  // x = x * 2; x = 24
console.log(`x *= 2`);
console.log(x);
x /= 4;  // x = x / 4; x = 6
console.log(`x /= 4`);
console.log(x);
x %= 5;  // x = x % 5; x = 1
console.log(`x %= 5`);
console.log(x);
x **= 3; // x = x ** 3; x = 1
console.log(`x **= 3`);
console.log(x);

console.log(x);

</script>