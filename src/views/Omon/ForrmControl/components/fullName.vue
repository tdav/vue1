<template>
  <div class="container">
    <div class="YourFullName">
      <div class="full-name mb-1">
        <label for="fullName" class="form-label mt-2 ms-1">To'liq Ismingiz</label>
        <input type="text" id="fullName" class="form-control" v-model="fullName" />
      </div>

      <div class="date-of-birth">
        <label for="dateOfBirth" class="form-label mt-2 ms-1" style="display: block">
          Tug'ilgan Sana
        </label>
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

      <button @click="submit" class="btn btn-primary mt-2">Yuborish</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const fullName = ref("");
const day = ref(null);
const month = ref(null);
const year = ref(null);

const emit = defineEmits(["submit"]);

const submit = () => {
  const birthDate = {
    day: day.value,
    month: month.value,
    year: year.value,
  };

  emit("submit", {
    fullName: fullName.value,
    birthDate,
  });
};
</script>

<style scoped>
.YourFullName {
  background: rgb(220, 220, 221);
  margin-top: 3rem;
  border-radius: 6px;
  padding-top: 10px;
}
.form-control {
  width: 94%;
  margin-left: 10px;
}
.day {
  width: 20%;
  display: inline-block;
  margin-left: -0.1%;
}
.month {
  width: 20%;
  display: inline-block;
  margin-left: 4%;
}
.year {
  width: 47%;
  display: inline-block;
  margin-left: 5%;
}
.date-of-birth {
  padding: 10px;
  padding-bottom: 30px;
}
</style>
