<template>
    <div class="container">
        <div class="mb-3">
            <label for="cdcgzxvjhb" class="form-label">No</label>
            <input type="text" class="form-control" v-model="row.No">
        </div>
        <hr>
        <div class="mb-3">
            <label for="cdcgzxvjhb" class="form-label">Narxi</label>
            <input type="text" class="form-control" v-model="row.name">
        </div>
        <hr>
        <div class="mb-3">
            <label for="cdcgzxvjhb" class="form-label">Discription</label>
            <input type="text" class="form-control" v-model="row.description">
        </div>
        <hr>
        <div class="mb-3">
            <label for="cdcgzxvjhb" class="form-label">Portsa</label>
            <input type="text" class="form-control" v-model="row.Portsa">
        </div>
        <hr>
        <div class="mb-3">
            <label for="cdcgzxvjhb" class="form-label">Adres</label>
            <input type="text" class="form-control" v-model="row.Adres">
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
                    <th scope="col">X</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="it in list" :key="it.No">
                    <td class="table-primary">{{ it.No }}</td>
                    <td class="table-primary">{{ it.name }}</td>
                    <td class="table-primary">{{ it.description }}</td>
                    <td class="table-primary">{{ it.Portsa }}</td>
                    <td class="table-primary">{{ it.Adres }}</td>
                    <td class="table-primary"> <button class="btn btn-danger" @click="Del(it)">X</button></td>
                    <td class="table-primary"> <button class="btn btn-info" @click="Select(it)">{{ it.mode }}</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { ref } from 'vue';


let r = {
    No: "r",
    name: "",
    description: "",
    Portsa: "",
    Adres: "",
    mode: "Uzgartirish"
}

let row = ref({
    No: "",
    name: "",
    description: "",
    Portsa: "",
    Adres: "",
    mode: "Uzgartirish"
})
let list = ref([])


function saqlash() {

    console.log(row);
    console.log(row.value);
    console.log(r);

    list.value.push(row.value);
    row = ref({
        No: "",
        name: "",
        description: "",
        Portsa: "",
        Adres: "",
        mode: "Uzgartirish"
    });
}

function Del(it) {
    const index = list.value.indexOf(it);
    if (index > -1) {
        list.value.splice(index, 1);
    }
}


function Select(it) {

    if (it.mode == "Uzgartirish") {
        row = it
        it.mode = "Saqlash";
    }
    else {
        it.mode = "Uzgartirish";
        row = ref({
            No: "",
            name: "",
            description: "",
            Portsa: "",
            Adres: "",
            mode: "Uzgartirish"
        });
    }
}

</script>