<template>
    <div>
      <SearchForm @search="updateTableData" />
      <DataTable :tableData="filteredData" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import SearchForm from './components/SearchForm.vue';
  import DataTable from './components/DataTable.vue';
  
  const allData = ref([
    { distributor: 'Distributor 1', user: 'User 1', operationType: 'Type 1' },
    { distributor: 'Distributor 2', user: 'User 2', operationType: 'Type 2' },
  ]);
  
  const filteredData = ref(allData.value);
  
  const updateTableData = (formData) => {
    filteredData.value = allData.value.filter(item =>
      item.user.includes(formData.user)
    );
  };
  </script>
  