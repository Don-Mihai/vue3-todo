<template>
  <div class="app">

      <AsideRoute></AsideRoute>

      <div class="tasks-container">
        <h2 class="title">Важные</h2>
        <Tasks :tasks="tasks" @deleteTask="deleteTask" @finishTask="finishTask" @openDetail="openDetail" />
        <CreateTask @createTask="createTask" />
      </div>

      <TaskDetail :activeRow="activeRow" @closeDetail="closeDetail" @editTask="editTask" />
  </div>
</template>
<script>
import CreateTask from '@/components/CreateTask.vue'
import Tasks from '@/components/Tasks.vue'
import TaskDetail from '@/components/TaskDetail.vue'
import AsideRoute from '@/components/AsideRoute.vue'

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
  methods: {
    createTask(task) {
      this.tasks.push(task);
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      this.activeRow = null;
    },
    finishTask(payload) {
      const index = this.tasks.findIndex(task => task.id === payload.id);
      this.$set(this.tasks, index, payload);
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
  this.$set(this.tasks, index, payload);
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
