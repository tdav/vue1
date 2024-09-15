<template>
    <h1>Homework 3</h1>

    <h3>1. Exercise</h3>

    <h2>Counter: {{ counter }}</h2>

    <button @click="onIncrement" class="btn btn-success">+</button>
    <button @click="onDecarement" class="btn btn-danger ms-2">-</button>

    <h3>2. Exercise</h3>

    <button v-bind="btnInfo" >V-Bind</button>


    <h3>3. Exercise</h3>

    <input v-model="modal" >

    


</template>
<script setup>
import { faWeight } from '@fortawesome/free-solid-svg-icons';
import {ref} from 'vue';
let counter = ref(0);

// 1. Exercise

function onIncrement() {
    counter.value++
} 

function onDecarement() {
    counter.value--
}

// 2. Exercise

const btnInfo = {
    class: "btn btn-success",
    style: "color: #000;"
}

// 3. Exercise

const modal = {
    placeholder: "Enter fullname",
    type: "type"
}


</script>