<template>
  <form class="p-3 bg-secondary-subtle text-start" @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="user1">Пользователь</label>
      <input class="form-control mt-2" type="text" required id="user1" v-model="user1" />
    </div>
    <div class="mb-3">
      <label for="user2">Дистрибутор</label>
      <input class="form-control mt-2" type="text" required id="user2" v-model="user2" />
    </div>
    <div class="mb-3">
      <label for="user22">Тип операции</label>
      <input class="form-control mt-2" type="text" required id="user22" v-model="user22" />
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
        <input class="form-control mt-1" type="text" required id="expiration1" v-model="expiration1" />
      </div>
      <div class="ms-2 w-50">
        <label for="expiration2">Срок годности ( по )</label>
        <input class="form-control mt-1" type="text" required id="expiration2" v-model="expiration2" />
      </div>
    </div>
    <div class="w-100">
      <label for="series">Серия</label>
      <input class="form-control mt-1" type="text" required id="series" v-model="series" />
    </div>
    <div class="w-100">
      <label for="extraCharge">Наценка</label>
      <input class="form-control mt-1" type="text" required id="extraCharge" v-model="extraCharge" />
    </div>
    <div class="w-100">
      <label for="price">Цена</label>
      <input class="form-control mt-1" type="number" required id="price" v-model="price" />
    </div>
    <div class="d-flex justify-content-start mb-3">
      <div class="w-50">
        <label for="quantity1">Количество ( с )</label>
        <input class="form-control mt-1" type="text" required id="quantity1" v-model="quantity1" />
      </div>
      <div class="ms-2 w-50">
        <label for="quantity2">Количество ( по )</label>
        <input class="form-control mt-1" type="text" required id="quantity2" v-model="quantity2" />
      </div>
    </div>
    <div class="d-flex justify-content-start mb-3">
      <div class="w-50">
        <label for="currentCode1">Текушее код ( с )</label>
        <input class="form-control mt-1" type="text" required id="currentCode1" v-model="currentCode1" />
      </div>
      <div class="ms-2 w-50">
        <label for="currentCode2">Текушее код ( по )</label>
        <input class="form-control mt-1" type="text" required id="currentCode2" v-model="currentCode2" />
      </div>
    </div>
    <button class="btn btn-primary ms-auto d-block" type="submit">Submit</button>
  </form>

  <!-- Table -->
  <table class="table mt-3">
    <thead>
      <tr class="table-secondary">
        <th scope="col">#</th>
        <th scope="col">Пользователь</th>
        <th scope="col">Дистрибутор</th>
        <th scope="col">Тип операции</th>
        <th scope="col">Дата операции (с)</th>
        <th scope="col">Дата операции (по)</th>
        <th scope="col">Документ</th>
        <th scope="col">Штрих-код</th>
        <th scope="col">Название препарата</th>
        <th scope="col">Срок годности (с)</th>
        <th scope="col">Срок годности (по)</th>
        <th scope="col">Серия</th>
        <th scope="col">Наценка</th>
        <th scope="col">Цена</th>
        <th scope="col">Количество (с)</th>
        <th scope="col">Количество (по)</th>
        <th scope="col">Текушее код (с)</th>
        <th scope="col">Текушее код (по)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(record, index) in records" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ record.user1 }}</td>
        <td>{{ record.user2 }}</td>
        <td>{{ record.user22 }}</td>
        <td>{{ record.dateFrom }}</td>
        <td>{{ record.dateTo }}</td>
        <td>{{ record.docNumber }}</td>
        <td>{{ record.barcode }}</td>
        <td>{{ record.extraField }}</td>
        <td>{{ record.expiration1 }}</td>
        <td>{{ record.expiration2 }}</td>
        <td>{{ record.series }}</td>
        <td>{{ record.extraCharge }}</td>
        <td>{{ record.price }}</td>
        <td>{{ record.quantity1 }}</td>
        <td>{{ record.quantity2 }}</td>
        <td>{{ record.currentCode1 }}</td>
        <td>{{ record.currentCode2 }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      user1: '',
      user2: '',
      user22: '',
      dateFrom: '',
      dateTo: '',
      docNumber: '',
      barcode: '',
      extraField: '',
      expiration1: '',
      expiration2: '',
      series: '',
      extraCharge: '',
      price: '',
      quantity1: '',
      quantity2: '',
      currentCode1: '',
      currentCode2: '',
      records: []
    };
  },
  methods: {
    handleSubmit() {
      this.records.push({
        user1: this.user1,
        user2: this.user2,
        user22: this.user22,
        dateFrom: this.dateFrom,
        dateTo: this.dateTo,
        docNumber: this.docNumber,
        barcode: this.barcode,
        extraField: this.extraField,
        expiration1: this.expiration1,
        expiration2: this.expiration2,
        series: this.series,
        extraCharge: this.extraCharge,
        price: this.price,
        quantity1: this.quantity1,
        quantity2: this.quantity2,
        currentCode1: this.currentCode1,
        currentCode2: this.currentCode2
      });
      this.clearForm();
    },
    clearForm() {
      this.user1 = '';
      this.user2 = '';
      this.user22 = '';
      this.dateFrom = '';
      this.dateTo = '';
      this.docNumber = '';
      this.barcode = '';
      this.extraField = '';
      this.expiration1 = '';
      this.expiration2 = '';
      this.series = '';
      this.extraCharge = '';
      this.price = '';
      this.quantity1 = '';
      this.quantity2 = '';
      this.currentCode1 = '';
      this.currentCode2 = '';
    }
  }
};

</script>
