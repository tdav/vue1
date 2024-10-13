<template>

  <div class="bg-secondar m-5">
    <h1 class="modal-title fs-5" id="exampleModalLabel">Условия для поиска</h1>
    <form>
      <div>
        <label id="user">Пользватель</label> <br />
        <input class="w-100 mt-1 form-control" type="text" required id="user" />
      </div>
      <div>
        <label id="user">Дистрибутор</label> <br />
        <input class="w-100 mt-1 form-control" type="text" required id="user" />
      </div>
      <div class="d-flex justify-content-between">
        <div class="w-50">
          <label for="user1">Дата операцин ( с )</label>
          <input class="mt-1 form-control" type="date" required id="user1" />
        </div>
        <div class="w-50 ms-1">
          <label for="user2">Дата операцин ( по )</label>
          <input class="mt-1 form-control" type="date" required id="user2" />
        </div>
      </div>
      <div class="mt-2">
        <label id="user">Доскумент N</label> <br />
        <input class="w-100 mt-1 form-control" type="text" required id="user" />
      </div>
      <div class="mt-2">
        <label id="user">Щтрих-код</label> <br />
        <input
          class="w-100 mt-1 form-control"
          type="number"
          required
          id="user"
        />
      </div>
      <div class="mt-2">
        <label id="user"></label> <br />
        <input class="w-100 mt-1 form-control" type="text" required id="user" />
      </div>
      <br />
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
// import { reactive, defineEmits } from 'vue';

// const emit = defineEmits();

// const formData = reactive({
//   user: '',
// });

// const search = () => {
//   emit('search', { ...formData });
//   formData.user = '';
// };
</script>
