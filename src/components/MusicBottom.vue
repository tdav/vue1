<template>
    <div class="container-fluid container-lg container-xl container-xxl bottomnavbar p-0">
        <div class="row">
            <Range></Range>
        </div>
        <div class="row" >
            <Play></Play>
        </div>
    </div>

</template>


<script setup>
import Play from "../components/Music/MusicPlay/Play.vue"
import Range from "../components/Music/MusicRange/Range.vue"
</script>

<style scoped>
 
.hiuiu {
    appearance: none;
    height: 5px;
    background-color: #9c9c9cd2;
    float: right;
    border-radius: 20px;
    margin-top: 20px
}
.jabx:active{
    color: rgb(66, 66, 255);
}

.range::-webkit-slider-thumb {
    -webkit-appearance: none;
    box-shadow: -100% 0 0 100% white;
    width: 5px;
    height: 5px;
    background-color: white;
    border-radius: 50px;
}

.eovi:active{
    color: rgb(66, 66, 255);
}

.kbk {
    width: 100%;
    appearance: none;
    height: 5px;
    background-color: #9c9c9cd2;
}

.bottomnavbar {
    height: 100px;
    position: fixed;
    bottom: 0;
    background-color: #3a3a3a3f;
    backdrop-filter: blur(15px);
}
</style>