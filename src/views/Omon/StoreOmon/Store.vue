<template>
  <div id="app">
    <header>
      <h1>Online Do'kon</h1>
      <button @click="showCart = !showCart" class="cart-button">
        🛒 Korzinka
        <span v-if="cartItems.length > 0" class="cart-count">{{ totalItemsInCart }}</span>
      </button>
    </header>

    <main>
      <div class="product-list">
        <div class="product-card" v-for="product in products" :key="product.id">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p>Price: {{ product.price }} $</p>
          <div class="button-group">
            <button @click="addProduct(product)" class="add-button">Qo'shish</button>
          </div>
        </div>
      </div>
    </main>

    <div v-if="showCart" class="cart-offcanvas">
      <h2>Korzinka</h2>
      <ul>
        <li v-for="item in cartItems" :key="item.id" class="cart-item">
          <div class="cart-item-image">
            <img :src="item.image" :alt="item.name" />
          </div>
          <div class="cart-item-details">
            <span class="cart-item-name">{{ item.name }}</span>
            <span class="cart-item-price">{{ item.price }} $</span>
            <span class="cart-item-quantity">{{ item.quantity }} ta</span>
          </div>
          <div class="cart-item-actions">
            <button @click="addProduct(item)" class="cart-item-button">+</button>
            <button @click="removeProduct(item.id)" class="cart-item-button">-</button>
          </div>
        </li>
      </ul>
      <p>
        <strong>Umumiy hisob: {{ totalPrice }} $</strong>
      </p>
      <button @click="showCart = false" class="close-button">Yopish</button>

      <button @click="openPurchaseModal" class="close-button">Sotib olish</button>

      <!-- Modal -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <span @click="showModal = false" class="close-icon">×</span>
          <h3>Sotib olish uchun ma'lumotlarni kiriting</h3>
          <form @submit.prevent="submitPurchase">
            <div>
              <label for="name">Ism:</label>
              <input v-model="formData.name" id="name" type="text" required />
            </div>
            <div>
              <label for="surname">Familiya:</label>
              <input v-model="formData.surname" id="surname" type="text" required />
            </div>
            <div>
              <label for="phone">Telefon raqami:</label>
              <input v-model="formData.phone" id="phone" type="tel" required />
            </div>
            <div>
              <label for="age">Yosh:</label>
              <input v-model="formData.age" id="age" type="number" min="1" required />
            </div>
            <div>
              <div class="stars">
                <span
                  v-for="star in 5"
                  :key="star"
                  class="star"
                  @click="setRating(star)"
                  :class="{ active: rating >= star }"
                >
                  ★
                </span>
              </div>
            </div>

            <!-- Tanlangan mahsulotlarni ko'rsatish -->
            <div>
              <p>TotalPrice:{{ totalPrice }}</p>
            </div>

            <button type="submit" class="submit-button">Sotib olish</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import store from "../../../store/storeMarket";

const { state, getters, actions } = store;

const products = state.products;
const cartItems = getters.cartItems();
const totalPrice = computed(() => {
  return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
});
const addProduct = actions.addProductToCart;
const removeProduct = actions.removeProductFromCart;
const showCart = ref(false);

// Calculate the total number of items in the cart
const totalItemsInCart = computed(() => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
});

const showModal = ref(false); // Modalni ko'rsatish o'zgaruvchisi
const formData = ref({
  name: "",
  surname: "",
  phone: "",
  age: "",
});
const rating = ref(0);

const openPurchaseModal = () => {
  showModal.value = true; // Modalni ochish
};

const setRating = (star) => {
  rating.value = star; // Yulduzlarni belgilash
};

const submitPurchase = () => {
  // Bu yerda sotib olishni amalga oshiradigan logika qo'yish mumkin
  console.log("Sotib olish amalga oshdi:", formData.value, "Baholash:", rating.value);
  showModal.value = false; // Modalni yopish
};
</script>

<style scoped>
/* Modal stilini qo'shish */
#name {
  height: 35px;
}

