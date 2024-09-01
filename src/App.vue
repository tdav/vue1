<template>
  <div v-if="path != '/Music'" style="height: 100vh">
    <div class="d-flex" id="wrapper">
      <div
        v-if="path != '/Music'"
        class="border-end"
        id="sidebar-wrapper"
        style="background-color: #282f39"
      >
        <div class="sidebar-heading border-bottom" style="color: #e5e9f0">Bootstrap</div>

        <nav class="list-group list-group-flush">
          <RouterLink
            class="list-group-item list-group-item-action list-group-item-light dhg"
            to="/"
            >Main</RouterLink
          >
          <RouterLink
            class="list-group-item list-group-item-action list-group-item-light dhg"
            to="/valuable"
            >1 - O`zgaruvchi</RouterLink
          >
          <RouterLink
            class="list-group-item list-group-item-action list-group-item-light dhg"
            to="/shartli"
            >2 - ShartliOperator</RouterLink
          >
          <RouterLink
            class="list-group-item list-group-item-action list-group-item-light dhg"
            to="/array"
            >3 - Array
          </RouterLink>
          <RouterLink
            class="list-group-item list-group-item-action list-group-item-light dhg"
            to="/table"
            >4 - Table
          </RouterLink>
          <RouterLink
            class="list-group-item list-group-item-action list-group-item-light dhg"
            to="/component"
            >5 - Component</RouterLink
          >
          <RouterLink
            class="list-group-item list-group-item-action list-group-item-light dhg"
            to="/slot"
            >6 - Component Slot</RouterLink
          >
          <!-- <RouterLink class="list-group-item list-group-item-action list-group-item-light dhg" to="/DavronV7">7 - Davron
          </RouterLink> -->
          <!-- <RouterLink class="list-group-item list-group-item-action list-group-item-light dhg" to="/Jasur">7 - Jasur
          </RouterLink> -->
          <RouterLink
            class="list-group-item list-group-item-action list-group-item-light dhg"
            to="/Music"
            >Music
          </RouterLink>
          <!-- <RouterLink class="list-group-item list-group-item-action list-group-item-light dhg" to="/omon_todo">Omon
          </RouterLink> -->
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingthree">
                <button
                  class="accordion-button"
                  :class="{ collapsed: !isOpen3 }"
                  :style="{ backgroundColor: '#262b33', color: 'white', border: 'none' }"
                  type="button"
                  @click="toggle3"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Davron
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                :class="{ show: isOpen3 }"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
                :style="{ backgroundColor: '#282f39' }"
              >
                <div class="accordion-bod p-0" :style="{ border: '1px solid white' }">
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light"
                    to="/DavronV7"
                  >
                    Test1
                  </router-link>
                </div>

                <div class="accordion-bod p-0" :style="{ border: '1px solid white' }">
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light"
                    to="/DavronDom"
                  >
                    TestDom
                  </router-link>
                </div>
              </div>
            </div>
          </div>
            <div class="accordion" id="accordionExample">
             <div class="accordion-item">
               <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button" :class="{ collapsed: !isOpen4 }"
                    :style="{ backgroundColor: '#282f39', color: 'white' }" type="button" @click="toggle4"
                   aria-expanded="false" aria-controls="collapseFour">
                    Azizbek
                 </button>
               </h2>
                <div id="collapseFour" class="accordion-collapse collapse" :class="{ show: isOpen4 }"
                 aria-labelledby="headingFour" data-bs-parent="#accordionExample" :style="{ backgroundColor: '#282f39' }">
                  <div class="accordion-body p-0" :style="{ border: '1px solid white' }">
                    <router-link class="list-group-item list-group-item-action list-group-item-light" to="/Aziz">
                      Operators
                    </router-link>
                    <router-link class="list-group-item list-group-item-action list-group-item-light" to="/newOperators">
                      NewOperators
                    </router-link>
                    <router-link class="list-group-item list-group-item-action list-group-item-light" to="/Loop">
                      Loop
                    </router-link>
                    <router-link class="list-group-item list-group-item-action list-group-item-light" to="/js_dom">
                      DOM
                    </router-link>
                    <router-link class="list-group-item list-group-item-action list-group-item-light" to="/js_dom_2">
                       DOM 2
                    </router-link>
                    </div>
                </div>
               </div>
           </div>


          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  :class="{ collapsed: !isOpen }"
                  :style="{ backgroundColor: '#282f39', color: 'white' }"
                  type="button"
                  @click="toggle"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Jasur
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                :class="{ show: isOpen }"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
                :style="{ backgroundColor: '#282f39' }"
              >
                <div class="accordion-body p-0" :style="{ border: '1px solid white' }">
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light"
                    to="/Jasur"
                  >
                    7 - Jasur
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button"
                  :class="{ collapsed: !isOpen2 }"
                  :style="{ backgroundColor: '#262b33', color: 'white', border: 'none' }"
                  type="button"
                  @click="toggle2"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
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
                <div class="accordion-bod p-0" :style="{ border: '1px solid white' }">
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light"
                    to="/omon_todo"
                  >
                    Omon
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light"
                    to="/operatorlar"
                  >
                    operatorlar
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light"
                    to="/sikllar"
                  >
                    Sikllar
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light"
                    to="/function"
                  >
                    Function
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light"
                    to="/dom"
                  >
                    Dom
                  </router-link>
                  <router-link
                    class="list-group-item list-group-item-action list-group-item-light"
                    to="/dom2"
                  >
                    Dom2
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <RouterLink
            class="list-group-item list-group-item-action list-group-item-light dhg"
            to="/about"
            >About
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
                <li class="nav-item"><a class="nav-link" href="#!">Link</a></li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >Dropdown</a
                  >
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

    <!-- Fallback for '/Music' path -->
    <!-- <div v-else>
      <router-view></router-view>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { computed } from "vue";

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
</script>

<style scoped>
.dhg {
  height: 42px;
  background-color: #282f39;
  color: #e5e9f0;
  border: none;
}
.lkjnb :focus {
  color: red;
}
</style>
