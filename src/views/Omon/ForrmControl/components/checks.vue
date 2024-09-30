<template>
  <div class="container checks">
    <div class="form-check check1" style="display: inline-block; width: 45%">
      <input
        class="form-check-input"
        type="checkbox"
        id="backupWithholding"
        v-model="isBackupWithholding"
      />
      <label class="form-check-label" for="backupWithholding">
        Subject to backup withholding
      </label>
    </div>
    <div
      class="form-check check1"
      style="display: inline-block; width: 45%; margin-left: 5%"
    >
      <input
        class="form-check-input"
        type="checkbox"
        id="reinvestDividends"
        v-model="wantsReinvestment"
      />
      <label class="form-check-label" for="reinvestDividends">
        I want to reinvest my dividends
      </label>
    </div>

    <button @click="submit" class="btn btn-primary mt-2">Yuborish</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isBackupWithholding = ref(false); // Checkbox holatini saqlash uchun
const wantsReinvestment = ref(false); // Checkbox holatini saqlash uchun

const emit = defineEmits(["submit"]);

const submit = () => {
  emit("submit", {
    isBackupWithholding: isBackupWithholding.value,
    wantsReinvestment: wantsReinvestment.value,
  });
};
</script>

<style scoped>
.checks {
  background: rgb(220, 220, 221);
  border-radius: 6px;
  padding: 20px;
  margin-top: 3rem;
  width: 98%;
  margin-left: 1%;
}
</style>
