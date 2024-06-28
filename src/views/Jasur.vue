<template>

    <h3>New page</h3>

    <h1>{{ My }}</h1>

    <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Label</label>
        <input type="text" class="form-control" placeholder="New text" v-model="My">
    </div>

    <hr>
    <h1>Salom</h1>
    <button type="button" class="btn btn-warning" @click="ocho()">och</button>
    <button type="button" class="btn btn-danger" @click="yopo()">yop</button>

    <div v-if="aaa">
        <h1>salom</h1>
    </div>


    <h1>Hayr</h1>
    <button type="button" class="btn btn-warning" @click="och()">och</button>
    <button type="button" class="btn btn-danger" @click="yop()">yop</button>

    <div v-if="bbb">
        <h1>hayr</h1>
    </div>
    <hr>
    <div class="mb-3">
        <label for="cdcgzxvjhb" class="form-label">No</label>
        <input type="text" class="form-control" v-model="it.No">
    </div>
    <hr>
    <div class="mb-3">
        <label for="cdcgzxvjhb" class="form-label">Narxi</label>
        <input type="text" class="form-control" v-model="it.name">
    </div>
    <hr>
    <div class="mb-3">
        <label for="cdcgzxvjhb" class="form-label">Discription</label>
        <input type="text" class="form-control" v-model="it.description">
    </div>
    <hr>
    <div class="mb-3">
        <label for="cdcgzxvjhb" class="form-label">Portsa</label>
        <input type="text" class="form-control" v-model="it.Portsa">
    </div>
    <hr>
    <div class="mb-3">
        <label for="cdcgzxvjhb" class="form-label">Adres</label>
        <input type="text" class="form-control" v-model="it.Adres">
    </div>
    <button @click="saqlash()" class="btn btn-warning">saqlash</button>


    <table class="table  table-dark table-striped mt-5">
        <thead>
            <tr>
                <th scope="col">No</th>
                <th scope="col">Narxi</th>
                <th scope="col">Discription</th>
                <th scope="col">Portsa</th>
                <th scope="col">Adres</th>
                <th scope="col">X</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="it in jasur" :key="it.No">
                <td class="table-primary">{{ it.No }}</td>
                <td class="table-primary">{{ it.name }}</td>
                <td class="table-primary">{{ it.description }}</td>
                <td class="table-primary">{{ it.Portsa }}</td>
                <td class="table-primary">{{ it.Adres }}</td>
                <td class="table-primary"> <button class="btn btn-danger" @click="Del(it)">X</button></td>
            </tr>
        </tbody>
    </table>





    <div class="range">
        <div class="field">
            <div class="value left">0</div>
            <input type="range" v-model="sliderValue" min="0" max="100" step="1">
            <div class="value right">100</div>
        </div>
    </div>

</template>

<style>
.range .field input::-webkit-slider-thumb{
    appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50px;
    border: 3px solid white;
    background-color: rebeccapurple;
}
.sliderValue{
    position: relative;
    width: 100%;
}
.range .sliderValue span {
    position: absolute;
    height: 45px;
    width: 45px;
    color: white;
    font-weight: 500;
    top: -40px;
    transform: translateX(-50%);
    line-height: 55px;
    z-index: 2;
}

.range .sliderValue span:after {
    position: absolute;
    height: 45px;
    content: "";
    width: 45px;
    background-color: rebeccapurple;
    border-radius: 50px 50px 0 50px;
    border: 3px solid;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    z-index: -1;
}

.left{
    left: -22px;
}
.right{
    right: -43px;
}

.range .field .value {
    position: absolute;
    font-size: 18px;
    font-weight: 600;
    color: red;
}

.range{
    height: 80px;
    width: 380px;
    background-color: blueviolet;
    border-radius: 10px;
    text-align: center;
    padding: 0 65px 0 45px;
}
.range .field{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.range .field input {
    appearance: none;
    height: 3px;
    width: 100%;
}

button {
    height: 40px;
    width: 120px;
    border: none 20px;
}

.imm {
    height: 30px;
    width: 30px;
}

p {
    display: inline-block;
}
</style>

<script setup>


import { ref } from 'vue';


let My = ref("My Page")
let aaa = ref(false)

function ocho() {
    this.aaa = true
}

function yopo() {
    this.aaa = false
}


let bbb = ref(false)

function och() {
    this.bbb = true
}

function yop() {
    this.bbb = false
}
// /2
//3
let it = ref({})
let jasur = ref([])


function saqlash() {
    jasur.value.push(it.value);
    it = ref({});
}

function Del(it) {
    jasur.value.pop(it);
}
// /3
</script>