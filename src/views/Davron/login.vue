<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <label for="login" class="form-label">Telefon nomer</label>
                <input class="form-control form-control-sm" type="text" id="login" v-model="row.phoneNumber">
            </div>
            <div class="col-md-4 offset-md-4">
                <label for="lbPassowrd" class="form-label">Parol</label>
                <input class="form-control form-control-sm" type="password" id="lbPassowrd" v-model="row.password">
            </div>

            <br>
            <div class="col-md-4 offset-md-4">
                <button style="width: 150px;" type="button" @click="onSave" class="btn btn-success ">Tizimga
                    kirish</button>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axi from '../../utils/axios.js'

let row = ref({});
const router = useRouter()

function onSave() {

    row.value.lang = 'UZ';

    axi({ method: 'post', url: '/User/Login', data: row.value })
        .then(function (response) {

            if (response.data.isSuccess)
                router.push('/store')
            else
            alert(response.data.message)
        });

}

</script>