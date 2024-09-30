<template>
  <div class="container mt-2">
    <div class="taxId">
      <div class="form-check radio1" style="margin-left: 5%">
        <input
          class="form-check-input"
          type="radio"
          name="taxType"
          id="taxIdRadio"
          value="TaxID"
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
          value="SocialSecurityNumber"
          v-model="selectedTaxType"
        />
        <label class="form-check-label" for="ssnRadio">Social Security Number</label>
      </div>

      <input
        type="number"
        class="form-control numbers"
        style="margin-left: 11.5%"
        placeholder="9 Digit Number"
        v-model.number="number"
      />

      <button @click="submit" class="btn btn-primary mt-2">Yuborish</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedTaxType = ref(""); // Saqlanadigan radio button tanlovi
const number = ref(null); // 9 raqamli raqam

const emit = defineEmits(["submit"]);

const submit = () => {
  emit("submit", {
    selectedTaxType: selectedTaxType.value,
    number: number.value,
  });
};
</script>

<style scoped>
.taxId {
  background-color: rgb(72, 78, 88);
  border-radius: 6px;
  padding: 20px;
  margin-top: 3rem;
  color: white;
}

.radio1 {
  display: inline-block;
}
.radio2 {
  display: inline-block;
}

.numbers {
  display: inline-block;
  width: 46.2%;
}
</style>
