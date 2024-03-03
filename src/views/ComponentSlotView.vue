<template>
  <div class="home">
    <h3>Component page</h3>
    <br>
    <br>
    <ComponentSlot>Slot1</ComponentSlot><br>
    <ComponentSlot>
      <h3>Slot2</h3>
    </ComponentSlot><br>
    <ComponentSlot>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
    </ComponentSlot><br>
  </div>
</template>

<script setup>
import ComponentSlot from '@/components/ComponentSlot.vue'
</script>
