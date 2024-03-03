<template>

  <div class="d-flex" id="wrapper">
    
    <div class="border-end bg-white" id="sidebar-wrapper">
      <div class="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
      <div class="list-group list-group-flush">
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/">Main</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/valuable">1 - O`zgaruvchi</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/shartli">2 - Shartli Operator</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/array">3 - Array</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/table">4 - Table</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/component">5 - Component</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/slot">6 - Component Slot</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/about">About</a>
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
                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Dropdown</a>
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




</template>

<style lang="scss"></style>
