<template>
    <div class="container">
  
      <div class="row">
        <div class="col">
          <input type="text" class="textstyle" v-model="msg">
          <button @click="OnCreate" class="buttonstyle">Qo'shish</button>
        </div>
      </div>
  
  
      <div class="row">
        <div class="col">
          <h3>Todo List</h3>
          <ul class="list-group" v-for="it in list" :key="it.id">
            <li>
              <input type="checkbox" v-model="it.checked"/>
              <p class="mytext"> {{ it.name }}</p>
            </li>
          </ul>

          <ul class="list-group" v-for="it in list" :key="it.id">
            <li>
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
  
  let msg = ref("")
  
  
  function OnCreate() {
    var it = {
      checked: false,
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
    padding-left: 6px;
  }

.buttonstyle {
    margin-left: 2rem;
    border: 2px solid;
    border-radius: 10px;
    border-color: black;
    color: black;
    background-color: grey;
    
}

.textstyle {
    width: 15rem;
    height: 2rem;
}
  </style>
  