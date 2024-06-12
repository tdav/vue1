<template>
  <div class="container-fluid p-0 qwer overflow-hidden" style="background-color: #212120; height: 100vh;  z-index: 1;">
    <div class="p-4 pb-3 mt-3">
      <img src="../assets/img/Logo.png" alt="logo" class="img-logo123 p-0">
    </div>
    <div class="list-group ps-4 rtyu">
      <a href="#" @click="menuSelect(1)" :class="[ menuSelectActiveIndex == 1 ? 'menuSelectActive' : '']" class="list-group-item list-group-item-action cvbn">
        <img src="../assets/img/home.png" alt="1"
          style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
        <p class="mnb">Home</p>
        <span class="olol float-end"></span>
      </a>

      <a href="#" @click="menuSelect(2)" :class="[ menuSelectActiveIndex == 2 ? 'menuSelectActive' : '']" class="list-group-item list-group-item-action cvbn">
        <img src="../assets/img/discover.png" alt="2"
          style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
        <p>Discover</p>
        <span class="olol float-end"></span>
      </a>

      <a href="#" @click="menuSelect(3)" :class="[ menuSelectActiveIndex == 3 ? 'menuSelectActive' : '']" class="list-group-item list-group-item-action cvbn">
        <img src="../assets/img/radio.png" alt="3"
          style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
        <p>Radio</p>
        <span class="olol float-end"></span>
      </a>



      <a href="#" @click="menuSelect(4)" :class="[ menuSelectActiveIndex == 4 ? 'menuSelectActive' : '']" class="list-group-item list-group-item-action cvbn">
        <img src="../assets/img/albums.png" alt="4"
          style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
        <p>Albums</p>
        <span class="olol float-end"></span>
      </a>


      <a href="#" @click="menuSelect(5)" :class="[ menuSelectActiveIndex == 5 ? 'menuSelectActive' : '']" class="list-group-item list-group-item-action cvbn">
        <img src="../assets/img/podcast.png" alt="5"
          style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
        <p>Podcast</p>
        <span class="olol float-end"></span>
      </a>
    </div>

    <p class="mt-2 ms-5"
      style="color: rgba(255, 255, 255, 0.72);  font-size: 12px; font-weight: 700; line-height: 16.39px; letter-spacing: 0.16em; text-align: left;">
      LIBRARY
    </p>

    <div class="list-group ps-4 rtyu">
      <a href="#" @click="menuSelect(6)" :class="[ menuSelectActiveIndex == 6 ? 'menuSelectActive' : '']" class="list-group-item list-group-item-action cvbn">
        <img src="../assets/img/music-square-add.png" alt="1"
          style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
        <p>Recently Added</p>
        <span class="olol float-end"></span>
      </a>

      <a href="#" @click="menuSelect(7)" :class="[ menuSelectActiveIndex == 7 ? 'menuSelectActive' : '']" class="list-group-item list-group-item-action cvbn">
        <img src="../assets/img/Favorite.png" alt="2"
          style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
        <p>Favorite Songs</p>
        <span class="olol float-end"></span>
      </a>

      <a href="#" @click="menuSelect(8)" :class="[ menuSelectActiveIndex == 8 ? 'menuSelectActive' : '']" class="list-group-item list-group-item-action cvbn">
        <img src="../assets/img/local.png" alt="3"
          style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
        <p>Local Files</p>
        <span class="olol float-end"></span>
      </a>
    </div>

    <p class="mt-4 ms-5"
      style="color: rgba(255, 255, 255, 0.72);  font-size: 12px; font-weight: 700; line-height: 16.39px; letter-spacing: 0.16em; text-align: left;">
      PLAYLIST
      <button
        style="width: 16px; height: 16px; top: 587px; left: 222px; gap: 0px; opacity: 0px; background-color: #212121; color:white;  margin-left: 5rem;"
        class="dfghjk">+</button>
    </p>

    <div class="list-group ps-4 rtyu">
      <a href="#" @click="menuSelect(9)" :class="[ menuSelectActiveIndex == 9 ? 'menuSelectActive' : '']" class="list-group-item list-group-item-action cvbn">
        <img src="../assets/img/playlist.png" alt="1"
          style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
        <p>Lo-fi Music</p>
        <span class="olol float-end"></span>
      </a>

      <a href="#" @click="menuSelect(10)" :class="[ menuSelectActiveIndex == 10 ? 'menuSelectActive' : '']" class="list-group-item list-group-item-action cvbn">
        <img src="../assets/img/playlist.png" alt="1"
          style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
        <p>Best of Jon Bovi</p>
        <span class="olol float-end"></span>
      </a>

      <a href="#" @click="menuSelect(11)" :class="[ menuSelectActiveIndex == 11 ? 'menuSelectActive' : '']" class="list-group-item list-group-item-action cvbn">
        <img src="../assets/img/playlist.png" alt="1"
          style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
        <p>Best of Jon Mayer</p>
        <span class="olol float-end"></span>
      </a>
      <a style="height: 100px;"></a>

    </div>
  </div>
</template>




<script setup>

import { ref } from 'vue';


let menuSelectActiveIndex = ref(1);

function menuSelect(index) {
  menuSelectActiveIndex.value = index;
}

</script>

<style scoped>
.img-logo123 {
  padding-top: 2.2rem;
  padding-left: 1.2rem;

}

.menuSelectActive{
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
  border-right: 4px solid  rgba(29, 185, 84, 1);
  color: white;
}
/* 
.qwer {
  height: 139vh;
} */

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