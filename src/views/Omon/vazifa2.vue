<template>
  <div class="todo-container">
    <h1>ToDo Ro'yxati</h1>

    <div class="input-group">
      <input v-model="newTask" placeholder="Yangi vazifa yozing" />
      <button @click="addTask">Qo'shish</button>
    </div>

    <p v-if="tasks.length === 0" class="no-tasks-message">
      Hech qanday vazifa mavjud emas
    </p>

    <ul class="task-list">
      <li v-for="(task, index) in tasks" :key="index" class="task-item">
        <input
          type="checkbox"
          :checked="task.completed"
          @change="toggleComplete(index)"
          class="task-checkbox"
        />
        <span :class="{ completed: task.completed }">{{ task.name }}</span>
        <button @click="removeTask(index)" class="remove-btn">O'chirish</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const newTask = ref("");
    const state = reactive({
      tasks: [],
    });

    const addTask = () => {
      if (newTask.value.trim() === "") {
        alert("Maydon bo'sh!");
        return;
      }
      state.tasks.push({ name: newTask.value, completed: false });
      newTask.value = "";
    };

    const removeTask = (index) => {
      state.tasks.splice(index, 1);
    };

    const toggleComplete = (index) => {
      state.tasks[index].completed = !state.tasks[index].completed;
    };

    return {
      newTask,
      tasks: state.tasks,
      addTask,
      removeTask,
      toggleComplete,
    };
  },
};
</script>

<style scoped>
.todo-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input[type="text"] {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.task-list {
  list-style-type: none;
  padding: 0;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: white;
  border-radius: 4px;
  margin-bottom: 10px;
}

.task-checkbox {
  cursor: pointer;
}

.remove-btn {
  background-color: #dc3545;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-btn:hover {
  background-color: #c82333;
}

.no-tasks-message {
  color: #888;
  font-style: italic;
}

.completed {
  text-decoration: line-through;
  color: #888;
}
</style>
