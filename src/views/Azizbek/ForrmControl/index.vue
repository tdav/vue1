<template>
    <div class="container ">
        <h1>Form Control</h1>
        <comFullName  class="mb-3"/>
        <comId class="mb-3"/>
        <comAddress class="mb-3"/>
        <comCheckbox class="mb-3"/>
        <comAddCheckbox />
    </div>
    
</template>
<script setup>
import comFullName from "./component/comFullName.vue";
import comId from "./component/comId.vue";
import comAddress from "./component/comAddress.vue";
import comCheckbox from "./component/comCheckbox.vue";
import comAddCheckbox from "./component/comAddCheckbox.vue";
</script>
<style scoped></style>
