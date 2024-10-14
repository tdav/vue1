<template>
  <div class="container">
    <div class="YourFullName">
      <!-- To'liq Ism uchun input -->
      <div class="full-name mb-1">
        <label for="fullName" class="form-label mt-2 ms-1">To'liq Ismingiz</label>
        <input type="text" id="fullName" class="form-control" v-model="fullName" />
      </div>

      <!-- Tug'ilgan sana uchun inputlar -->
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

      <!-- Yuborish tugmasi -->
      <button @click="submit" class="btn btn-primary mt-2">Yuborish</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Inputlar uchun reactive o'zgaruvchilar
const fullName = ref("");
const day = ref(null);
const month = ref(null);
const year = ref(null);

// 'submit' eventini chiqarishga ruxsat berish
const emit = defineEmits(["submit"]);

// submit funksiyasi
const submit = () => {
  const birthDate = {
    day: day.value,
    month: month.value,
    year: year.value,
  };

  // 'submit' eventini yuborish va formani tozalash
  emit("submit", {
    fullName: fullName.value,
    birthDate,
  });

  // Formani tozalash
  fullName.value = "";
  day.value = "";
  month.value = "";
  year.value = "";
};
</script>

<style scoped>
.YourFullName {
  background-color: rgb(72, 78, 88);
  margin-top: 3rem;
  border-radius: 6px;
  padding-top: 10px;
  color: #ffff;
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
