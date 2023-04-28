<template>
  <div class="app">

      <div class="tasks-container">
        <Tasks :tasks="tasks" @deleteTask="deleteTask" @finishTask="finishTask" @openDetail="openDetail" />
        <CreateTask @createTask="createTask" />
      </div>

      <TaskDetail :activeRow="activeRow" @closeDetail="closeDetail" @editTask="editTask" />

  </div>
</template>
<script>
import CreateTask from './components/CreateTask.vue'
import Tasks from './components/Tasks.vue'
import TaskDetail from './components/TaskDetail.vue'

export default {
  name: 'App',
  components: {
    Tasks,
    TaskDetail,
    CreateTask
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  height: 100vh;
}

.app {
  
}
</style>
