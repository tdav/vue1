<template>
  <div class="container checks">
    <!-- 1. Backup withholding uchun checkbox -->
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

    <!-- 2. Dividendlarn reinvestitsiya qilish uchun checkbox -->
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

    <!-- Yuborish tugmasi -->
    <button @click="submit" class="btn btn-primary mt-2">Yuborish</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Checkbox holatlarini saqlash uchun o'zgaruvchilar
const isBackupWithholding = ref(false); // "Subject to backup withholding" checkbox
const wantsReinvestment = ref(false); // "Reinvest dividends" checkbox

// Eventlarni yuborish uchun defineEmits
const emit = defineEmits(["submit"]);

// submit funksiyasi
const submit = () => {
  emit("submit", {
    isBackupWithholding: isBackupWithholding.value,
    wantsReinvestment: wantsReinvestment.value,
  });
};
</script>

<style scoped>
.checks {
  background-color: rgb(72, 78, 88);
  border-radius: 6px;
  padding: 20px;
  margin-top: 3rem;
  width: 98%;
  margin-left: 1%;
  color: white;
}
</style>
