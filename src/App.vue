<template>


  <div v-if="path != '/Music'">
    <div class="d-flex" id="wrapper">

      <div v-if="path != '/Music'" class="border-end" id="sidebar-wrapper" style="background-color: #282f39;">
        <div class="sidebar-heading border-bottom" style="color: #e5e9f0;"> Bootstrap        </div>


        <nav class="list-group list-group-flush">
          <RouterLink class="list-group-item list-group-item-action list-group-item-light dhg" to="/">Main</RouterLink>
          <RouterLink class="list-group-item list-group-item-action list-group-item-light dhg" to="/valuable">1 - O`zgaruvchi</RouterLink>
          <RouterLink class="list-group-item list-group-item-action list-group-item-light dhg" to="/shartli">2 - ShartliOperator</RouterLink>
          <RouterLink class="list-group-item list-group-item-action list-group-item-light dhg" to="/array">3 - Array</RouterLink>
          <RouterLink class="list-group-item list-group-item-action list-group-item-light dhg" to="/table">4 - Table</RouterLink>
          <RouterLink class="list-group-item list-group-item-action list-group-item-light dhg" to="/component">5 -
            Component</RouterLink>
          <RouterLink class="list-group-item list-group-item-action list-group-item-light dhg" to="/slot">6 - Component
            Slot</RouterLink>
          <RouterLink class="list-group-item list-group-item-action list-group-item-light dhg" to="/DavronV7">7 - Davron</RouterLink>
          <RouterLink class="list-group-item list-group-item-action list-group-item-light dhg" to="/Jasur">7 - Jasur</RouterLink>
          <RouterLink class="list-group-item list-group-item-action list-group-item-light dhg" to="/newjasur7">7 -
            newjasur7</RouterLink>
          <RouterLink class="list-group-item list-group-item-action list-group-item-light dhg" to="/Music">Music</RouterLink>


          <RouterLink class="list-group-item list-group-item-action list-group-item-light dhg" to="/davron_todo">Davron
            Todo</RouterLink>
          <RouterLink class="list-group-item list-group-item-action list-group-item-light dhg" to="/jasur_todo">Jasur
            Todo</RouterLink>


          <RouterLink class="list-group-item list-group-item-action list-group-item-light dhg" to="/omon_todo">Omon Todo</RouterLink>



          <RouterLink class="list-group-item list-group-item-action list-group-item-light dhg" to="/about">About</RouterLink>
        </nav>
      </div>

      <div id="page-content-wrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div class="container-fluid">
            <!-- <button class="btn btn-primary" id="sidebarToggle">Toggle Menu</button> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                <li class="nav-item active"><a class="nav-link" href="#!">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#!">Link</a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                  <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
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
  <div v-else>
    <router-view></router-view>
  </div>


</template>


<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute();
const path = computed(() => route.path)

console.log(path);

</script>

<style scoped>
.dhg {
  height: 42px;
  background-color: #282f39;
  color: #e5e9f0;
  border: none;
}

</style>
