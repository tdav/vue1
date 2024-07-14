<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <input type="text" v-model="msg">
                <button @click="OnCreate">Янги</button>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <h3>Todo List</h3>
                <ul class="list-group">
                    <li v-for="it in list" :key="it.id">
                        <input type="checkbox" v-model="it.checked" @change="handleCheck(it)" />
                        <p class="mytext ms-2"> {{ it.name }}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <hr style="justify-content: center;">
            <h3>Done</h3>
            <div class="col">
                <ul class="list-group">
                    <li v-for="it in donelist" :key="it.id">
                        <input type="checkbox" v-model="it.checked" @change="handleCheck(it)" />
                        <p class="mytext ms-2"> {{ it.name }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([]);
const donelist = ref([]);

let msg = ref("");

function OnCreate() {
    var it = {
        id: Date.now(),
        checked: false,
        name: msg.value
    };

    msg.value = "";

    list.value.push(it);
}

function handleCheck(item) {
    if (item.checked) {
        list.value = list.value.filter(it => it.id !== item.id);
        donelist.value.push(item);
    } else {
        donelist.value = donelist.value.filter(it => it.id !== item.id);
        list.value.push(item);
    }
}
</script>

<style scoped>
.mytext {
    font-size: medium;
    font-weight: 500;
}
</style>
