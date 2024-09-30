<template>
  <div class="container addMail">
    <div class="form-check check1" style="display: inline-block; width: 45%">
      <input
        class="form-check-input"
        type="checkbox"
        id="flexCheckDefault"
        v-model="isChecked"
      />
      <label class="form-check-label" for="flexCheckDefault">
        +Add optional mailing address
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isChecked = ref(false); // Checkbox holatini saqlash uchun
</script>

<style scoped>
.addMail {
  background: rgb(220, 220, 221);
  margin-top: 3rem;
  border-radius: 6px;
  padding-top: 30px;
  width: 98%;
  margin-left: 1%;
  padding-bottom: 30px;
  margin-bottom: 3rem;
  color: grey;
}
</style>
