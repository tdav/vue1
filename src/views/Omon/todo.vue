<template>
    <div class="container">
        <!-- Yangi element qo'shish uchun kiritish maydoni va tugma -->
        <div class="row">
            <div class="col">
                <input type="text" class="razmeri" v-model="msg">
                <button @click="OnCreate" class="Qushish-tugmasi">Qo'shish</button>
            </div>
        </div>

        <!-- Vazifa ro'yxati bo'limi -->
        <div class="row">
            <div class="col">
                <h3>Vazifa Ro'yxati</h3>
                <ul class="list-group">
                    <li v-for="it in list" :key="it.id">
                        <input type="checkbox" v-model="it.checked" @change="handleCheck(it)" />
                        <p class="mytext ms-2"> {{ it.name }}</p>
                        <button @click="clearCompleted(it)" class="ochirish-tugmasi">O'chirish</button>
                        <button @click="editItem(it)" class="tahrirlash-tugmasi">Tahrirlash</button>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Bajarilgan vazifalar ro'yxati bo'limi -->
        <div class="row">
            <div class="col">
                <h3 class="mt-4">Bajarilgan</h3>
                <ul class="list-group mt-3">
                    <li v-for="it in donelist" :key="it.id">
                        <input type="checkbox" v-model="it.checked" @change="handleCheck(it)" />
                        <p class="mytext ms-2"> {{ it.name }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([]); // Asosiy vazifa ro'yxati
const donelist = ref([]); // Bajarilgan vazifalar ro'yxati

let msg = ref(""); // Kiritish maydoni uchun o'zgaruvchi

// Vazifani qo'shish funktsiyasi
function OnCreate() {
    if (msg.value.trim() === "") return; // Bo'sh vazifa qo'shishni to'xtatish

    const newItem = {
        id: Date.now(), // Vaqtstempel bo'yicha xususiylangan ID
        checked: false,
        name: msg.value.trim()
    };

    msg.value = ""; // Kiritish maydonini tozalash

    list.value.push(newItem); // Vazifani asosiy ro'yxatga qo'shish
}

// Checkbox holatini boshqarish funktsiyasi
function handleCheck(item) {
    if (item.checked) {
        // Vazifani bajarilganlar ro'yxatiga ko'chirish
        list.value = list.value.filter(it => it.id !== item.id);
        donelist.value.push(item);
    } else {
        // Vazifani qayta asosiy ro'yxatga qaytarish
        donelist.value = donelist.value.filter(it => it.id !== item.id);
        list.value.push(item);
    }
}

// Vazifa nomini tahrirlash funktsiyasi
function editItem(item) {
    const newName = prompt("Yangi vazifa nomini kiriting:", item.name);
    if (newName && newName.trim() !== "") {
        item.name = newName.trim();
    }
}

// Bajarilgan vazifalarni o'chirish funktsiyasi
function clearCompleted(item) {
    if (item.checked) {
        donelist.value = donelist.value.filter(it => it.id !== item.id);
    } else {
        list.value = list.value.filter(it => it.id !== item.id);
    }
}
</script>

<style scoped>
.mytext {
    font-size: medium;
    font-weight: 500;
}

.Qushish-tugmasi {
    background: green;
    border: 2px solid rgb(2, 77, 2);
    color: black;
    margin-left: 0.5rem; /* Tugmalar orasidagi bo'shliqni sozlash */
    border-radius: 10px;
}

.razmeri {
    width: 17rem;
    height: 2rem;
}

.ochirish-tugmasi {
    background: red;
    border: 2px solid rgb(84, 5, 5);
    color: black;
    margin-left: 0.5rem; /* Tugmalar orasidagi bo'shliqni sozlash */
    border-radius: 10px;   
}

.tahrirlash-tugmasi {
    background-color: blue;
    border: 2px solid rgb(4, 4, 95);
    color: black;
    margin-left: 0.5rem; /* Tugmalar orasidagi bo'shliqni sozlash */
    border-radius: 10px; 

}
</style>
