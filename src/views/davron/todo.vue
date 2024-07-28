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
        <ul class="list-group" v-for="it in list" :key="it.id">


          <li>
            <input type="checkbox" v-model="it.checked" />
            <p class="mytext"> {{ it.name }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([])
const donelist = ref([])

let msg = ref("")


function OnCreate() {
  var it = {
    checked: true,
    name: msg
  }

  msg = ref("")

  list.value.push(it)
}


let g1 = 1
let g2 = 2
let g3 = 3


g3 += g2;

g3 = g3 + g2;


function TestSum1(g1, g2, g3) {
  return g1 + g2 + g3;
}

let o1 = {
  g1: 1,
  g2: 1,
  g3: 3
}

function TestSun2(o1) {
  return o1.g1 + o1.g2 + o1.g2
}


let ggg2 = o1.g2;
let ggg1 = ol['g2'];



let str = g2 == g1 ? 'true' : 'false'

if (g2 === g1)
  console.log("true");
else
  console.log("fasle");

switch (g1) {
  case 1:
    console.log("fasle");
    break;
  case 2:
    console.log("fasle 1");
    break;
  case 3:
    console.log("fasle");
    break;

  default:
    break;
}


console.log(`if (g2 == 1)
  console.log("true");
else
  if (g2 == 2)
    console.log("true");
  else
    if (g2 == 3)
      console.log("true");`)

if (g2 == 1)
  console.log("true");
else
  if (g2 == 2)
    console.log("true");
  else
    if (g2 == 3)
      console.log("true");




</script>

<style scoped>
.mytext {
  font-size: medium;
  font-weight: 500;
}
</style>
