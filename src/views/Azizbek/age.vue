<template>
    <div>
        <h1>Age: {{ age }} </h1>

        <input 
            type="number" 
            class="form-control w-25" 
            placeholder="Tug'ulgan yilingizni kiriting" 
            v-model="year" 
        />

        <button 
            class="btn btn-primary w-25" 
            @click="calculateAge"
        >
            Tug'ulgan yilingizni aniqla
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const year = ref('')
const age = ref(null)

function calculateAge() {
    const currentYear = new Date().getFullYear()
    age.value = currentYear - parseInt(year.value, 10)
}
</script>
