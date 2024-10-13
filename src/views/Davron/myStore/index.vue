<template>

    <comp1 />
    <comp2 />

    <div>
        Store Ichidan:<br /> {{ keyWord==null }}
    </div>

</template>

<script setup>
import comp1 from "./comm1.vue";
import comp2 from "./comm2.vue";

import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()


const keyWord = computed(()=>store.getters.keyWord)
//const size = computed(() => store.getters.GET_SIZE);

</script>
 