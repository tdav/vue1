<template>
  <table>
    <thead>
      <tr>
        <th>Обший сумма излишек</th>
        <th>Обший кол-во вид лекарств</th>
        <th>Сумма недостачи</th>
        <th>Кол-во недостачи</th>
        <th>Вибор опарции</th>
        <th>Сумма наличными</th>
        <th>Сумма по терминалу</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in tableData" :key="index">
        <td class="ellipsis">{{ item.field1 }}</td>
        <td class="ellipsis">{{ item.field2 }}</td>
        <td class="ellipsis">{{ item.field3 }}</td>
        <td class="ellipsis">{{ item.field4 }}</td>
        <td class="ellipsis">{{ item.field5 }}</td>
        <td class="ellipsis">{{ item.field6 }}</td>
        <td class="ellipsis">{{ item.field7 }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
table {
  width: 101.8%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 5px;
  text-align: center;
  border-top: 2px solid black;
}

th {
  height: 10px;
}

td {
  height: auto; /* Hujayra balandligini avtomatik qilish */
}

/* Ellipsis class for handling text overflow */
.ellipsis {
  max-height: 40px; /* Hujayra balandligini belgilang */
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
