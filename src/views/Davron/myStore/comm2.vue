<template>
  <div>
    <input :value="store.state.keyWord" @input="changeKeyWord" />
  </div>
</template>

<script>
export default {
  inject: ["store"],
  methods: {
    changeKeyWord(evt) {
      this.store.changeKeyWord(evt.target.value);
    },
  },
};
</script>

<style></style>
