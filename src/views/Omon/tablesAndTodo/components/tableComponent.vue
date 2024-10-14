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
        <td>{{ item.field1 }}</td>
        <td>{{ item.field2 }}</td>
        <td>{{ item.field3 }}</td>
        <td>{{ item.field4 }}</td>
        <td>{{ item.field5 }}</td>
        <td>{{ item.field6 }}</td>
        <td>{{ item.field7 }}</td>
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
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

table {
  height: 20px;
}

thead {
  height: 0px;
}

/* th {
  
} */
</style>
