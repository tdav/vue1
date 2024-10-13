<template>
  <table class="table table-striped-columns">
    <thead>
      <tr>
        <th scope="col">Обший сумма излишек</th>
        <th scope="col">Обший кол-во вид лекарств</th>
        <th scope="col">Сумма недостачи</th>
        <th scope="col">Кол-во недостачи</th>
        <th scope="col">Вибор опарции</th>
        <th scope="col">Сумма наличными</th>
        <th scope="col">Сумма по терминалу</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr v-for="(item, index) in tableData" :key="index">
        <td class="ellipsis" scope="row">{{ item.field1 }}</td>
        <td class="ellipsis" scope="row">{{ item.field2 }}</td>
        <td class="ellipsis" scope="row">{{ item.field3 }}</td>
        <td class="ellipsis" scope="row">{{ item.field4 }}</td>
        <td class="ellipsis" scope="row">{{ item.field5 }}</td>
        <td class="ellipsis" scope="row">{{ item.field6 }}</td>
        <td class="ellipsis" scope="row">{{ item.field7 }}</td>
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

<style scoped></style>
