<template>
    <div class="p-0 m-0 " style="background-color: black;">
        <div class="container p-0" style="background-color: #212120;">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-expand-lg"
                        style="position: fixed; top: 0; background-color: rgb(28 28 28); width: 100%;">
                        <div class="container-fluid">
                            <div class="p-4 pt-3 pb-3">
                                <img src="../assets/img/Logo.png" alt="logo" class="img-logo123 p-0">
                            </div>
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
                                        <button type="button" class="btn btn-secondary dropdown-toggle"
                                            data-bs-toggle="dropdown" aria-expanded="false"
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
                                        <a style="color: white;" class="nav-link active" aria-current="page"
                                            href="#">Popular Artist
                                        </a>
                                    </li>
                                </ul>
                                <form class="d-flex">
                                    <input class="form-control duyvyuc me-2" type="search"
                                        style="width: 318px; background-color: #303030; color: white; border-radius: 15px; border: 1px solid #303030"
                                        placeholder="Search" aria-label="Search">
                                    <button class="btn btn-outline-darck" type="submit"
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
            <div class="row p-0">
                <div class="col-2 p-0">
                    <MusicLeft></MusicLeft>
                </div>
                <div class="col-8 p-0">
                    <MusicMain></MusicMain>
                </div>
                <div class="col-2 p-0">
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
import MusicLeft from "../components/MusicLeft"
import MusicRight from "../components/MusicRight"

</script>