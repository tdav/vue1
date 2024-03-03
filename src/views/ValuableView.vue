<template>

    <h3>Valuable page</h3>

    <p>{{ msg }}</p>

    <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Label</label>
        <input type="text" class="form-control" v-model="msg">
    </div>

</template>

<script setup>
import { ref } from 'vue';

let msg = ref("comp msg11141")

</script>