<template>
  <div v-if="path != '/Music'" style="height: 100vh">
    <div class="d-flex" id="wrapper">
      <div class="border-end" id="sidebar-wrapper">
        <div class="sidebar-heading border-bottom my-menu-color">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-bootstrap my-icon button btn"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"
            />
            <path
              d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"
            />
          </svg>

          <a>Bootstrap</a>
        </div>

        <nav class="list-group list-group-flush">
          <!-- ------------------------------------------------------------------ -->
          <div class="accordion">
            <div class="accordion-item">
              <h2 class="accordion-header menu-header" id="headingFive">
                <button
                  class="accordion-button my-menu"
                  :class="{ collapsed: !isOpen5 }"
                  type="button"
                  @click="toggle5"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-list distance"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                  </svg>

                  <p class="list-name">Main</p>
                </button>
              </h2>

              <div
                id="collapseFive"
                class="accordion-collapse collapse menu-collapse"
                :class="{ show: isOpen5 }"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
                :style="{ backgroundColor: '#282f39' }"
              >
                <RouterLink
                  class="list-group-item list-group-item-action list-group-item-light ps-5"
                  to="/valuable"
                  >1 - O`zgaruvchi</RouterLink
                >
                <RouterLink
                  class="list-group-item list-group-item-action list-group-item-light ps-5"
                  to="/shartli"
                  >2 - ShartliOperator</RouterLink
                >
                <RouterLink
                  class="list-group-item list-group-item-action list-group-item-light ps-5"
                  to="/array"
                  >3 - Array
                </RouterLink>
                <RouterLink
                  class="list-group-item list-group-item-action list-group-item-light ps-5"
                  to="/table"
                  >4 - Table
                </RouterLink>
                <RouterLink
                  class="list-group-item list-group-item-action list-group-item-light ps-5"
                  to="/component"
                  >5 - Components</RouterLink
                >
                <RouterLink
                  class="list-group-item list-group-item-action list-group-item-light ps-5"
                  to="/slot"
                  >6 - Component Slot</RouterLink
                >
              </div>
            </div>
          </div>
          <!------------------------------------------------------------------>
          <div class="accordion">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingthree">
                <button
                  class="accordion-button my-menu"
                  :class="{ collapsed: !isOpen3 }"
                  type="button"
                  @click="toggle3"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-person-circle distance jhg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                  Davron
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                :class="{ show: isOpen3 }"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
                :style="{ backgroundColor: '#262b33' }"
              >
                <div class="accordion-bod p-0">
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/storeDavron"
                  >
                    Store
                  </router-link>
                </div>

                <div class="accordion-bod p-0">
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/DavronV7"
                  >
                    Test1
                  </router-link>
                </div>

                <div class="accordion-bod p-0">
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/DavronDom"
                  >
                    TestDom
                  </router-link>
                </div>

                <div class="accordion-bod p-0">
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/login"
                  >
                    Login
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!------------------------------------------------------------------>
          <div class="accordion">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button
                  class="accordion-button my-menu"
                  :class="{ collapsed: !isOpen4 }"
                  type="button"
                  @click="toggle4"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-person distance jhg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                    />
                  </svg>
                  <p>Azizbek</p>
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                :class="{ show: isOpen4 }"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
                :style="{ backgroundColor: '#44AFF2' }"
              >
                <div class="accordion-body p-0">
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/Aziz"
                  >
                    Operators
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/newOperators"
                  >
                    NewOperators
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/Loop"
                  >
                    Loop
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/js_dom"
                  >
                    DOM
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/js_dom_2"
                  >
                    DOM 2
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/age"
                  >
                    Age
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/vue_3"
                  >
                    Vue 3
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/formControl"
                  >
                    Form controls
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/DataTable"
                  >
                    Data Table
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light"
                    to="/user"
                  >
                    Login up
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!------------------------------------------------------------------>
          <div class="accordion">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button my-menu"
                  :class="{ collapsed: !isOpen1 }"
                  type="button"
                  @click="toggle1"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-person distance jhg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                    />
                  </svg>
                  Jasur
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                :class="{ show: isOpen1 }"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
                :style="{ backgroundColor: '#282f39' }"
              >
                <div class="accordion-body p-0">
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/Jasur"
                  >
                    7 - Jasur
                  </router-link>
                </div>
                <div
                  class="accordion-body p-0"
                  :style="{ border: '1px solid #262b33' }"
                ></div>
              </div>
            </div>
          </div>
          <!------------------------------------------------------------------>
          <div class="accordion">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button my-menu"
                  :class="{ collapsed: !isOpen2 }"
                  type="button"
                  @click="toggle2"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-person-fill distance jhg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                    />
                  </svg>
                  Omon
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                :class="{ show: isOpen2 }"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
                :style="{ backgroundColor: '#282f39' }"
              >
                <div class="accordion-bod p-0">
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/omon_todo"
                  >
                    Omon
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/operatorlar"
                  >
                    operatorlar
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/sikllar"
                  >
                    Sikllar
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/function"
                  >
                    Function
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/dom"
                  >
                    Dom
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/dom2"
                  >
                    Dom2
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/vazifa1"
                  >
                    Vazifa 1
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/vazifa2"
                  >
                    Vazifa 2
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/formControlOmon"
                  >
                    forms controls
                  </router-link>

                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/tablesAndTodo"
                  >
                    table and ToDo
                  </router-link>

                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/profile"
                  >
                    Profile
                  </router-link>

                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light ps-5"
                    to="/Store"
                  >
                    Store
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- ---------------------------------------------------------------------------------------------------------------------------- -->
          <RouterLink
            class="list-group-item list-group-item-action list-group-item-light my-menu"
            to="/music"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-music-note-beamed"
              viewBox="0 0 16 16"
            >
              <path
                d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2"
              />
              <path fill-rule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z" />
              <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z" />
            </svg>
            Music
          </RouterLink>

          <RouterLink
            class="list-group-item list-group-item-action list-group-item-light my-menu"
            style="border-top: 1px solid #737c8a"
            to="/about"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-exclamation-circle"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
              />
              <path
                d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"
              />
            </svg>
            About
          </RouterLink>
        </nav>
      </div>

      <div id="page-content-wrapper" style="height: 100vh; overflow-x: auto">
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div class="container-fluid">
            <!-- <button class="btn btn-primary" id="sidebarToggle">Toggle Menu</button> -->
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" href="#!">Home</a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {{ fullName }}
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <a class="dropdown-item" href="#!">Action</a>
                    <a class="dropdown-item" href="#!">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#!">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { computed } from "vue";
import { useStore } from "vuex";

// Route path
const route = useRoute();
const path = computed(() => route.path);

// Accordion states
const isOpenDavron = ref(false);
const toggleDavron = () => {
  isOpenDavron.value = !isOpenDavron.value;
};

const isOpen2 = ref(false);

const toggle2 = () => {
  isOpen2.value = !isOpen2.value;
};

const isOpen3 = ref(false);

const toggle3 = () => {
  isOpen3.value = !isOpen3.value;
};

const isOpen4 = ref(false);

const toggle4 = () => {
  isOpen4.value = !isOpen4.value;
};

const isOpen5 = ref(false);

const toggle5 = () => {
  isOpen5.value = !isOpen5.value;
};

const isOpen1 = ref(false);

const toggle1 = () => {
  isOpen1.value = !isOpen1.value;
};

const store = useStore();

// fullName ni getterdan olish
const fullName = computed(() => store.getters.gts_fullName);
</script>

<style scoped>
.accordion-button.collapsed[data-v-7ba5bd90] {
  background-color: #3a3f48;
  width: 184px;
}

.distance {
  margin-right: 5px;
  height: 30px;
  width: 30px;
}

.accordion-button.collapsed {
  background-color: #3a3f48;
}

.accordion-button.collapsed::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.border-end {
  width: 260px;
  padding: 16px;
  background-color: #414751;
}

.accordion-button:not(.collapsed) {
  background-color: #3a3f48;
  color: white;
}

.menu-header {
  background-color: #3a3f48;
  color: white;
}

.list-group-item-light {
  background-color: #3a3f48;
  color: white;
  border-width: 0;
  border: none;
  border-radius: none;
}

.accordion {
  background-color: #414751;
  border-width: 0;
  border: none;
  width: 228px;
  border-radius: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
}

.accordion-item {
  background-color: #484e58;
  border-width: 0;
  border: none;
  border-radius: none;
}

.my-icon {
  width: 60px;
  height: 65px;
  color: white;
  border: #3a3f48;
}

.my-menu-color {
  background-color: #414751;
  color: white;
}

.my-menu {
  background-color: #484e58;
  color: white;
  border-color: #414751;
  border: none;
  height: 44px;
}

.my-menu-item {
  background-color: #414751;
  color: #ffff;
  border: none;
}

:after {
  color: red;
}

.accordion-button:focus :after {
  background: #3a3f48;
}

p {
  margin-bottom: 0px;
}

.accordion-header {
  margin-bottom: 0;
  background: #3a3f48;
}

.accordion-item:last-of-type > .accordion-header .accordion-button.collapsed {
  border-bottom-right-radius: var(--bs-accordion-inner-border-radius);
  border-bottom-left-radius: var(--bs-accordion-inner-border-radius);
  padding-left: 12px;
}

.accordion-button:focus {
  /* z-index: 3; */
  /* border-color: var(--bs-accordion-btn-focus-border-color); */
  outline: 0;
  box-shadow: var(--bs-accordion-btn-focus-box-shadow);
}

.accordion-button:focus {
  box-shadow: none; /* Fokus holatida soya ko'rsatmaydi */
}
.accordion-button.collapsed[data-v-7ba5bd90]::after {
  display: none;
}

.accordion-button:not(.collapsed)::after {
  display: none;
}

.list-group-item-light[data-v-7ba5bd90] {
  padding-left: 62px;
}

.list-group {
  background: #3a3f48;
}

.accordion-header[data-v-7ba5bd90] {
  margin-bottom: 0;
  background: #3a3f48;
  padding-left: 16px;
}

#sidebar-wrapper {
  margin-left: 0;
  background: #484e58;
}

.about-list {
  margin-bottom: -21.4rem;
}

.my-menu-color[data-v-7ba5bd90] {
  background-color: #3a3f48;
  color: white;
}

#sidebar-wrapper[data-v-7ba5bd90] {
  margin-left: 0;
  background: #3a3f48;
}

.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
  background: #3a3f48;
}

.my-menu[data-v-7ba5bd90] {
  background-color: #3a3f48;
  color: white;
  border-color: #3a3f48;
  border: none;
  height: 44px;
}
.list-group-item-light[data-v-7ba5bd90][data-v-7ba5bd90][data-v-7ba5bd90] {
  padding-left: 4rem !important;
}
</style>

<!-- style="background-color: #282f39" -->
