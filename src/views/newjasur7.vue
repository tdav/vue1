<template>
    <div class="container">
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
    </div>
</template>
<script setup>
import { ref } from 'vue';


let it = ref({})
let jasur = ref([])


function saqlash() {
    jasur.value.push(it.value);
    it = ref({});
}

function Del(it) {
    jasur.value.pop(it);
}
</script>