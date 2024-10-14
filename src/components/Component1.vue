<template>
  <div class="hello">

    <h3>Component ичидан</h3>
    <h1>{{ myvar }}</h1>
  </div>
</template>

<script setup>

import { ref, defineProps } from 'vue';

const props = defineProps({
  myvar: {
    type: String,
    required: true,
  }
});

</script>
