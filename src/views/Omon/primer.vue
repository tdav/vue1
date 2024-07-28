<template>
    <h1>Арифметик операторлар</h1>
  
    <table>
      <thead>
        <tr>
          <th>Оператор</th>
          <th>Маъноси</th>
          <th>Мисол</th>
          <th>Натижа</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>+</td>
          <td>Қўшиш</td>
          <td>{{ example1.a }} + {{ example1.b }}</td>
          <td>{{ example1.result }}</td>
        </tr>
        <tr>
          <td>-</td>
          <td>Айириш</td>
          <td>{{ example2.a }} - {{ example2.b }}</td>
          <td>{{ example2.result }}</td>
        </tr>
        <tr>
          <td>*</td>
          <td>Кўпайтириш</td>
          <td>{{ example3.a }} * {{ example3.b }}</td>
          <td>{{ example3.result }}</td>
        </tr>
        <tr>
          <td>/</td>
          <td>Бўлиш</td>
          <td>{{ example4.a }} / {{ example4.b }}</td>
          <td>{{ example4.result }}</td>
        </tr>
        <tr>
          <td>%</td>
          <td>Қолдиқ</td>
          <td>{{ example5.a }} % {{ example5.b }}</td>
          <td>{{ example5.result }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const example1 = ref({ a: 5, b: 3, result: 5 + 3 });
  const example2 = ref({ a: 10, b: 4, result: 10 - 4 });
  const example3 = ref({ a: 2, b: 6, result: 2 * 6 });
  const example4 = ref({ a: 15, b: 3, result: 15 / 3 });
  const example5 = ref({ a: 17, b: 5, result: 17 % 5 });
  
  </script>