<template>
  <div class="forms">
    <div class="container">
      <!-- Fuqarolik inputi -->
      <div class="citizenShip mb-1">
        <label for="citizenship" class="form-label mt-2 ms-1">CitizenShip</label>
        <input type="text" class="form-control" id="citizenship" v-model="citizenship" />
      </div>

      <!-- Mamlakat inputi va datalist -->
      <div class="country">
        <label for="country" class="form-label">Country</label>
        <input
          class="form-control"
          list="datalistOptions"
          id="country"
          placeholder="Type to search..."
          v-model="country"
        />
        <datalist id="datalistOptions">
          <option value="San Francisco"></option>
          <option value="New York"></option>
          <option value="Seattle"></option>
          <option value="Los Angeles"></option>
          <option value="Chicago"></option>
        </datalist>
      </div>

      <!-- Telefon raqamlar (kun va kecha) -->
      <div class="">
        <div class="phone-number" style="width: 45%; display: inline-block">
          <label for="dayPhone" class="form-label">Day Phone</label>
          <input
            type="text"
            class="form-control"
            placeholder="(xxx)-xx-xxx-xx-xx"
            id="dayPhone"
            v-model="dayPhone"
          />
        </div>
        <div
          class="phone-number"
          style="width: 45%; display: inline-block; margin-left: 5%"
        >
          <label for="evePhone" class="form-label">Eve Phone</label>
          <input
            type="text"
            class="form-control"
            placeholder="(xxx)-xx-xxx-xx-xx"
            id="evePhone"
            v-model="evePhone"
          />
        </div>

        <!-- Manzil inputlari -->
        <div class="mt-1" style="width: 45%; display: inline-block">
          <label for="address" class="form-label">Address</label>
          <input
            type="text"
            class="form-control"
            placeholder="xx xx xx xx"
            id="address"
            v-model="address"
          />
        </div>
        <div class="mt-1" style="width: 45%; display: inline-block; margin-left: 5%">
          <label for="address2" class="form-label">Address 2</label>
          <input
            type="text"
            class="form-control"
            placeholder="xx xx xx xx"
            id="address2"
            v-model="address2"
          />
        </div>
        <div class="mt-1" style="width: 45%; display: inline-block">
          <label for="city" class="form-label">City</label>
          <input
            type="text"
            class="form-control"
            placeholder="xx xx xx xx"
            id="city"
            v-model="city"
          />
        </div>
        <div class="mt-1" style="width: 22.5%; display: inline-block; margin-left: 5%">
          <label for="state" class="form-label">State</label>
          <input type="text" class="form-control" id="state" v-model="state" />
        </div>
        <div class="mt-1" style="width: 20%; display: inline-block; margin-left: 2.5%">
          <label for="zipCode" class="form-label">Zip Code</label>
          <input type="text" class="form-control" id="zipCode" v-model="zipCode" />
        </div>
      </div>

      <!-- Yuborish tugmasi -->
      <button @click="submit" class="btn btn-primary mt-2">Yuborish</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Reactive o'zgaruvchilar
const citizenship = ref("");
const country = ref("");
const dayPhone = ref("");
const evePhone = ref("");
const address = ref("");
const address2 = ref("");
const city = ref("");
const state = ref("");
const zipCode = ref("");

// Eventni chiqarish uchun defineEmits
const emit = defineEmits(["submit"]);

// submit funksiyasi
const submit = () => {
  emit("submit", {
    citizenship: citizenship.value,
    country: country.value,
    dayPhone: dayPhone.value,
    evePhone: evePhone.value,
    address: address.value,
    address2: address2.value,
    city: city.value,
    state: state.value,
    zipCode: zipCode.value,
  });
};
</script>

<style scoped>
.forms {
  background-color: rgb(72, 78, 88);
  margin-top: 3rem;
  font-size: large;
  border-radius: 6px;
  padding-top: 10px;
  width: 98%;
  margin-left: 1%;
  padding-bottom: 30px;
  color: white;
}

.citizenShip {
  width: 45%;
  display: inline-block;
}

.country {
  width: 45%;
  display: inline-block;
  margin-left: 5%;
}
</style>
