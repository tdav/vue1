<template>
  <div
    v-for="it in albomlist"
    :key="it.id"
    class="row music-play mb-1"
    style="height: 55px"
  >
    <img
      class="col-1 ms-1"
      style="height: 45px; width: 65px"
      :src=" require(`../../../assets/img/${it.imgUrl}`)"
      alt="img"
    />

    <div class="col-8 p-0 text-start">
      <div class="row">
        <p
          class="m-0 p-0 ms-2"
          style="color: white;  font-size: 14px; display: inline-block"
        >
          {{ it.albomName }}
        </p>

        <p
          class="m-0 p-0 ms-2"
          style="color: white;  font-size: 12px; display: inline-block"
        >
          {{ it.actor }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

import albomlist from "../../../assets/jsonData/albomlist.json";

</script>