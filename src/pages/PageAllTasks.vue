<template>
  <div class="app">

    <AsideRoute></AsideRoute>

    <div class="tasks-container">
      <h2 class="title">Все задачи</h2>
      <Tasks :tasks="tasks" @deleteTask="deleteTask" @finishTask="finishTask" @openDetail="openDetail" />
      <CreateTask @createTask="createTask" />
    </div>

    <TaskDetail :activeRow="activeRow" @closeDetail="closeDetail" @editTask="editTask" />
  </div>
</template>
<script>
import Vue from 'vue'
import CreateTask from '@/components/CreateTask.vue'
import Tasks from '@/components/Tasks.vue'
import TaskDetail from '@/components/TaskDetail.vue'
import AsideRoute from '@/components/AsideRoute.vue'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Tasks,
    TaskDetail,
    CreateTask,
    AsideRoute
  },
  data() {
    return {
      tasks: [],
      activeRow: null
    }
  },
  created() {
    this.getTasks();
  },
  methods: {
    async getTasks() {
      try {
        const response = await axios.get('https://644c112517e2663b9dff6599.mockapi.io/tasks');
        this.tasks = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async finishTask(payload, isChecked) {
      const index = this.tasks.findIndex(task => task.id === payload.id);
      console.log(isChecked)
      if(isChecked) {
        // перенос из задачи в завершенные задачи
        await axios.post('https://644c112517e2663b9dff6599.mockapi.io/finshedTasks', this.tasks[index] )
        await axios.delete(`https://644c112517e2663b9dff6599.mockapi.io/tasks/${payload.id}`)
      } else {
        // перенос из завершенных в обычные
        await axios.post('https://644c112517e2663b9dff6599.mockapi.io/tasks', this.tasks[index] )
        await axios.delete(`https://644c112517e2663b9dff6599.mockapi.io/finshedTasks/${payload.id}`)
      }
      
    },
    async createTask(task) {
      this.tasks.push(task);
      await axios.post('https://644c112517e2663b9dff6599.mockapi.io/tasks', task )
    },
    async deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      this.activeRow = null;
      await axios.delete(`https://644c112517e2663b9dff6599.mockapi.io/tasks/${taskId}`)
    },
    openDetail(taskId) {
      const activeRow = this.tasks.find(task => task.id === taskId);
      this.activeRow = { activeRow };
    },
closeDetail() {
  this.activeRow = null;
},
editTask(payload) {
  const index = this.tasks.findIndex(task => task.id === payload.id);
  this.tasks[index] = payload
  this.closeDetail();
}

}
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  height: 100%;
}

.tasks-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.title {
  padding: 30px;
  color: #212A3E;
}
</style>
