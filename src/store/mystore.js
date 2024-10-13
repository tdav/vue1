import { reactive, readonly, computed } from "vue";

const state = reactive({
  keyWord: "good"
});

function changeKeyWord(value) {
  state.keyWord = value;
}

const upperCasedKeyWord = computed(() => state.keyWord.toUpperCase());

export const store = readonly({
  state,
  changeKeyWord,
  upperCasedKeyWord
});
