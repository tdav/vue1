<template>
    <div>
      <div v-for="(item, index) in items" :key="index">
        <input type="checkbox" v-model="checkedItems[index]">
        <label>{{ item }}</label>
        <button @click="removeItem(index)">O'chirish</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const items = ref(['Item 1', 'Item 2', 'Item 3']);
  const checkedItems = ref([false, false, false]);
  
  const removeItem = (index) => {
    items.value.splice(index, 1);
    checkedItems.value.splice(index, 1);
  };
  </script>
  