#surname {
  height: 35px;
}

#age {
  height: 35px;
}

#phone {
  height: 35px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.modal-content h3 {
  margin-bottom: 15px;
  font-size: 20px;
  color: #2c3e50;
}

.stars {
  font-size: 30px;
  color: #f1c40f;
  display: flex;
  justify-content: center;
  gap: 5px;
}

.star {
  cursor: pointer;
  color: #bdc3c7; /* Initial star color (white) */
  transition: color 0.3s;
}

.star.active {
  color: #f39c12; /* Active star color (yellow) */
}

form div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #34495e;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  color: #2c3e50;
}

input[type="tel"],
input[type="text"],
input[type="number"] {
  background-color: #f9f9f9;
}

.submit-button {
  background-color: #2c3e50;
  padding: 12px;
  color: white;
  border: none;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
  border-radius: 6px;
}

.submit-button:hover {
  background-color: #34495e;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #2c3e50;
  cursor: pointer;
}

.close-icon:hover {
  color: #e74c3c;
}

/* Header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #1a1a1a;
  color: #fff;
}
header h1 {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}
.cart-button {
  position: relative;
  background-color: #2c3e50;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
}
.cart-button:hover {
  background-color: #34495e;
}
.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #e74c3c;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

/* Product list */
.product-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
}
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.product-card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
.product-card img {
  max-width: 90px;
  margin-bottom: 8px;
}
.product-card h3 {
  font-size: 16px;
  margin: 8px 0;
  color: #2c3e50;
}
.product-card p {
  font-size: 14px;
  color: #666;
}
.button-group {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.add-button {
  background-color: #2c3e50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
}

.add-button:hover {
  background-color: #34495e;
  transform: scale(1.1);
}

.add-button:active {
  transform: scale(0.95);
}

/* Cart Offcanvas */
.cart-offcanvas {
  position: fixed;
  right: 0;
  top: 0;
  width: 450px; /* Increase the width */
  height: 100%;
  background: #f4f6f9;
  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.2);
  padding: 30px;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
}

.cart-offcanvas h2 {
  font-size: 20px;
  font-weight: bold;
  color: #34495e;
  margin-bottom: 20px;
}

.cart-offcanvas ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-item {
  display: flex;
  gap: 20px; /* Increased gap for image and details */
  margin-bottom: 20px;
  font-size: 16px;
  color: #2c3e50;
}

.cart-item-image {
  flex: 0 0 80px; /* Set a fixed width for the image */
}

.cart-item-image img {
  max-width: 100%;
  height: auto;
}

.cart-item-details {
  display: flex;
  flex-direction: column; /* Stack name and price vertically */
  flex: 1;
}

.cart-item-name {
  font-weight: bold;
}

.cart-item-price {
  color: #e74c3c;
}

.cart-item-quantity {
  font-size: 14px;
  color: #555;
}

.cart-item-actions {
  display: flex;
  gap: 10px;
  flex-direction: column;
}

.cart-item-button {
  background-color: #2c3e50;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  color: white;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  min-width: 32px;
}

.cart-item-button:hover {
  background-color: #34495e;
}

.cart-offcanvas p {
  font-size: 18px;
  font-weight: bold;
  color: #34495e;
  text-align: right;
  margin-top: 20px;
}

.cart-offcanvas p strong {
  color: #e74c3c;
}

/* Close button */
.close-button {
  background-color: #2c3e50;
  padding: 12px;
  margin-top: 15px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.close-button:hover {
  background-color: #34495e;
}

/* Mahsulotlar rasmning simmetrik o'lchamlarini to'g'irlash */
.product-card img {
  width: 100px; /* O'lchamini belgilash */
  height: 100px; /* O'lchamini belgilash */
  object-fit: cover; /* Rasmning o'lchamiga mos kelishini ta'minlash */
  border-radius: 8px; /* Yuqori burchaklarni yumshatish */
  background-color: transparent; /* Orqa fonni olib tashlash */
  margin-bottom: 8px;
}
</style>
