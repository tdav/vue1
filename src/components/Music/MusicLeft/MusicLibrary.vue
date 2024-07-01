<template> 
        <p v-show="data.title != ''" class="mt-4 myTitle ">
            {{ data.title }}
            <slot></slot>        
        </p>

        <div class=" list-group rtyu">
            <a v-for="it in data.item" :key="it.id" :href="it.path" class="list-group-item list-group-item-action cvbn menuItem">
                <img :src=" require( `../../../assets/img/${it.iconUrl}`)" alt="1" class="logo-image">
                <p    class="items123 menuSelectActive ">{{ it.name }}</p>
            </a>
        </div>

</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    data: {}
});


</script>

<style scoped>

 .logo-image{
  padding-right: 5px;
 }

.cvbn {
  background-color: #1c1c1c;
  color: rgba(255, 255, 255, 0.64);
  display: inline-block;
  height: 30px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #212121;
}

.cvbn:hover {
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
  color: white;
}

.rtyu {
  border-radius: 0%;
}

.menuItem {
    width: 224px;
    height: 40px;
    gap: 0px;
    opacity: 0px;
    margin-right: 8px;


}

.myTitle {
    color: rgba(255, 255, 255, 0.72);
    font-size: 12px;
    font-weight: 700;
    line-height: 16.39px;
    letter-spacing: 0.16em;
    margin-left: 2rem;
    display: flex;
}

.items123 {
    height: 34px;
}
</style>