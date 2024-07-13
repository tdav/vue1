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





</script>

<style scoped>
.mytext {
  font-size: medium;
  font-weight: 500;
}
</style>
