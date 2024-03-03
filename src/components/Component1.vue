<template>
  <div class="hello">
    
    <h3>Component ичидан</h3>
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script setup>

import { ref } from 'vue';
let msg = ref("comp msg")
 
</script>

