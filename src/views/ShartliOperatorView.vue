<template>

    <h3>Shartli Operator page</h3>

    <button type="button" class="btn btn-success" @click="Kursatish()">Kursatish</button>
    <button type="button" class="btn btn-danger" @click="Bekitish()">Bekitish</button>


    <p v-if="isShow">
    <h2>MENU</h2>
    </p>


</template>

<script setup>
import { ref } from 'vue';

let isShow = ref(false)

function Kursatish() {
    this.isShow = true
}

function Bekitish() {
    this.isShow = false
}


</script>