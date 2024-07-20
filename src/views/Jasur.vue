<template>
    <h1>1:</h1>
    <h3>New page</h3>

    <h1>{{ My }}</h1>

    <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Label</label>
        <input type="text" class="form-control" placeholder="New text" v-model="My">
    </div>
    <h1>2:</h1>

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
    <h1>3:</h1>
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
    <h1>4:</h1>
    <div class="range">
        <div class="field">
            <div class="value left">0</div>
            <input type="range" v-model="sliderValue" min="0" max="100" step="1">
            <div class="value right">100</div>
        </div>
    </div>
    <h1>5:</h1>

    <div class="grid-container p-3">
        <div class="grid-item-2">footer</div>
        <div class="grid-item-3">left</div>
        <div class="grid-item-4">Main</div>
        <div class="grid-item-5">right</div>
        <div class="grid-item-6">heder</div>
    </div>
    <h1>6:</h1>  
    <div class="row">
    <div class="col">
      <input type="text" v-model="msg">
      <button @click="onCreate" class="ms-2" style="border-radius: 5px;">Qo'shish</button>
      <p v-if="exists" class="text-danger">Mavjud</p>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <h3>Todo List</h3>
      <ul class="list-group">
        <li v-for="task in tasks" :key="task.id">
          <input type="checkbox" v-model="task.checked" @change="handleCheck(task)" />
          <p class="mytext ms-2">{{ task.name }}</p>
        </li>
      </ul>
    </div>
  </div>
  <div class="row">
    <hr style="justify-content: center;">
    <h3>Done</h3>
    <div class="col">
      <ul class="list-group">
        <li v-for="task in completedTasks" :key="task.id">
          <input type="checkbox" v-model="task.checked" @change="handleCheck(task)" />
          <p class="mytext ms-2">{{ task.name }}</p>
        </li>
      </ul>
    </div>
  </div>


</template>

<style>
.grid-container {
    background-color: black;
    margin: 10px;
    height: 90vh;
    font-size: 40px;
    display: grid;
    grid-template-columns: 10% 1fr 10%;
    grid-template-rows: 7% 1fr 7%;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
}

.grid-item-2 {
    text-align: center;
    display: flex;
    justify-content: center;
    background-color: white;
    grid-column: 1 / 4;
    grid-row: 3 / 4;
}

.grid-item-3 {
    background-color: white;
    text-align: center;
    display: flex;
    justify-content: center;
}

.grid-item-4 {
    background-color: white;
    text-align: center;
}

.grid-item-5 {
    background-color: white;
    text-align: center;
}

.grid-item-6 {
    background-color: white;
    text-align: center;
    grid-column: 1 / 4;
    grid-row: 1 / 2;
}



.range .field input::-webkit-slider-thumb {
    appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50px;
    border: 3px solid white;
    background-color: rebeccapurple;
}

.sliderValue {
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

.left {
    left: -22px;
}

.right {
    right: -43px;
}

.range .field .value {
    position: absolute;
    font-size: 18px;
    font-weight: 600;
    color: red;
}

.range {
    height: 80px;
    width: 380px;
    background-color: blueviolet;
    border-radius: 10px;
    text-align: center;
    padding: 0 65px 0 45px;
}

.range .field {
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



//3
let r = {
    No: "",
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
///3
//1
let My = ref("My Page")
let aaa = ref(false)
///1

//2
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
///2

// 6
const msg = ref('');
const tasks = ref([]);
const completedTasks = ref([]);
const exists = ref(false);

const onCreate = () => {
  const countInTasks = tasks.value.filter(task => task.name === msg.value).length;
  const countInCompletedTasks = completedTasks.value.filter(task => task.name === msg.value).length;
  const totalCount = countInTasks + countInCompletedTasks;
  
  exists.value = totalCount >= 1; // Check if the name exists in either list

  if (!exists.value) {
    tasks.value.push({ id: Date.now(), name: msg.value, checked: false });
  }

  msg.value = ''; // Clear the input text after checking

  if (exists.value) {
    setTimeout(() => {
      exists.value = false;
    }, 2000); // Clear the message after 2 seconds
  }
};

const handleCheck = (task) => {
  if (task.checked) {
    tasks.value = tasks.value.filter(item => item.id !== task.id);
    completedTasks.value.push(task);
  } else {
    completedTasks.value = completedTasks.value.filter(item => item.id !== task.id);
    tasks.value.push(task);
  }
};


</script>