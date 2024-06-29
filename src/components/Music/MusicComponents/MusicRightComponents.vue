<template>
    <div v-for="it in albomlist" :key="it.id" class="row music-play" style="height: 60px">
        <img
          class="col-1"
          style="height: 45px; width: 65px"
          :src="require(it.imageUrl)"
          alt=""
        >
        <img :src="require(it.imageUrl)" alt="" class="kdscb">
        <div class="col-8 p-0 m-0 text-center">
          <p class="m-0 p-0 me-2 owd">{{ it.albomName }}</p>
          <p class="m-0 m mt-3 me-2 owdg ">{{ it.actor }}</p>
        </div>
      </div>
</template>
<script setup>
import albomlist from '../../../assets/jsonData/albomlist.json'
</script>