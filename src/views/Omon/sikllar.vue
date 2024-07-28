<template>
    <div>
      <!-- for sikli -->
      <h2>for Sikli:</h2>
      <ul>
        <li v-for="index in 5" :key="index">{{ index - 1 }}</li>
      </ul>
  
      <!-- while sikli -->
      <h2>while Sikli:</h2>
      <ul>
        <li v-for="index in computedIndices" :key="index">{{ index }}</li>
      </ul>
  
      <!-- do...while sikli -->
      <h2>do...while Sikli:</h2>
      <ul>
        <li v-for="index in computedDoWhileIndices" :key="index">{{ index }}</li>
      </ul>
  
      <!-- for...in sikli -->
      <h2>for...in Sikli:</h2>
      <ul>
        <li v-for="(value, key) in obj" :key="key">{{ key }}: {{ value }}</li>
      </ul>
  
      <!-- for...of sikli -->
      <h2>for...of Sikli:</h2>
      <ul>
        <li v-for="value in arr" :key="value">{{ value }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const computedIndices = computed(() => {
    const indices = [];
    let i = 0;
    while (i < 5) {
      indices.push(i);
      i++;
    }
    return indices;
  });
  
  const computedDoWhileIndices = computed(() => {
    const indices = [];
    let i = 0;
    do {
      indices.push(i);
      i++;
    } while (i < 5);
    return indices;
  });
  
  const obj = { a: 1, b: 2, c: 3 };
  const arr = [10, 20, 30];
  </script>
  