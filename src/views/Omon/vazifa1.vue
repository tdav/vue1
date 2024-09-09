<template>
  <div>
    <!-- Number Input Section -->
    <button
      @click="calculateNumbers"
      class="btn btn-success form-control"
      style="height: 4rem"
    >
      Sonlarni Kiriting
    </button>
    <h1 v-if="maxNumber !== null">Енг катта сон: {{ maxNumber }}</h1>
    <ul v-if="filteredNumbersList.length > 0">
      <li v-for="(num, index) in filteredNumbersList" :key="index">
        Kiritilgan сон: {{ num }}
      </li>
      <li>Kiritilgan сон: {{ maxNumber }}</li>
    </ul>

    <!-- Checkbox Section -->
    <h1>Checkbox</h1>
    <div class="checkbox-container" v-for="(option, index) in options" :key="index">
      <label>
        <input type="checkbox" v-model="checkedOptions" :value="option" />
        {{ option }}
      </label>
    </div>
    <p>Checked: {{ checkedCount }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Reactive state for number input section
const maxNumber = ref(null);
const numbersList = ref([]);
const filteredNumbersList = ref([]);

// Reactive state for checkbox section
const options = ref(["Option 1", "Option 2", "Option 3"]);
const checkedOptions = ref([]);

// Method to prompt user for numbers and calculate max and filtered list
const calculateNumbers = () => {
  const number1 = Number(prompt("Enter a number", "0"));
  const number2 = Number(prompt("Enter a number", "0"));
  const number3 = Number(prompt("Enter a number", "0"));

  numbersList.value = [number1, number2, number3].filter((num) => !isNaN(num));
  maxNumber.value = numbersList.value.length > 0 ? Math.max(...numbersList.value) : null;
  filteredNumbersList.value = numbersList.value.filter((num) => num !== maxNumber.value);
};

// Computed property to count checked checkboxes
const checkedCount = computed(() => checkedOptions.value.length);
</script>

<style scoped>
.checkbox-container {
  margin-bottom: 10px;
}
</style>
