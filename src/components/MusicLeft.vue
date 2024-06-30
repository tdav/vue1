<template>
  <div>
    <button @click="toggleOffcanvas" class="open-btn">Menu</button>
    <div :class="['offcanvas', { 'show': isOffcanvasOpen }]">
      <button @click="toggleOffcanvas" class="close-btn">&times;</button>
      <div v-for="it in MenuList" class="list-group" :key="it.id" style="background-color: #1c1c1c; margin-top:-5px;">
        <MusicLibrary :data="it">
          <button v-if="it.title == 'PLAYLIST'" class="dfghjk myTitleBtn">+</button>
        </MusicLibrary>
      </div>
    </div>
    <div :class="['overlay', { 'show': isOffcanvasOpen }]" @click="toggleOffcanvas"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MenuList from '../assets/jsonData/menulist.json';
import MusicLibrary from './Music/MusicLeft/MusicLibrary';

const isOffcanvasOpen = ref(false);

function toggleOffcanvas() {
  isOffcanvasOpen.value = !isOffcanvasOpen.value;
}
</script>

<style scoped>
</style>
