<template>
  <div class="w-50 mt-3 text-start">
    <h1 class="bg-secondary modal-title fs-5 p-2" id="exampleModalLabel">
      Условия для поиска
    </h1>
    <form class="p-3 bg-secondary-subtle text-start" @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="user1">Пользователь</label>
        <input class="form-control mt-2" type="text" required id="user1" v-model="user1" />
      </div>
      <div class="mb-3">
        <label for="user2">Дистрибутор</label>
        <input class="form-control mt-2" type="text" required id="user2" v-model="user2" />
      </div>
      <div class="d-flex justify-content-start mb-3">
        <div class="w-50">
          <label for="user3">Дата операции ( с )</label>
          <input class="form-control mt-1" type="date" required id="user3" v-model="dateFrom" />
        </div>
        <div class="ms-2 w-50">
          <label for="user4">Дата операции ( по )</label>
          <input class="form-control mt-1" type="date" required id="user4" v-model="dateTo" />
        </div>
      </div>
      <div class="mb-3">
        <label for="docNumber">Документ</label>
        <input class="form-control mt-1" type="text" required id="docNumber" v-model="docNumber" />
      </div>
      <div class="mb-3">
        <label for="barcode">Штрих-код</label>
        <input class="form-control mt-1" type="number" required id="barcode" v-model="barcode" />
      </div>
      <div class="mb-3">
        <label for="extraField">Название препарата</label>
        <input class="form-control mt-1" type="text" required id="extraField" v-model="extraField" />
      </div>
      <div class="d-flex justify-content-start mb-3">
        <div class="w-50">
          <label for="expiration1">Срок годности ( с )</label>
          <input class="form-control mt-1" type="text" required id="expiration1" v-modal="expiration1"/>
        </div>
        <div class="ms-2 w-50">
          <label for="expiration2">Срок годности ( по )</label>
          <input class="form-control mt-1" type="text" required id="expiration2" v-modal="expiration2"/>
        </div>
      </div>
      <div class="w-100">
        <label for="series">Серия</label>
        <input class="form-control mt-1" type="text" required id="series" v-modal="series"/>
      </div>
      <div class="w-100">
        <label for="extraCharge">Наценка</label>
        <input class="form-control mt-1" type="text" required id="extraCharge" v-modal="extraCharge"/>
      </div>
      <div class="w-100">
        <label for="price">Цена</label>
        <input class="form-control mt-1" type="number" required id="price" v-modal="price"/>
      </div>
      <div class="d-flex justify-content-start mb-3">
        <div class="w-50">
          <label for="quantity1">Количество ( с )</label>
          <input class="form-control mt-1" type="text" required id="quantity1" v-modal="quantity1"/>
        </div>
        <div class="ms-2 w-50">
          <label for="quantity2">Количество ( по )</label>
          <input class="form-control mt-1" type="text" required id="quantity2" v-modal="quantity2" />
        </div>
      </div>
      <div class="d-flex justify-content-start mb-3">
        <div class="w-50">
          <label for="currentCode1">Текушее код ( с )</label>
          <input class="form-control mt-1" type="text" required id="currentCode1" v-model="currentCode1"/>
        </div>
        <div class="ms-2 w-50">
          <label for="currentCode2">Текушее код ( по )</label>
          <input class="form-control mt-1" type="text" required id="currentCode2" v-model="currentCode2"/>
        </div>
      </div>
      <button class="btn btn-primary ms-auto d-block" type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const user1 = ref('');
const user2 = ref('');
const dateFrom = ref('');
const dateTo = ref('');
const docNumber = ref('');
const barcode = ref('');
const extraField = ref('');
const expiration1 = ref('');
const expiration2 = ref('');
const series = ref('');
const extraCharge = ref('');
const price = ref('');
const quantity1 = ref('');
const quantity2 = ref('');
const currentCode1 = ref('');
const currentCode2 = ref('');

const handleSubmit = () => {
  console.log("User:", user1.value);
  console.log("Distributor:", user2.value);
  console.log("Date (from):", dateFrom.value);
  console.log("Date (to):", dateTo.value);
  console.log("Document:", docNumber.value);
  console.log("Barcode:", barcode.value);
  console.log("Drug name:", extraField.value);
  console.log("Expiration1:", expiration1.value);
  console.log("Expiration2:", expiration2.value);
  console.log("Series:", series.value);
  console.log("Extra Charge:", extraCharge.value);
  console.log("Price:", price.value);
  console.log("Quantity1:", quantity1.value);
  console.log("Quantity2:", quantity2.value);
  console.log("Current Code1:", currentCode1.value);
  console.log("Current Code2:", currentCode2.value);
  
  user1.value = ""
  user2.value = ""
  dateFrom.value = ""
  dateTo.value = ""
  docNumber.value = ""
  barcode.value = ""
  extraField.value = ""
  expiration1.value = ""
  expiration2.value = ""
  series.value = ""
  extraCharge.value = ""
  price.value = ""
  quantity1.value = ""
  quantity2.value = ""
  currentCode1.value = ""
  currentCode2.value = ""
};
</script>
