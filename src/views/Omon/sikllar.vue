<template>
    <div>
      <!-- for sikli -->
      <h2>for Sikli:</h2>
      <!--for цикли – бу энг кўп учрайдиган цикллардан бири бўлиб, маълум бир шартлар асосида код блокини бир неча марта такрорлаш учун ишлатилади. Унинг синтакси қуйидагича:-->
      <ul>
        <li v-for="index in 5" :key="index">{{ index - 1 }}</li>
      </ul>
  
      <!-- while sikli -->
      <h2>while Sikli:</h2>
      <!-- Бу цикл ҳам i ўзгарувчисини 0 дан 4 гача чоп этади, лекин циклнинг шарти ҳар доим текширилади ва итерация циклнинг ўзида амалга оширилади.-->
      <ul>
        <li v-for="index in computedIndices" :key="index">{{ index }}</li>
      </ul>
  
      <!-- do...while sikli -->
      <h2>do...while Sikli:</h2>
      <!-- Бу цикл ҳам i ўзгарувчисини 0 дан 4 гача чоп этади, лекин циклнинг код блоки ҳар доим бир марта бажарилади.-->
      <ul>
        <li v-for="index in computedDoWhileIndices" :key="index">{{ index }}</li>
      </ul>
  
      <!-- for...in sikli -->
      <h2>for...in Sikli:</h2>
<!-- Бу цикл person объектнинг барча хусусиятларини (ўзгарувчиларини) такрорлайди ва уларнинг номини ва қийматини чоп этади.-->
      <ul>
        <li v-for="(value, key) in obj" :key="key">{{ key }}: {{ value }}</li>
      </ul>
  
      <!-- for...of sikli -->
      <h2>for...of Sikli:</h2>
<!-- Бу цикл массивнинг ҳар бир элементини value ўзгарувчисига ўрнатади ва чоп этади.-->
      <ul>
        <li v-for="value in arr" :key="value">{{ value }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const computedIndices = computed(() => {
    const indices = [];
    let i = 0;
    while (i < 5) {
      indices.push(i);
      i++;
    }
    return indices;
  });
  
  const computedDoWhileIndices = computed(() => {
    const indices = [];
    let i = 0;
    do {
      indices.push(i);
      i++;
    } while (i < 5);
    return indices;
  });
  
  const obj = { a: 1, b: 2, c: 3 };
  const arr = [10, 20, 30];
  </script>
  