<template>
  <div class="container-fluid p-0 qwer overflow-hidden" style="background-color: #212120; height: 100vh;  z-index: 1;">
    <div class="p-4 pb-3 mt-3">
      <img src="../assets/img/Logo.png" alt="logo" class="img-logo123 p-0">
    </div>


    <div v-for="it in MenuList" class="list-group ps-4 rtyu">
      <MusicLibrary :data="it"></MusicLibrary>
    </div>
  
  </div>

</template>


<script setup>

import { onBeforeMount, reactive } from 'vue';
import MenuList from '../assets/jsonData/menulist.json'
import MusicLibrary from './Music/MusicLeft/MusicLibrary' 
 


// import { ref } from 'vue';
// let menuSelectActiveIndex = ref(1);

// function menuSelect(index) {
//   menuSelectActiveIndex.value = index;
// }



</script>