<template>

    <h3>Array page</h3>

    <ul class="list-group" v-for="it in foodList" :key="it.id">
        <li class="list-group-item">Nomi:{{ it.name }} Narhi:{{ it.price }}</li>
    </ul>

</template>

<!-- https://vuejs.org/guide/essentials/list -->

<script setup>
import foodList from '../assets/jsonData/foods.json';
</script>