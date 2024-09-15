<template>
  <div class="container mt-2">
    <div class="taxId">
      <div class="form-check radio1" style="margin-left: 5%">
        <input
          class="form-check-input"
          type="radio"
          name="taxType"
          id="taxIdRadio"
          value="Tax-ID"
          v-model="selectedTaxType"
        />
        <label class="form-check-label" for="taxIdRadio">Tax-ID</label>
      </div>

      <div class="radio2 form-check" style="margin-left: 11%">
        <input
          class="form-check-input"
          type="radio"
          name="taxType"
          id="ssnRadio"
          value="Social Security Number"
          v-model="selectedTaxType"
        />
        <label class="form-check-label" for="ssnRadio">Social Security Number</label>
      </div>

      <input
        type="number"
        class="form-control numbers"
        style="margin-left: 9%"
        placeholder="9 Digit Number"
        v-model.number="number"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedTaxType = ref(""); // Saqlanadigan radio button tanlovi
const number = ref(null); // 9 raqamli raqam
</script>

<style scoped>
.taxId {
  background: rgb(220, 220, 221);
  font-size: large;
  border-radius: 6px;
  padding: 20px;
  margin-top: 3rem;
}

.radio1 {
  display: inline-block;
}
.radio2 {
  display: inline-block;
}

.numbers {
  display: inline-block;
  width: 49%;
  height: 50px;
}
</style>
