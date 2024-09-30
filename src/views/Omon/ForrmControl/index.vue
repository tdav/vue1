<template>
  <div class="container mx-auto p-4 background">
    <div class="flex flex-col gap-4">
      <div class="w-1/2">
        <FullName @submit="handleFormSubmit" />
      </div>
      <div class="w-1/2">
        <TaxId @submit="handleFormSubmit" />
      </div>
      <div class="w-1/2">
        <FormsGroup @submit="handleFormSubmit" />
      </div>
      <div class="w-1/2">
        <Checks @submit="handleFormSubmit" />
      </div>
      <div class="w-1/2">
        <AddMail @submit="handleFormSubmit" />
      </div>
    </div>
    <button
      @click="submitAll, clearInput"
      class="btn btn-primary form"
      style="width: 98%; margin-left: 1%"
    >
      Submit
    </button>

    <!-- <div v-if="submittedData">
      <h2>Yuborilgan Ma'lumotlar:</h2>
      <pre>{{ submittedData }}</pre>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import FullName from "./components/fullName.vue";
import TaxId from "./components/taxId.vue";
import FormsGroup from "./components/formsGroup.vue";
import Checks from "./components/checks.vue";
import AddMail from "./components/addMail.vue";

const submittedData = ref({});

const handleFormSubmit = (data) => {
  Object.assign(submittedData.value, data);
};
console.log(submittedData);

const submitAll = () => {
  console.log("Final submitted data:", submittedData.value);
};
</script>

<style>
.background {
  background-color: rgb(40, 47, 57);
}
</style>
