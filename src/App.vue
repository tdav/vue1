<template>


  <div v-if="path != '/Music'">
    <div class="d-flex" id="wrapper">

      <div v-if="path != '/Music'" class="border-end bg-white" id="sidebar-wrapper">
        <div class="sidebar-heading border-bottom bg-light jhgjk"> tart Bootstrap
        </div>
        <div class="list-group list-group-flush">
          <a class="list-group-item list-group-item-action list-group-item-light dhg " href="/">Main</a>
          <a class="list-group-item list-group-item-action list-group-item-light dhg" href="/valuable">1 -
            O`zgaruvchi</a>
          <a class="list-group-item list-group-item-action list-group-item-light dhg" href="/shartli">2 - Shartli
            Operator</a>
          <a class="list-group-item list-group-item-action list-group-item-light dhg" href="/array">3 - Array</a>
          <a class="list-group-item list-group-item-action list-group-item-light dhg" href="/table">4 - Table</a>
          <a class="list-group-item list-group-item-action list-group-item-light dhg" href="/component">5 -
            Component</a>
          <a class="list-group-item list-group-item-action list-group-item-light dhg" href="/slot">6 - Component
            Slot</a>
          <a class="list-group-item list-group-item-action list-group-item-light dhg" href="/DavronV7">7 - Davron</a>
          <a class="list-group-item list-group-item-action list-group-item-light dhg" href="/Jasur">7 - Jasur</a>
          <a class="list-group-item list-group-item-action list-group-item-light dhg" href="/newjasur7">7 -
            newjasur7</a>
          <a class="list-group-item list-group-item-action list-group-item-light dhg" href="/Music">Music</a>


          <a class="list-group-item list-group-item-action list-group-item-light dhg" href="/davron_todo">Davron
            Todo</a>
          <a class="list-group-item list-group-item-action list-group-item-light dhg" href="/jasur_todo">Jasur
            Todo</a>


          <a class="list-group-item list-group-item-action list-group-item-light dhg" href="/omon_todo">Omon Todo</a>



          <a class="list-group-item list-group-item-action list-group-item-light dhg" href="/about">About</a>
        </div>
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
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute();
const path = computed(() => route.path)

console.log(path);

</script>

<style scoped>
.dhg {
  height: 42px;
}

.jhgjk {
  background-color: #1e222a !important;
 color: #e5e9f0;
}
</style>
