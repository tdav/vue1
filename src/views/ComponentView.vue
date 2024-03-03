<template>
  <div class="home">
   <h3>Component page</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import Component1 from '@/components/Component1.vue'

export default {
  name: 'HomeView',
   components: {
    Component1
   }
}
</script>
