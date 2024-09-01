<template>
  <div>
    <button @click="numbers" class="btn btn-success" style="height: 4rem">
      Sonlarni Kiriting
    </button>
    <h2 v-if="maxNumber !== null">Енг катта сон: {{ maxNumber }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxNumber: null,
    };
  },

  methods: {
    numbers() {
      const number1 = prompt("xoxlagn son ", "0");
      const number2 = prompt("xoxlagn son", "0");
      const number3 = prompt("xoxlagn son", "0");

      const numbers = [number1, number2, number3].filter((num) => !isNaN(num));

      this.maxNumber = numbers.length > 0 ? Math.max(...numbers) : null;
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 16px;
}
</style>
