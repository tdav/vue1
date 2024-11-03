<template>
    <div style="background-color: bisque;">
    Value: {{ count }}
    <button @click="increment">+</button >    
  </div>
</template>

<script>

import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      count: computed(() => store.getters.gts_count), 
      increment: () => store.dispatch('ACTION_INC'),
    }
  }
}
</script>

<style></style>
