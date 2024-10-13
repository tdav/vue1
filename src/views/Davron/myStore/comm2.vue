<template>
    <div>
       <h3>COM2</h3>
        <input :value="store.state.keyWord" @input="changeKeyWord" />
        <br>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()


function changeKeyWord(evt) {
    this.store.changeKeyWord(evt.target.value);
}

</script>

<style></style>