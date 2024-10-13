<template>
    <table>
      <thead>
        <tr>
          <th>Distributor</th>
          <th>User</th>
          <th>Operation Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <td>{{ item.distributor }}</td>
          <td>{{ item.user }}</td>
          <td>{{ item.operationType }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  const props = defineProps({
    tableData: {
      type: Array,
      required: true,
    },
  });
  </script>
  