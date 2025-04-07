<template>
  <div class="home">
    <h3>Table page</h3>

    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="it in foodList" :key="it.id">
          <td class="table-primary">{{ it.id }}</td>
          <td class="table-primary">{{ it.name }}</td>
          <td class="table-primary">{{ it.description }}</td>
          <td class="table-primary">{{ it.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import foodList from "../assets/jsonData/foods.json";
</script>
