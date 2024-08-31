<template>
  <div>
    <button @click="numbers" class="btn btn-success form-control" style="height: 4rem">
      Sonlarni Kiriting
    </button>
    <h1 v-if="maxNumber !== null">Енг катта сон: {{ maxNumber }}</h1>
    <ul v-if="filteredNumbersList.length > 0">
      <li v-for="(num, index) in filteredNumbersList" :key="index">
        Kiritilgan son: {{ num }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxNumber: null,
      numbersList: [],
      filteredNumbersList: [],
    };
  },

  methods: {
    numbers() {
      const number1 = Number(prompt("xoxlagn son ", "0"));
      const number2 = Number(prompt("xoxlagn son", "0"));
      const number3 = Number(prompt("xoxlagn son", "0"));

      this.numbersList = [number1, number2, number3].filter((num) => !isNaN(num));

      this.maxNumber = this.numbersList.length > 0 ? Math.max(...this.numbersList) : null;

      this.filteredNumbersList = this.numbersList.filter((num) => num !== this.maxNumber);
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 16px;
}
</style>
