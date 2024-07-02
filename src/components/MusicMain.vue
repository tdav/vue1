<template>
    <div style="background-color: rgb(28 28 28); color: white; overflow-x: auto; max-height: 90vh;">
        <div class="uhsgno container-fluid" style="height: 100%; display: flex;">
            <div class="row px-4" style="height: 100%; display: flex; align-items: center;">
                <div class="col-md-6 col-sm-12 p-5 immm">
                    <div class="ifd p-0">
                        <p>Verified Artist</p>
                        <h1 style="font-size: revert-layer;">Ed Sheeran</h1>
                        <p class="d-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                class="bi bi-headphones mb-2" viewBox="0 0 16 16">
                                <path
                                    d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
                            </svg>
                            17.869.241.762 monthly listeners
                        </p>
                        <button class="butt dlfcbh me-2">PLAY</button>
                    
                        <button class="butt" :class="{ 'hdsvck': isPlayin, 'hdsvckk': !isPlayin }"
                            @click="toggleButtons()">
                            FOLLOW
                        </button>
                    </div>
                </div>
                <div class="col-md-6 col-sm-0">
                    <img class="orfi" src="../assets/img/fococlipping-20220120-2192 2.png" alt="">
                </div>
            </div>
        </div>
        <div class="px-4">
            <div>
                <h4 style="display: inline-block;">Popular</h4>
                <a class="mt-2" style="display: inline-block; float: right; color: #1DB954; text-decoration: none" href="https://freemusicarchive.org/home
                    ">See All</a>
            </div>
            <div class="container-fluid">

                <div v-for="it in playlist" :key="it.id" class="row p-0">
                    <MusicRow :item="it"></MusicRow>
                    <hr class="m-1">
                </div>
            </div>
        </div>
        <div class="px-4 mt-3">
            <div>
                <h4 style="display: inline-block;">Popular Releases</h4>
                <div class="container-fluid">
                    <div class="row">
                        <PapularReleses></PapularReleses>
                        <!--                        
                        <div v-for="it in PopularReleasesMusic" :key="it.id" class="col-2" style="text-align: center;">  
                            <img :src="it.imageUrl" alt="" class="kdscb">
                            <p>{{ it.name }}</p>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div style="height: 100px;">

        </div>
    </div>
</template>

<style>
.ifd {
    position: relative;
    top: 20%;
}

.eiwjnk {
    color: rgb(163, 163, 163);
}

#btnh1 {
    width: 100%;
    padding: 0px;
    text-align: center;
    color: white
}

#btnh1:hover {
    color: red;
}

#btnh1:active {
    border: none;
}

.uewiu {
    padding-top: 5px;
    height: 51px;
    width: 77px;
}

.dlfcbh {
    border-radius: 40px;
    width: 80px;
    border: 1px solid #1DB954;
    background-color: #1DB954;
    color: white;
}

.hdsvckk {
    border-radius: 40px;
    border: 3px solid white;
    background-color: #FFFFFF0A;
    color: #FFFFFF;


}

.hdsvck {
    border-radius: 40px;
    border: 1px solid #FFFFFF;
    color: white;
    background-color: transparent;
}

.butt {
    display: inline-block; 
}

.orfi {
    height: 50vh;
    width: 100%;
}

.immm {
    color: white;
    height: 50vh;
    padding-top: 10vh;
}

.uhsgno {
    background: url("../assets/img/image.png");
    height: 50vh;
    width: 100%;
    border-radius: 16px;
}

.uhsgnod {
    height: 100px;
    width: 200px;
}

.kdscb {
    height: 75%;
    width: 100%;
    border-radius: 35px
}
</style>

<script setup>
import PapularReleses from "../components/Music/MusicPapularReleases/PapularReleses.vue"
import playlist from "../assets/jsonData/playlist.json"
import MusicRow from "./Music/MusicMain/MusicRow.vue"

import { ref } from 'vue';

const isPlaying = ref(false);
const isPlayin = ref(false);

function toggleButtons() {
    isPlayin.value = !isPlayin.value;
    if (isPlaying.value) {
        buttonText.value = 'FOLLOWING';
    } else {
        buttonText.value = 'FOLLOW';
    }
}
</script>