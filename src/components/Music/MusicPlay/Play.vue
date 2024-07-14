<template>
    <div class="row" style="height: 100vh;">
        <div class="col-3 col-md-4 p-0 ps-4 pt-4">
            <img class="mb-4" src="../../../assets/img/Rectangle2.png" alt="">
            <div class="ms-2" style="display: inline-block; width: 100px;">
                <p style="font-size: 14px; display: inline; color: white">Shape of You</p>
                <p style="font-size: 14px; color: white;">Ed Sheeran</p>
            </div>
            <svg v-if="isPlayingk" xmlns="http://www.w3.org/2000/svg" style="color: red;" width="16" height="16"
                fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16" @click="toggleIconsl">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
            </svg>


            <svg v-else @click="toggleIconsl" style="color: white;" xmlns="http://www.w3.org/2000/svg" width="16"
                height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
            </svg>
        </div>
        <div class="col-7 col-md-4 col-lg-4 p-0"
            style="color: white; text-align: center; height: 100px; display: flex; align-items: center;">
            <div style="width: 100%;">
                <!-- <> -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-shuffle dsfdhr"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5" />
                    <path
                        d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192" />
                </svg>
                <!-- <> -->
                <!-- < -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-rewind-fill ms-3 eovi"
                    viewBox="0 0 16 16">
                    <path
                        d="M8.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z" />
                    <path
                        d="M.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z" />
                </svg>
                <!-- < -->
                <div style="display: inline-block; height: 35px; width: 35px; border-radius: 50px;"
                    class="p-0 ms-4 m-0 iug">
                    <svg v-if="isPlaying" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                        class="bi bi-pause-circle-fill jabx" style="color: white;" viewBox="0 0 16 16"
                        @click="toggleIcons">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5" />
                    </svg>

                    <svg v-else xmlns="http://www.w3.org/2000/svg" style=" width:35px; height:35px;" fill="currentColor"
                        class="bi bi-caret-right-fill jabx" viewBox="0 0 16 16" @click="toggleIcons">
                        <path
                            d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
                </div>
                <!-- > -->
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                    class="bi bi-fast-forward-fill ms-3 eovi" viewBox="0 0 16 16">
                    <path
                        d="M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696z" />
                    <path
                        d="M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696z" />
                </svg>
                <!-- > -->
                <!-- repet -->
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                    class="bi bi-repeat ms-3 odwi" viewBox="0 0 16 16">
                    <path
                        d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                </svg>
                <!-- repet -->
            </div>
        </div>
        <div class="col-2 col-md-4 col-lg-4 pe-0  pt-4">
            <div class="row p-0">
                <p class="mt-3 col-2 col-md-7 col-lg-6" style="font-size: 10px; color: white; float: right; text-align: end;">
                    <p class="p-0 me-3 mt-1">00:00/04:00</p>
                </p>
                <div class="pt-1 col-8 col-md-4 col-lg-6 p-0  like-comment" style="float: right;">
                    <div class="row p-0">
                        <svg style="float: right; color: white;" xmlns="http://www.w3.org/2000/svg" width="30"
                            height="30" fill="currentColor" class="col-2 col-lg-2 p-0 bi bi-volume-up mt-2"
                            viewBox="0 0 16 16">
                            <path
                                d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
                            <path
                                d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
                            <path
                                d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11" />
                        </svg>
                        <input type="range" min="0" max="100" value="0" class="slider range hiuiu col-7 col-lg-5  p-0">
                        <!-- <input style="float: right;" type="range" min="0" max="100" value="0" class="slider  range mt-3 mb-3"> -->
                        <svg style="float: left; color: white;" xmlns="http://www.w3.org/2000/svg" width="30"
                            height="30" fill="currentColor" class="bi bi-chat-left-heart mt-2 pt-1 pe-0 col-3 col-lg-2"
                            viewBox="0 0 16 16">
                            <path
                                d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.odwi:hover {
    transition: all 3s;
    rotate: 900deg;
}


.menuSelectActive {
    color: red;
}

.hiuiu {
    appearance: none;
    height: 5px;
    background-color: #9c9c9cd2;
    float: right;
    border-radius: 20px;
    margin-top: 20px
}

/* #btnh1 {
    width: 100%;
    padding: 0px;
    text-align: center;
    color: white;
}

#btnh1:active {
    border-color: #1c1c1c1c;
} */

.cvbn {
    color: red;
}

.jabx:active {
    color: rgb(66, 66, 255);
}

.eovi {
    width: 22px;
    height: 22px;
}

.eovi:active {
    color: rgb(66, 66, 255);
}

.dsfdhr {
    width: 22px;
    height: 22px;
}

.islike {
    width: 100%;
    padding: 0px;
    text-align: center;
    color: #FFFFFF;
}
</style>


<script setup>
import { ref } from 'vue';

const isPlaying = ref(false);

function toggleIcons() {
    isPlaying.value = !isPlaying.value;
}

const isPlayingk = ref(false);

function toggleIconsl() {
    isPlayingk.value = !isPlayingk.value;
}


</script>