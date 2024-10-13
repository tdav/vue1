<template>
    <form @submit.prevent="search">
      <div>
        <label>User</label>
        <input v-model="formData.user" type="text" />
      </div>
      <button type="submit">Search</button>
    </form>
  </template>
  
  <script setup>
  import { reactive, defineEmits } from 'vue';
  
  const emit = defineEmits();
  
  const formData = reactive({
    user: '',
  });
  
  const search = () => {
    emit('search', { ...formData });
    formData.user = '';
  };
  </script>
  