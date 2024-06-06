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
                                <p class="me-3" style="color:  rgb(80 80 80);">Home</p>
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
        <div class="uhsgno container-fluid">
            <div class="row px-4">
                <div class="col-md-6 col-sm-12 p-5 immm">
                    <p>Verified Artist</p>
                    <h1 style="font-size: 60px;">Ed Sheeran</h1>
                    <p class="d-block">82,736,050 monthly listeners</p>
                    <button class="butt dlfcbh me-2">PLAY</button>
                    <button class="butt hdsvck" @click="Kursatish()">
                        <svg v-if="isShow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-check2" viewBox="0 0 16 16">
                            <path
                                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                        </svg>FALOVING
                    </button>
                </div>
                <div class="col-md-6 col-sm-12 uhsgnod">
                    <img class="orfi" src="../assets/img/fococlipping-20220120-2192 2.png" alt="">
                </div>
            </div>
        </div>
        <div class="px-4">
            <div>
                <h4 style="display: inline-block;">Popular</h4>
                <a class="mt-2" style="display: inline-block; float: inline-end; color: #1DB954;">See All</a>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-1">
                        <div class="row pt-2" style="height: 60px; text-align: center; align-items: center;">
                            <p>1</p>
                        </div>
                        <div class="row pt-3 pb-2" style="height: 60px; text-align: center; align-items: center;">
                            <p>2</p>
                        </div>
                        <div class="row pt-4 pb-2" style="height: 55px; text-align: center; align-items: center;">
                            <p>3</p>
                        </div>
                        <div class="row pt-4 pb-2" style="height: 55px; text-align: center; align-items: center;">
                            <p>4</p>
                        </div>
                    </div>
                    <div class="col-11">
                        <div type="button" class="row" style=" height: 50px; width: 100%;">
                            <img class="col-1 uewiu" src="../assets/img/Rectangle1.png" alt="">
                            <div class="col-4">
                                <p class="pt-3">Shiver</p>
                            </div>
                            <div class="col-3">
                                <p class="pt-3">460,228,511</p>
                            </div>
                            <div class="col-2" style="text-align: center">
                                <p class="pt-3">3:27</p>
                            </div>
                            <div class="col-1" style="text-align: center">
                                <p class="pt-2">
                                    <button @click="Toggle1()" id="btnh1" class="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                        </svg>
                                    </button>
                                </p>
                            </div>
                            <div class="col-1" style="text-align: center">
                                <p class="pt-3">...</p>
                            </div>
                        </div>
                        <hr class="m-1">
                        <div type="button" class="row" style=" height: 55px; width: 100%;">
                            <img class="col-1 uewiu" src="../assets/img/Rectangle2.png" alt="">
                            <div class="col-4">
                                <p class="pt-3">Perfect</p>
                            </div>
                            <div class="col-3">
                                <p class="pt-3">1,952,015,881</p>
                            </div>
                            <div class="col-2" style="text-align: center">
                                <p class="pt-3">4:23</p>
                            </div>
                            <div class="col-1" style="text-align: center">
                                <p class="pt-2">
                                    <button @click="Toggle1()" id="btnh1" class="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                        </svg>
                                    </button>
                                </p>
                            </div>
                            <div class="col-1" style="text-align: center">
                                <p class="pt-3">...</p>
                            </div>
                        </div>
                        <hr class="m-1">
                        <div type="button" class="row" style=" height: 55px; width: 100%;">
                            <img class="col-1 uewiu" src="../assets/img/Rectangle1.png" alt="">
                            <div class="col-4">
                                <p class="pt-3">Bad Habits</p>
                            </div>
                            <div class="col-3">
                                <p class="pt-3">850,545,959</p>
                            </div>
                            <div class="col-2" style="text-align: center">
                                <p class="pt-3">3:50</p>
                            </div>
                            <div class="col-1 p-0" style="text-align: center;">
                                <p class="pt-2">
                                    <button @click="Toggle1()" id="btnh1" class="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                        </svg>
                                    </button>
                                </p>
                            </div>
                            <div class="col-1" style="text-align: center">
                                <p class="pt-3">...</p>
                            </div>
                        </div>
                        <hr class="m-1">
                        <div type="button" class="row" style=" height: 55px; width: 100%;">
                            <img class="col-1 uewiu" src="../assets/img/Rectangle2.png" alt="">
                            <div class="col-4" style="">
                                <p class="pt-3">Shape of You</p>
                            </div>
                            <div class="col-3">
                                <p class="pt-3">3,024,067,930</p>
                            </div>
                            <div class="col-2" style="text-align: center">
                                <p class="pt-3">3:53</p>
                            </div>
                            <div class="col-1" style="text-align: center">
                                <p class="pt-2">
                                    <button @click="Toggle1()" id="btnh1" class="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                        </svg>
                                    </button>
                                </p>
                            </div>
                            <div class="col-1" style="text-align: center">
                                <p class="pt-3">...</p>
                            </div>
                        </div>
                        <div v-if="seeAll">
                            ;oihwrdgvf;pkonqrepadibnpewoiraudnvpoqcenslj
                        </div>
                    </div>
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
    </div>
</template>
<style>
#btnh1{
    width: 100%;
    padding: 0px;
    text-align: center;
    color: white
}
#btnh1:hover{
    color: red;
}
#btnh1:active{
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
    width: 90%;
}

.immm {
    color: white;
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
import { ref } from 'vue';

let isShow = ref(false)

function Kursatish() {
    this.isShow = true;
}

let seeAll = ref(false)

var btnvar1 = document.getElementById('btnh1');

function Toggle1() {
      if (btnh1.value === 'red') {
        btnh1.value = '';
      } else {
        btnh1.value = 'red';
      }
    }

</script>