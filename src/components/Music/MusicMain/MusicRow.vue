<template>
    <div class="row p-0">
        <div class="col-1 p-0">
            <div class="row pt-2" style="height: 55px; text-align: center; align-items: center;">
                <p>{{ props.item.id }}</p>
            </div>
        </div>
        <div class="col-11 p-0">
            <div type="button" class="row" style=" height: 50px; width: 100%;">
                <img class="col-1 uewiu" :src=" require(`../../../assets/img/${it.imgUrl}`)" alt="img">
                <div class="col-4">
                    <p class="pt-3">{{ props.item.name }}</p>
                </div>
                <div class="col-3">
                    <p class="pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            class="bi bi-headphones mb-2" viewBox="0 0 16 16">
                            <path
                                d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
                        </svg>
                        {{ item.playCount }}
                    </p>
                </div>
                <div class="col-2" style="text-align: center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-clock mb-1 me-2" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>
                    <p class="pt-3">{{ props.item.time }}</p>
                </div>
                <div class="col-1" style="text-align: center">
                    <p class="pt-2">
                        <button @click="Toggle1()" id="btnh1" class="btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                            </svg>
                        </button>
                    </p>
                </div>
                <div class="col-1" style="text-align: center">
                    <p class="pt-3">{{ props.item.comment }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps,   onMounted } from 'vue';

const props = defineProps({ item: {} });

const myPath = ref("");
onMounted(() => {
    myPath.value =  props.item.imgUrl.value;
})

</script>