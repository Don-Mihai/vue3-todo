<template>
  <div class="wrapper">
    <div class="main">
      <div class="tasks">
        <div @click="(e, task) => setActiveRow(task)" class="task" v-for="task in tasks">
          {{task.text}}
          <span @click="() => handleDelete(task.id)" class="icon-delete">X</span>
        </div>
      </div>
      <input type="text" class="input" v-model="text" @keyup="createTask">
    </div>

    <aside class="detail">
      {{ activeRow.text }}
    </aside>
  </div>
</template>


<script>
export default {
  data() {
    return {
      counter: 10,
      text: '',
      tasks: [],
      activeRow: {}
    }
  },
  methods: {
    createTask(e) {
      if(e.keyCode === 13) {
        this.tasks.push({
          id: Math.random(),
          text: this.text
        })
        this.text = ''
      }
      
    },
    handleDelete(idTask) {
      this.tasks = this.tasks.filter((item) => item.id !==  idTask)
    },
    setActiveRow(row) {
      console.log(row)
      this.activeRow = {row}
      console.log(this.activeRow)
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

.tasks {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.task {
  position: relative;
  padding: 15px 20px;
  background-color: #EEEEEE;

  &:hover {
    background-color: lighten($color: #EEEEEE, $amount: 1%);
  }
}

.icon-delete {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.input {
  width: 100%;
  padding: 15px 20px;
}

.detail {
  width: 300px;
  background-color: #E8D5C4;
  height: 100%;
}
</style>
