<template>
  <div class="w-50 mt-3 text-start">
    <h1 class="bg-secondary modal-title fs-5 p-2" id="exampleModalLabel">
      Условия для поиска
    </h1>
    <form class="p-3 bg-secondary-subtle text-start">
      <div class="mb-3">
        <label for="user1">Пользватель</label>
        <input class="form-control mt-2" type="text" required id="user1" />
      </div>
      <div class="mb-3">
        <label for="user2">Дистрибутор</label>
        <input class="form-control mt-2" type="text" required id="user2" />
      </div>
      <div class="d-flex justify-content-start mb-3">
        <div class="w-50">
          <label for="user3">Дата операцин ( с )</label>
          <input class="form-control mt-1" type="date" required id="user3" />
        </div>
        <div class="ms-2 w-50">
          <label for="user4">Дата операцин ( по )</label>
          <input class="form-control mt-1" type="date" required id="user4" />
        </div>
      </div>
      <div class="mb-3">
        <label for="docNumber">Доскумент</label>
        <input class="form-control mt-1" type="text" required id="docNumber" />
      </div>
      <div class="mb-3">
        <label for="barcode">Щтрих-код</label>
        <input class="form-control mt-1" type="number" required id="barcode" />
      </div>
      <div class="mb-3">
        <label for="extraField">Название препарата</label>
        <input class="form-control mt-1" type="text" required id="extraField" />
      </div>
      <div class="d-flex justify-content-start mb-3">
        <div class="w-50">
          <label for="user3">Срок годности ( с )</label>
          <input class="form-control mt-1" type="text" required id="user3" />
        </div>
        <div class="ms-2 w-50">
          <label for="user4">Срок годности ( по )</label>
          <input class="form-control mt-1" type="text" required id="user4" />
        </div>
      </div>
      <div class="w-100">
        <label for="user3">Серия</label>
        <input class="form-control mt-1" type="text" required id="user3" />
      </div>
      <div class="w-100">
        <label for="user3">Наценка</label>
        <input class="form-control mt-1" type="text" required id="user3" />
      </div>
      <div class="w-100">
        <label for="user3">Цена</label>
        <input class="form-control mt-1" type="text" required id="user3" />
      </div>
      <div class="d-flex justify-content-start mb-3">
        <div class="w-50">
          <label for="user3">Количество ( с )</label>
          <input class="form-control mt-1" type="text" required id="user3" />
        </div>
        <div class="ms-2 w-50">
          <label for="user4">Количество ( по )</label>
          <input class="form-control mt-1" type="text" required id="user4" />
        </div>
      </div>
      <div class="d-flex justify-content-start mb-3">
        <div class="w-50">
          <label for="user3">Текушее код ( с )</label>
          <input class="form-control mt-1" type="text" required id="user3" />
        </div>
        <div class="ms-2 w-50">
          <label for="user4">Текушее код ( по )</label>
          <input class="form-control mt-1" type="text" required id="user4" />
        </div>
      </div>
      <button class="btn btn-primary ms-auto d-block" type="submit">
        Submit
      </button>
    </form>
  </div>
</template>
