<template>
    <div>
      <div class="iwuc">
        <p>Recent Played</p>
        <a class="uwhiu" style="text-decoration: none">See All</a>
      </div> 
      <MusicRightComponents />
    </div>
</template>

<script setup>
import { ref, defineProps,   onMounted } from 'vue';

import MusicRightComponents from '@/components/Music/MusicComponents/MusicRightComponents.vue'

const props = defineProps({ item: {} });

const myPath = ref("");
onMounted(() => {
    // myPath.value =  props.item.imgUrl.value;

})

</script>

<style scoped>
.aju {
  color: #ffffff7c;
  font-size: 11px;
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
  /* bottom: 30px; */
}

.music-play {
  position: relative;
  bottom: 30px;
}

.uwhiu {
  float: right;
  color: green;
  text-decoration: none;
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

.musicright {
  position: relative;
  bottom: 200px;
}
</style>