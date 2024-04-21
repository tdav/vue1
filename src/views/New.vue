<template>

    <h3>New page</h3>

    <h1>{{ My }}</h1>

    <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Label</label>
        <input type="text" class="form-control" placeholder="New text" v-model="My">
    </div>

    <hr>
    <h1>My Accaunt</h1>
    <button type="button" @click="ocho()">och</button>
    <button type="button" @click="yopo()">yop</button>

    <div v-if="aaa">
        <h1>alo</h1>
    </div>
</template>

<style>
button{
    height: 40px;
    width: 120px;
    border: none 20px;
}
.imm{
    height: 30px;
    width: 30px;
}
p{
    display: inline-block;
}
</style>

<script setup>

// 1
import { ref } from 'vue';

let My = ref("My Page")
// /1

// 2

let aaa = ref(false)

function ocho() {
    this.aaa = true
}

function yopo() {
    this.aaa = false
}
// /2

</script>