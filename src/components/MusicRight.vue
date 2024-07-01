<template>
  <div class="container-fluid p-3" style="background-color: #1c1c1c; overflow-x: hidden; height: 90vh">
    <div class="p-0 m-0 row" style="height: 25px;">
      <div class="p-0 col-3" style="display: inline-block">
        <img src="../assets/img/music/Ellipse 1.png" alt="" />
      </div>
      <div class="p-0 px-3 col-8" style="display: inline-block; color: white; align-items: center">
        <p class="khbk p-0 m-0 mt-1">James Rodriguez</p>
        <p class="khbkk p-0 m-0">Premium</p>
      </div>
      <div class="p-0 m-0 col-1" style="display: inline-block">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-chevron-buttom mt-3" id="id" width="13" height="13"
          style="color: white" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
        </svg>
      </div>
    </div>
    <div>
      <div class="iwuc mt-5 ">
        <p style="margin-top:7px;">Fans Also Like</p>
        <a class="uwhiu">See All</a>
      </div>
      <div class="isucbk">
        <div class="javvdbxk p-3 pt-2">
          <h6>James Arthur</h6>
          <p>Artist</p>
        </div>
      </div>
    </div>

    <MusicRightAlbom :item="it"></MusicRightAlbom>
  </div>
</template>

<script setup>
import musicPlaylist from "../assets/jsonData/musicPlaylist.json";
import MusicRightAlbom from "../components/MusicRightAlbom.vue";
</script>

<style scoped>
.music-list {
  margin-top: 20px;
}

.aju {
  color: #ffffff7c;
  font-size: 11px;
}

.owd {
  color: white;
  font-size: 15px;
}

.owdg {
  color: #ffffff7c;
  font-size: 12px;
}

.jgvuv {
  transform: rotate(-90deg);
}

.javvdbxk {
  height: 70px;
  width: 100%;
  color: white;
  border-radius: 0 0 20px 20px;
  background-color: #3a3a3a3f;
  backdrop-filter: blur(15px);
  margin-top: 65%;
  display: inline-block;
}

.isucbk {
  height: 195px;
  width: 195px;
  position: relative;
  bottom: 30px;
  border-radius: 20px;
  background: url("../assets/img/music/Rectangle5.png");
}

.iwuc {
  color: white;
  width: 100%;
  position: relative;
  bottom: 30px;
}

.music-play {
  position: relative;
  bottom: 30px;
}

.uwhiu {
  float: right;
  color: green;
  text-decoration: none;
  margin-top: 7px;
}

.khbkk {
  font-size: 12px;
  display: block;
  color: #ffffff9d;
}

.khbk {
  font-size: 12px;
  display: block;
}
</style>
