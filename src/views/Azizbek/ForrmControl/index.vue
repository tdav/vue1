<template>
  <div class="container">
    <h1 class=" fst-italic text-light ">Form Control</h1>
    <comFullName class="mb-3" />
    <comId class="mb-3" />
    <comAddress class="mb-3" />
    <comCheckbox class="mb-3" />
    <comAddCheckbox />
  </div>
</template>

<script setup>
import comFullName from "./components/comFullName.vue";
import comId from "./components/comId.vue";
import comAddress from "./components/comAddress.vue";
import comCheckbox from "./components/comCheckbox.vue";
import comAddCheckbox from "./components/comAddCheckbox.vue";
</script>

<style scoped>
.container {
  background: #000;
}
</style>
