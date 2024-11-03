<template>
  <div>
    Value: {{ count }}
    <button @click="increment"> куп * 5</button>

  </div>
</template>

<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const count = computed(() => {
  return store.getters.gts_count
})

function increment() {
  store.dispatch('ACTION_MX', 3)
}

</script>

<style></style>
