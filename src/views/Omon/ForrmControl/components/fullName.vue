<template>
  <div class="container">
    <div class="YourFullName">
      <div class="full-name mb-1">
        <label for="fullName" class="form-label mt-2 ms-1">To'liq Ismingiz</label>
        <input type="text" id="fullName" class="form-control" v-model="fullName" />
      </div>

      <div class="date-of-birth">
        <label for="dateOfBirth" class="form-label mt-2 ms-1" style="display: block"
          >Tug'ilgan Sana</label
        >
        <input
          type="number"
          class="form-control day"
          placeholder="Kun"
          v-model.number="day"
        />
        <input
          type="number"
          class="form-control month"
          placeholder="Oy"
          v-model.number="month"
        />
        <input
          type="number"
          class="form-control year"
          placeholder="Yil"
          v-model.number="year"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const fullName = ref("");
const day = ref(null);
const month = ref(null);
const year = ref(null);
</script>

<style scoped>
.YourFullName {
  background: rgb(220, 220, 221);
  margin-top: 3rem;
  font-size: large;
  border-radius: 6px;
  padding-top: 10px;
}
.form-control {
  width: 98%;
  margin-left: 10px;
  height: 50px;
}

.day {
  width: 20%;
  display: inline-block;
  height: 50px;
}

.month {
  width: 20%;
  display: inline-block;
  height: 50px;
}

.year {
  width: 55%;
  display: inline-block;
  height: 50px;
}

.date-of-birth {
  padding: 10px;
  padding-bottom: 30px;
}
</style>
