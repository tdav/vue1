<template>
  <div class="container">
    <div class="bg-secondary-subtle rounded-2 p-2">
      <div class="mb-3">
        <form>
          <label for="exampleFormControlInput1" class="form-label"
            >Your Full Name</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter full name"
          />
        </form>
      </div>
      <div class="row g-3">
        <div class="col-lg-3">
          <form>
            <label for="exampleFormControlInput1" class="form-label"
              >Date of Birth</label
            >

            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput"
              placeholder="Day"
            />
          </form>
        </div>
        <div class="col-lg-3">
          <form>
            <label for="exampleFormControlInput1" class="form-label"
              >Date of Month</label
            >

            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput"
              placeholder="Month"
            />
          </form>
        </div>
        <div class="col-lg-6">
          <form>
            <label for="exampleFormControlInput1" class="form-label"
              >Date of Year</label
            >

            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput"
              placeholder="Year"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
