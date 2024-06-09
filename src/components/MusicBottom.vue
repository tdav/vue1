<template>
    <div class="container bottomnavbar col-12">
        <div class="row">
            <Range></Range>
        </div>
        <div class="row">
            <Play></Play>
        </div>
    </div>

</template>


<script setup>
import Play from "../components/Music/MusicPlay/Play.vue"
import Range from "../components/Music/MusicRange/Range.vue"
</script>

<style scoped>
.bottomnavbar {
    height: 100px;
    position: fixed;
    bottom: 0;
    background-color: #3a3a3a3f;
    backdrop-filter: blur(15px);
}
</style>