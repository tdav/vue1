import { reactive } from 'vue';

// LocalStorage'dan kartadagi ma'lumotlarni olish
const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

const state = reactive({
  products: [
    { id: 1, name: 'Coca-Cola', price: "0.8", image: 'https://avatars.mds.yandex.net/i?id=b13d01e5115085c573ad731cef974fd90b38475d-10910368-images-thumbs&n=13', quantity: 0 },
    { id: 2, name: 'Palov', price: "1.7", image: 'https://avatars.mds.yandex.net/i?id=ad426a385ae78152230215faacf19eb06020645b-10848343-images-thumbs&n=13', quantity: 0 },
    { id: 3, name: 'Manti', price: "2.3", image: 'https://avatars.mds.yandex.net/i?id=369b784c39f0836d75935234e6d8d5998dd19bc6-5018050-images-thumbs&n=13', quantity: 0 },
    { id: 4, name: 'Somsa', price: "1.1", image: 'https://avatars.mds.yandex.net/i?id=5e81d69dad3aba0d4b5a96cbf3be5346e790df10-10416881-images-thumbs&n=13', quantity: 0 },
    { id: 5, name: 'Pepsi', price: "2.5", image: 'https://avatars.mds.yandex.net/i?id=f8fe8dacfd16e33d0286f1250220fb59_l-5268512-images-thumbs&n=13', quantity: 0 },
    { id: 6, name: 'Mastava', price: "0.6", image: 'https://avatars.mds.yandex.net/i?id=e33edfce70987cefc9f952fc1ad7a079f5d2ba4d7c605acb-12529607-images-thumbs&n=13', quantity: 0 },
    { id: 7, name: "Sho'rva", price: "1.5", image: 'https://avatars.mds.yandex.net/i?id=a5550f60df3c95eb379b88d62715d41623e54177-5214861-images-thumbs&n=13', quantity: 0 },
  ],
  cart: storedCart // LocalStorage'dan olingan kart ma'lumotlari bilan boshlaymiz
});

const getters = {
  cartItems: () => state.cart,
  totalPrice: () => state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
};

const mutations = {
  addToCart(product) {
    const item = state.cart.find((p) => p.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      state.cart.push({ ...product, quantity: 1 });
    }
    // Kartadagi ma'lumotlarni LocalStorage'ga saqlash
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  removeFromCart(productId) {
    const index = state.cart.findIndex((p) => p.id === productId);
    if (index !== -1) {
      state.cart[index].quantity--;
      if (state.cart[index].quantity <= 0) {
        state.cart.splice(index, 1);
      }
    }
    // Kartadagi ma'lumotlarni LocalStorage'ga saqlash
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  clearCart() {
    state.cart = [];
    // Kartani bo'shatib, LocalStorage'ni yangilash
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }
};

const actions = {
  addProductToCart(product) {
    mutations.addToCart(product);
  },
  removeProductFromCart(productId) {
    mutations.removeFromCart(productId);
  },
  clearCart() {
    mutations.clearCart();
  }
};

export default { state, getters, actions };
