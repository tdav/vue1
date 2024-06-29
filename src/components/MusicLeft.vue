<template>
   
    <div v-for="it in MenuList" class="list-group">
      <MusicLibrary :data="it"> 
        <button v-if="it.title == 'PLAYLIST'" class="dfghjk myTitleBtn">+</button> 
      </MusicLibrary>
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

<style scoped>
.myTitleBtn {
    width: 16px;
    height: 16px;
    top: 587px;
    left: 222px;
    gap: 0px;
    opacity: 0px;
    background-color: #212121;
    color: white;
    margin-left: 5rem;
}

.img-logo123 {
  padding-top: 2.2rem;
  padding-left: 1.2rem;

}

.menuSelectActive{
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
  border-right: 4px solid  rgba(29, 185, 84, 1);
  color: white;
}

 

.cvbn {
  background-color: #212121;
  color: rgba(255, 255, 255, 0.64);
  border-left: none;
  border-bottom: none;
  border-top: none;
  display: inline-block;
  height: 38px;
  border-radius: 0px;

}

.cvbn:hover {
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
  color: white;
}

.cvbn:focus  {
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
  color: white;
}
 
.dfghjk:active {
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
  color: white;
}

.rtyu {
  border-radius: 0%;
}
</style>
