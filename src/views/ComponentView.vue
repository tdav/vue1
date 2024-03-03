<template>
  <div class="home">
    <h3>Component page</h3>
    <br>
    <br>
    <Component1 myvar="1"></Component1><br>
    <Component1 myvar="2"></Component1><br>
    <Component1 myvar="3"></Component1><br>
  </div>
</template>

<script setup>
import Component1 from '@/components/Component1.vue'
</script>
