<template>
    <div class="p-0 m-0 " style="background-color: black; overflow-x: hidden; overflow-y: hidden;">
        <div class="container-fluid container-lg container-xl container-xxl p-0" style="background-color: #1c1c1c;">
            <div class="row" style="height: 12vh;">
                <div class="p-0">
                    <nav class="navbar navbar-expand p-0 brt"
                        style="background-color: rgb(28 28 28); height: 100%;">
                        <div class="container p-0">
                            <div class="p-4 pt-3 pb-3 yrt">
                                <img src="../assets/img/Logo.png" alt="logo" class="img-logo123">
                            </div>
                            <button class="btn btn-outline-darck offcanavas-button bijg" type="submit"  @click="toggleOffcanvas"
                                style="height: 50px; width: 50px; background-color: #303030; border-radius:  15px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" style="color:#FFFFFF">
                                    <path fill-rule="evenodd" 
                                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
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
                                            <button type="button" class="btn btn-secondary dropdown-toggle"
                                                data-bs-toggle="dropdown" aria-expanded="false"
                                                style="background-color: rgb(28 28 28); color: white; border: none; width: 80px;">
                                                <p class="me-3 sghf" style="color:  rgb(80 80 80);">Home</p>
                                            </button>
                                        <ul class="dropdown-menu" style="color: white;">
                                            <li><a class="dropdown-item trgk" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li>
                                                <hr class="dropdown-divider">
                                            </li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <li class="nav-item">
                                        <a style="color: white;" class="nav-link active trgc" aria-current="page"
                                            href="#">Popular Artist
                                        </a>
                                    </li>
                                </ul>
                                <form class="d-flex">
                                    <input class=" searchyt me-2" type="search"
                                        style="width: 318px; background-color: #303030; color: white; border-radius: 15px; border: 1px solid #303030"
                                         aria-label="Search">
                                    <button class="btn btn-outline-darck iwuys" type="submit"
                                        style="height: 50px; width: 50px; background-color: #303030; border-radius:  15px;">
                                        <svg style="color: white;" xmlns="http://www.w3.org/2000/svg" width="16"
                                            height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div class="row p-0" style="height: 88vh;">
                    <!-- <button @click="toggleOffcanvas" class="open-btn">Menu</button> -->
                    <div :class="['offcanvas', { 'show': isOffcanvasOpen }]">
                    <div class="close-btn">
                        <img src="../assets/img/Logo.png" alt="logo1">
                    </div>
                    <div v-for="it in MenuList" class="list-group col-2" :key="it.id" style="background-color: #1c1c1c; margin-top:-5px;">
                        <MusicLibrary :data="it">
                        <!-- <div v-if="it.title == '.'">
                            <div class="p-4 pt-3 pb-3">
                                <img src="../assets/img/Logo.png" alt="logo" class="img-logo123 p-0">
                            </div>
                        </div> -->
                        <button v-if="it.title == 'PLAYLIST'" class="dfghjk myTitleBtn">+</button>
                        </MusicLibrary>
                    <!-- <MusicLeft></MusicLeft> -->
                    </div>
                    </div>
                    <div :class="['overlay', { 'show': isOffcanvasOpen }]" @click="toggleOffcanvas"></div>
                <!-- <div  class="p-0 col-2 pdoiuy" v-show="isShowMenu" style="background-color: #1c1c1c; height: 90vh">
                </div> -->

                <div  class="p-0 col-10"><!--:class="[ isShowMenu? 'col-8': 'col-10' ]"-->
                    <MusicMain></MusicMain>
                </div>

                <div class="p-0 col-2">
                    <MusicRight></MusicRight>
                </div>
            </div>


            <div class="row">
                <div class="col-12">
                    <MusicBottom></MusicBottom>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import MusicMain from "../components/MusicMain"
import MusicBottom from "../components/MusicBottom"
// import MusicLeft from "../components/MusicLeft"
import MusicRight from "../components/MusicRight"
import MusicLibrary from "../components/Music/MusicLeft/MusicLibrary.vue"
import MenuList from "../assets/jsonData/menulist.json";
// import MusicLibrary from './Music/MusicLeft/MusicLibrary';

const isOffcanvasOpen = ref(false);

function toggleOffcanvas() {
  isOffcanvasOpen.value = !isOffcanvasOpen.value;
}

import { ref } from 'vue';

let isShowMenu = ref(true);

function onClickShowMenu() {
    isShowMenu.value = !isShowMenu.value;
}
</script>

<style scoped>

.searchyt {
     width: 300px;
     background-color: #303030;
     color: white;
     border-radius: 15px;
     border: 1px solid #303030
}

.offcanvas {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #1c1c1c;
  overflow-x: hidden;
  transition: 0.3s;
  z-index: 1000;

}

.offcanvas.show {
  left: 2rem;
  padding-top: 17px;
  left: 0;
}

.close-btn {
    padding-bottom: 35px;
    background-color: #1c1c1c;
    padding-left: 1rem;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 999;
  visibility: hidden;
}

.overlay.show {
  opacity: 1;
  visibility: visible;
}

.myTitleBtn {
  width: 16px;
  height: 16px;
  background-color: #1c1c1c;
  color: white;
  margin-left: 5rem;
}

.list-group {
  background-color: #1c1c1c;
  margin-top: -5px;
}

@media only screen and  (max-width: 768px){

.bijg {
    margin-left: 20px
    ;
}

.yrt {
    visibility: hidden;
    z-index: 1;
}

.offcanavas-button {
    margin-left: -10rem;
}

.searchyt{
    width: 200px;
}


.trgc {
    margin-left: -0.3rem;
    z-index: 2;
    margin-bottom: -7px;
}

}


@media only screen and  (max-width: 993px){

    .img-logo123 {
        margin-left: -2rem;
    }

}

</style>