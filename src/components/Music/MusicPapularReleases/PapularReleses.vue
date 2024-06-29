<template>
    <div v-for="it in PopularReleasesMusic" :key="it.id" class="col-2" style="text-align: center;">  
        <img :src="require(it.imageUrl)" alt="" class="kdscb">
        <p>{{ it.name }}</p>
    </div>
    
</template>
<script setup>
import PopularReleasesMusic from '..//assets/jsonData/PopularReleasesMusic.json'
</script>