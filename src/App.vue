<template>
  <div class="wrapper">
    <div class="main">
      <Tasks @deleteTask="handleDelete" @finishTask="editTask" @clickTask="setActiveRow" :hideDetail="hideDetail" :tasks="tasks"></Tasks>
      <CreateTask @createTask="addTask"></CreateTask>
    </div>

    <TaskDetail :activeRow={activeRow} @editTask="editTask" v-if="showDetail"></TaskDetail>
  </div>
</template>


<script>
import CreateTask from './components/CreateTask.vue'
import Tasks from './components/Tasks.vue'
import TaskDetail from './components/TaskDetail.vue'



export default {
  components: {
    CreateTask,
    Tasks,
    TaskDetail
  },
  data() {
    return {
      counter: 10,
      text: '',
      tasks: [],
      activeRow: {},
      showDetail: false,
    }
  },
  methods: {
    addTask(task) {
      this.tasks.push(task)
    },
    hideDetail() {
      this.showDetail = false
    },
    handleDelete(idTask) {
      this.tasks = this.tasks.filter((item) => item.id !==  idTask)
    },
    setActiveRow(row) {
      this.activeRow = {...row}
      this.showDetail = true
    },
    editTask(task) {
      const index = this.tasks.findIndex((item) => item.id === task.id)
      this.tasks[index] = task

      console.log(this.tasks)
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

.wrapper {
  display: flex;
  height: 100%;
}

.main {
  width: 100%;
}
</style>
