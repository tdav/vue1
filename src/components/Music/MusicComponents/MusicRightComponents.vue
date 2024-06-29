<template>
  <div
    v-for="it in albomlist"
    :key="it.id"
    class="row music-play"
    style="height: 60px"
  >
    <img
      class="col-1"
      style="height: 45px; width: 65px"
      :src="it.imgUrl"
      alt=""
    />
    <div class="col-8 p-0 m-0 text-center">
      <div class="row">
        <p
          class="m-0 p-0 col-6 mt-3"
          style="color: white; float: left; font-size: 14px; display: inline-block"
        >
          {{ it.albomName }}
        </p>

        <p
          class="m-0 col-6 mt-3"
          style="color: white; float: right; font-size: 12px; display: inline-block"
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
