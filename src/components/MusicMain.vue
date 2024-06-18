<template>
    <div style="background-color: rgb(28 28 28); color: white; overflow-x: auto; max-height: 100vh;">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <button class="btn btn-outline-darck" type="submit"
                    style="height: 50px; width: 50px; background-color: #303030; border-radius:  15px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="color: white;"
                        fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                    </svg>
                </button>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        </li>
                        <div class="btn-group dropend">
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style="background-color: rgb(28 28 28); color: white; border: none; width: 80px;">
                                <p class="me-3 eiwjnk">Home</p>
                            </button>
                            <ul class="dropdown-menu" style="color: white;">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <li class="nav-item">
                            <a style="color: white;" class="nav-link active" aria-current="page" href="#">Popular Artist
                            </a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control duyvyuc me-2" type="search"
                            style="width: 318px; background-color: #303030; color: white; border-radius: 15px; border: 1px solid #303030"
                            placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-darck" type="submit"
                            style="height: 50px; width: 50px; background-color: #303030; border-radius:  15px;">
                            <svg style="color: white;" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        <div class="uhsgno container-fluid" style="height: 100%; display: flex; align-items: center;">
            <div class="row px-4" style="height: 100%; display: flex; align-items: center;">
                <div class="col-md-6 col-sm-12 p-5 immm">
                    <div class="ifd p-0">
                        <p>Verified Artist</p>
                        <h1 style="font-size: 50px;">Ed Sheeran</h1>
                        <p class="d-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                class="bi bi-headphones mb-2" viewBox="0 0 16 16">
                                <path
                                    d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
                            </svg>
                            82,736,050 monthly listeners
                        </p>
                        <button class="butt dlfcbh me-2">PLAY</button>
                        <!-- kenco -->
                        <!-- <button class="butt hdsvck">
                        FALOVING
                    </button>
                    <button class="butt hdsvckk">
                        FALOVING
                    </button> -->

                        <button class="butt" :class="{ 'hdsvck': isPlayin, 'hdsvckk': !isPlayin }"
                            @click="toggleButtons()">
                            FOLLOW
                        </button>
                        <!-- kenco -->
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
                <a class="mt-2" style="display: inline-block; float: inline-end; color: #1DB954; text-decoration: none"
                    href="https://www.youtube.com/">See All</a>
            </div>
            <div class="container-fluid">

                <div v-for="it in playlist" :key="it.id" class="row p-0">
                    <MusicQator :item="it"></MusicQator>
                    <hr class="m-1">
                </div>
            </div>
        </div>
        <div class="px-4 mt-3">
            <div>
                <h4 style="display: inline-block;">Popular Releases</h4>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-2" style="text-align: center;">
                            <img src="../assets/img/Rectangle3.png" alt="" class="kdscb">
                            <p>PERU</p>
                        </div>
                        <div class="col-2" style="text-align: center;">
                            <img src="../assets/img/Rectangle1.png" alt="" class="kdscb">
                            <p>SHIVER</p>
                        </div>
                        <div class="col-2" style="text-align: center;">
                            <img src="../assets/img/Rectangle2.png" alt="" class="kdscb">
                            <p>PERFECt</p>
                        </div>
                        <div class="col-2" style="text-align: center;">
                            <img src="../assets/img/Rectangle4.png" alt="" class="kdscb">
                            <p>xMAN</p>
                        </div>
                        <div class="col-2" style="text-align: center;">
                            <img src="../assets/img/Rectangle5.png" alt="" class="kdscb">
                            <p>oNEW</p>
                        </div>
                        <div class="col-2" style="text-align: center;">
                            <img src="../assets/img/Rectangle6.png" alt="" class="kdscb">
                            <p>X</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="height: 100px;">

        </div>
    </div>
</template>

<style>
.ifd{
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
    height: 85%;
    width: 100%;
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
import playlist from "../assets/jsonData/playlist.json"

import MusicQator from "../components/Music/MusicMain/MusicQtor.vue"

import { ref } from 'vue';

let seeAll = ref(false)

var btnvar1 = document.getElementById('btnh1');

function Toggle1() {
    if (btnh1.value === 'red') {
        btnh1.value = '';
    } else {
        btnh1.value = 'red';
    }
}

const isyurak = ref(false);

function yurakIcons() {
    isYurak.value = !isYurak.value;
}

const isPlaying = ref(false);

function toggleIcons() {
    isPlaying.value = !isPlaying.value;
}

const isPlayin = ref(false);

function toggleButtons() {
    isPlayin.value = !isPlayin.value;
    //   if (isPlaying.value) {
    //     buttonText.value = 'FOLLOWING';
    //   } else {
    //     buttonText.value = 'FOLLOW';
    //   }
}
</script>