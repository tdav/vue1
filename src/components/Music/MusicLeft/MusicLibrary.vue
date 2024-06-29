<template>
    <p class="mt-4 ms-5 myTitle">
        {{ data.title }}
        <slot ></slot>
        
    </p>

    <div class=" list-group ps-4 rtyu">
        <a v-for="it in data.item" :key="it.id" :href="it.path" class="list-group-item list-group-item-action cvbn menuItem">
            <img :src=" require( `../../../assets/img/${it.iconUrl}`)" alt="1" class="imgages-logog ">
            <p class="items123 menuSelectActive ">{{ it.name }}</p>
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


/* .menuSelectActive:hover{
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
  border-right: 4px solid  rgba(29, 185, 84, 1);
  color: white;
} */

.qwer {
  height: 139vh;
}

.cvbn {
  background-color: #212121;
  color: rgba(255, 255, 255, 0.64);
  border-left: -33px;
  border-bottom: none;
  border-top: none;
  display: inline-block;
  height: 30px;
}

.cvbn:hover {
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
  color: white;
}

.cvbn:focus  {
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
  color: white;
}

.img-logo123  {

}


.dfghjk:active {
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
  color: white;
}

.rtyu {
  border-radius: 0%;
}

.menuItem {
    width: 200px;
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
    text-align: left;
}

.items123 {
    height: 34px;
}
</style>