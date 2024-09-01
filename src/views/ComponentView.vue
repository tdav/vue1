<template>
  <div class="home">
    <h3>Component page</h3>
    <br>

    <MyFormControl :vars="{title:'HHHHHHH', email: 'tdavron@gmail.com', password: 'pa1', chack: true }">
    <button class="btn btn-danger">JJJJJJ</button>
    </MyFormControl>
     

    <br>
    <Component1 myvar="1"></Component1><br>
    <Component1 myvar="2"></Component1><br>
    <Component1 myvar="3"></Component1><br>
  </div>
</template>

<script setup>
import Component1 from '@/components/Component1.vue'
import MyFormControl from '@/components/MyFormControl.vue'
</script>
