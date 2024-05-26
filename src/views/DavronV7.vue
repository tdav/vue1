<template>
    <div class="container">
        <h3>Tumanlar Ruyhati</h3>
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">№</label>
            <input type="text" class="form-control" v-model="row.nomer">
        </div>

        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Tuman nomi</label>
            <input type="text" class="form-control" v-model="row.tuman">
        </div>

        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Viloyat nome</label>
            <input type="text" class="form-control" v-model="row.viloyat">
        </div>

        <button class="form-control btn btn-danger" @click="onSave()"> Saqlash </button>
    </div>

    <div class="mt-5"></div>

    <div class="container">
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tuman</th>
                    <th scope="col">Viloyat</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="it in list" :key="it.nomer" @click="Select(it)">
                    <td class="table-primary">{{ it.nomer }}</td>
                    <td class="table-primary">{{ it.tuman }}</td>
                    <td class="table-primary">{{ it.viloyat }}</td>
                    <td class="table-primary"> <button @click="Del(it)"></button> </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

import { ref } from 'vue';

let row = ref({});
let list = ref([]);

function onSave() {
     debugger;
    list.value.push(row.value);
    row = ref({});
}

</script>