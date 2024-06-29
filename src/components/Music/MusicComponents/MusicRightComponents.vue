<template>
  <div
    v-for="it in albomlist"
    :key="it.id"
    class="row music-play mb-3"
    style="height: 60px"
  >
    <img
        class="col-1"
        style="height: 45px; width: 65px"
        :src=" require(`../../../assets/img/${it.imgUrl}`)"
        alt="img"
    />

    <div class="col-8 p-0 m-0 text-start">
      <div class="row">
        <p
          class="m-0 p-0 ms-2"
          style="color: white; float: left; font-size: 14px; display: inline-block"
        >
          {{ it.albomName }}
        </p>

        <p
          class="m-0 p-0 ms-2"
          style="color: white; float: right; font-size: 12px; display: inline-block"
        >
          {{ it.actor }}
        </p>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script setup>
import albomlist from "../../../assets/jsonData/albomlist.json";
</script>
