<script setup>
import { onBeforeMount, reactive } from 'vue';
import { replaceArray, getAssetImg } from '@/plugins/services';

const popularReleasesMusic = reactive([])

onBeforeMount(async () => {
    const _popularReleasesMusic = await fetch("popular-releases-music.json").then(res => res?.json())
    replaceArray(popularReleasesMusic, _popularReleasesMusic)
})
</script>

<template>
    <div
        v-for="it in popularReleasesMusic"
        :key="it.id"
        class="col-2"
        style="text-align: center;"
    >
        <img
            :src="getAssetImg(it.imageUrl)"
            alt=""
            class="_img"
        >
        <p>{{ it.name }}</p>
    </div>
</template>

<style lang="scss" scoped>
._img {
    width: 100%;
    object-fit: cover;
}
</style>