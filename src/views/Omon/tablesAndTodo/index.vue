<template>
  <div>
    <modalComponent @add-data="addData" />
    <tableComponent :table-data="tableData" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import modalComponent from "./components/modalComponent.vue";
import tableComponent from "./components/tableComponent.vue";

const tableData = ref([]);

const addData = (newEntry) => {
  tableData.value.push(newEntry);
};
</script>

<style></style>
