<template>
  <div>
    <form @submit.prevent="saveData">
      <label>
        Ism:
        <input v-model="ism" />
      </label>
      <br />
      <label>
        Familya:
        <input v-model="familya" />
      </label>
      <br />
      <button type="submit">Saqlash</button>
    </form>

    <h2>{{ fullName }}</h2>
    <!-- To'liq ismni chiqarish -->
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

// Form inputlarini yaratamiz
const ism = ref("");
const familya = ref("");

// Saqlash funksiyasi
const saveData = () => {
  store.dispatch("ACTION_SET_NAME", { ism: ism.value, familya: familya.value });
};

// fullName ni getterdan olish
const fullName = computed(() => store.getters.gts_fullName);
</script>
