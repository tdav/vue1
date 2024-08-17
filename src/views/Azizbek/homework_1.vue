<template>
    <div>
      <h1 class="domH1">DOM Homework</h1>
  
      <h3 class="exercise">Exercise 2</h3>
  
      <ul>
        <li v-for="(item, index) in exercises" :key="index">{{ item }}</li>
      </ul>
  
      <h1 id="textContent">{{ h1TextContent }}</h1>
  
      <p class="innerHTML" v-html="pInnerHTML"></p>
  
      <ul class="list-color">
        <li :style="{ backgroundColor: listItemStyle.color, color: 'white' }">Red</li>
        <li>Blue</li>
        <li>Black</li>
        <li>Grey</li>
        <li>Blue</li>
        <li>Yellow</li>
        <li>Green</li>
        <li>Brown</li>
      </ul>
  
      <p class="atr" :id="setAttributeId">setAttribute</p>
  
      <a id="href" :href="hrefValue"></a>
  
      <h1 id="event">Event</h1>
      <button class="d-block btn btn-danger" @click="deleteList">Click</button>
  
      <span class="btn btn-info" @mouseover="mouseoverClick">
        mouseover
      </span>
  
      <input class="d-block" type="text" v-model="inputValue" @change="inputP">
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Data and methods
  const exercises = ['Exercise 1', 'Exercise 2', 'Exercise 3', 'Exercise 4', 'Exercise 5'];
  
  const h1TextContent = ref('h1TextContent');
  
  const pInnerHTML = ref('<b>bold innerHTML</b>');
  
  const listItemStyle = ref({
    color: 'red'
  });
  
  const setAttributeId = ref('setAttribute');
  
  const hrefValue = ref('#huxn');
  
  const inputValue = ref('');
  
  // Methods
  function deleteList() {
    document.getElementById('event').remove();
  }
  
  function mouseoverClick() {
    const colorUl = document.querySelector('.list-color');
    const newLi = document.createElement('li');
    newLi.textContent = 'Light';
    colorUl.appendChild(newLi);
  }
  
  function inputP() {
    const pElement = document.createElement('p');
    pElement.textContent = inputValue.value;
    document.body.appendChild(pElement);
  }
  </script>
  