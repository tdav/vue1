<template>
  <div class="app">
    <h1>Mahsulotlar</h1>
    <div class="products">
      <div v-for="product in products" :key="product.id" class="product">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <button @click="addToCart(product)">Korzinkaga qo'shish</button>
      </div>
    </div>

    <div class="cart-icon" @click="toggleCart">🛒 {{ cartItemCount }} ta mahsulot</div>

    <div v-if="isCartOpen" class="cart-overlay" @click="toggleCart">
      <div class="cart" @click.stop>
        <h2>Korzinka</h2>
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <p>Miqdori: {{ item.quantity }}</p>
          <div class="quantity-controls">
            <button @click="increaseQuantity(item.id)">+</button>
            <button @click="decreaseQuantity(item.id)">-</button>
          </div>
          <input v-model="item.comment" placeholder="Izoh qo'shish" />
        </div>
        <button class="close-btn" @click="toggleCart">Yopish</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";

// State
const state = reactive({
  products: [
    { id: 1, name: "Mahsulot 1", description: "Bu mahsulot 1 tavsifi" },
    { id: 2, name: "Mahsulot 2", description: "Bu mahsulot 2 tavsifi" },
    // Qo'shimcha mahsulotlar...
  ],
  cart: [],
  isCartOpen: false,
});

// Getters
const cartItemCount = computed(() => {
  return state.cart.reduce((total, item) => total + item.quantity, 0);
});

// Mutations
function ADD_TO_CART(product) {
  const cartItem = state.cart.find((item) => item.id === product.id);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    state.cart.push({ ...product, quantity: 1, comment: "" });
  }
}

function INCREASE_QUANTITY(id) {
  const cartItem = state.cart.find((item) => item.id === id);
  if (cartItem) cartItem.quantity++;
}

function DECREASE_QUANTITY(id) {
  const cartItem = state.cart.find((item) => item.id === id);
  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity--;
  } else if (cartItem) {
    const index = state.cart.indexOf(cartItem);
    state.cart.splice(index, 1);
  }
}

function TOGGLE_CART() {
  state.isCartOpen = !state.isCartOpen;
}

// Actions
function addToCart(product) {
  ADD_TO_CART(product);
}

function increaseQuantity(id) {
  INCREASE_QUANTITY(id);
}

function decreaseQuantity(id) {
  DECREASE_QUANTITY(id);
}

function toggleCart() {
  TOGGLE_CART();
}

// Mahsulotlar ro'yxatini olish getter orqali
const products = computed(() => state.products);
const cart = computed(() => state.cart);
const isCartOpen = computed(() => state.isCartOpen);
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

h1 {
  color: #333;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.product {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product h3 {
  margin: 0;
  color: #555;
}

.product p {
  font-size: 14px;
  color: #777;
  margin: 10px 0;
}

.product button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.product button:hover {
  background-color: #45a049;
}

.cart-icon {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #333;
  color: white;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
}

.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.cart h2 {
  margin: 0;
  color: #333;
}

.cart-item {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
}

.cart-item h3 {
  margin: 0;
  color: #555;
}

.cart-item p {
  font-size: 14px;
  color: #777;
}

.quantity-controls {
  display: flex;
  gap: 5px;
  margin-top: 10px;
}

.quantity-controls button {
  background-color: #ddd;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.quantity-controls button:hover {
  background-color: #bbb;
}

input {
  width: 100%;
  margin-top: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.close-btn {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease;
}

.close-btn:hover {
  background-color: #555;
}
</style>
