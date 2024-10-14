<template>
  <div>
    <div class="icon-section">
      <!-- Tugmalar: save, eksport, info, close -->
      <button @click="showModal = true" class="buttons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-clipboard-check-fill button-icon"
          viewBox="0 0 16 16"
        >
          <path
            d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
          />
          <path
            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708"
          />
        </svg>
        <p>save</p>
      </button>
      <button class="buttons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-file-arrow-up-fill button-icon2"
          viewBox="0 0 16 16"
        >
          <path
            d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M7.5 6.707 6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0z"
          />
        </svg>
        <p>eksport</p>
      </button>
      <button class="button3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-info-square-fill button-icon3"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
          />
        </svg>
        <p>info</p>
      </button>
      <button class="buttons" @click="closePage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-square-fill button-icon4 grd"
          viewBox="0 0 16 16"
        >
          <path
            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"
          />
        </svg>
        <p>close</p>
      </button>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal">
      <div class="modal-content content-border">
        <p class="mijoz">Завершиния инвентаризации</p>
        <div class="section-one">
          <h6 class="section-one_text">
            <p class="ttile">излишки как приход</p>
          </h6>
          <div>
            <label class="labels">обший сумма излишек</label>
            <input v-model="newData.field1" placeholder="" class="inputs" />
          </div>
          <div class="mt-1">
            <label class="labels">обший кол-во лекарств</label>
            <input v-model="newData.field2" placeholder="" class="inputs" />
          </div>
        </div>
        <div class="section-two mt-2">
          <h6 class="section-one_text">
            <p class="ttile">списание недоcтачи</p>
          </h6>
          <div>
            <label class="labels cumma-nedostachi">Сумма недоcтачи</label>
            <input v-model="newData.field3" placeholder="" class="inputs" />
          </div>
          <div class="kol-vo_nedostachi mt-2">
            <label class="labels">кол-во недоcтачи</label>
            <input v-model="newData.field4" placeholder="" class="inputs" />
          </div>
          <div>
            <label class="labels mt-2">вибор операции</label>
            <select class="inputs" v-model="newData.field5">
              <option value="0"></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="section-three mt-2">
          <h6 class="section-one_text">
            <p class="ttile">cумма продажи</p>
          </h6>
          <div>
            <label class="labels">сумма наличыми</label>
            <input v-model="newData.field6" placeholder="" class="inputs" />
          </div>
          <div class="mt-1">
            <label class="labels">Сумма по терминалу</label>
            <input v-model="newData.field7" placeholder="" class="inputs" />
          </div>
        </div>
        <div class="button section-four mt-3">
          <button @click="addData" class="add-info mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-clipboard2-check-fill add-info"
              viewBox="0 0 16 16"
            >
              <path
                d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"
              />
              <path
                d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5m6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708"
              />
            </svg>
          </button>
          <button @click="closeModal" class="closed-modal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-file-x-fill closed-modal"
              viewBox="0 0 16 16"
            >
              <path
                d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M6.854 6.146 8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 1 1 .708-.708"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits();
const showModal = ref(false);
const newData = ref({
  field1: "",
  field2: "",
  field3: "",
  field4: "",
  field5: "",
  field6: "",
  field7: "",
});

const closePage = () => {
  window.close();
};

const closeModal = () => {
  showModal.value = false;
  resetForm();
};

const resetForm = () => {
  newData.value = {
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
    field7: "",
  };
};

const addData = () => {
  const dataToSend = { ...newData.value };
  emit("add-data", dataToSend);
  closeModal();
};
</script>

<style scoped>
.modal {
  display: flex;
}
.modal-content {
  background-color: #e6eaed;
  margin: 5% 2%;
  margin-left: 28rem;
  margin-right: 28rem;
  padding: 100px;
  height: 33rem;
  top: -45px;
  border: 1px solid #888;
  border-radius: 0px;
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.icon-section {
  border-left: 1px;
  width: 100%;
  position: relative;
  display: inline-block;
  margin-left: -62rem;
}
.buttons {
  height: 100px;
  width: 75px;
  border-right: 1px solid black;
  padding-top: 50px;
  background: #ffff;
}

.buttons:hover {
  background: #d9dee2;
}

.button3 {
  height: 100px;
  width: 75px;
  padding-top: 50px;
  background: #ffff;
}

.button3:hover {
  background: #d9dee2;
}
.content-border {
  border: 1px solid grey;
  padding: 5px;
}
.mijoz {
  background: #31475e;
  margin-top: -4.8px;
  margin-left: -5px;
  margin-right: -5px;
  height: 25px;
  color: #ffff;
  text-align: left;
  padding-left: 5px;
  align-items: center;
}

.content-border[data-v-35f96196] {
  border-radius: 0px;
}

.section-one {
  border: 1px solid #cfd4d8;
  margin-left: 10px;
  margin-right: 10px;
  display: block;
  padding-bottom: 8px;
}

.section-two {
  border: 1px solid #cfd4d8;
  margin-left: 10px;
  margin-right: 10px;
  display: block;
  padding-bottom: 8px;
}

.section-three {
  border: 1px solid #cfd4d8;
  margin-left: 10px;
  margin-right: 10px;
  display: block;
  padding-bottom: 8px;
}

.section-four {
  border: 1px solid #cfd4d8;
  margin-left: 10px;
  margin-right: 10px;
  display: block;
  width: 97%;
  padding-left: 78%;
  padding-top: 5px;
}

.section-one_text {
  text-align: center;
  background: #d8dde1;
  height: 35px;
  padding-left: 5px;
}
.inputs {
  width: 65%;
  height: 29.2px;
  border: 1px solid #cfd4d8;
}

.inputs:focus-visible {
  border: 1px solid #cfd4d8;
}

.labels {
  width: 30%;
  color: #82838b;
}

.ttile {
  float: left;
  color: #5e676f;
  padding-top: 5px;
}

.closed-modal {
  height: 50px;
  width: 50px;
  color: red;
  background-color: #e6eaed;
}

.add-info {
  height: 50px;
  width: 50px;
  color: green;
  display: inline-block;
  background-color: #e6eaed;
}

.button {
  color: red;
}

.button-icon {
  color: green;
  height: 35px;
  width: 70px;
  margin-top: -50px;
  margin-left: -3px;
}

.button-icon2 {
  height: 35px;
  width: 70px;
  margin-top: -50px;
  margin-left: -3px;
  color: rgb(181, 158, 6);
}

.button-icon3 {
  height: 35px;
  width: 70px;
  margin-top: -50px;
  margin-left: -3px;
  color: #5c887e;
}

.button-icon4 {
  color: #b33d2a;
  height: 35px;
  width: 70px;
  margin-top: -50px;
  margin-left: -3px;
}

p {
  margin-top: -1px;
}
</style>
