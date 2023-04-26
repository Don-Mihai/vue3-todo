<template>
  <div class="tasks">
    <div @click="(e) => this.$emit('clickTask', task)" class='class' v-for="task in tasks">
      <input class="checkbox" type="checkbox" @click="() => handleFinishTask(task)" >
      {{task.text}}
      <span @click="() => handleDelete(task.id)" class="icon-delete">X</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tasks',
  props: {
    tasks: Array
  },
  methods: {
    handleDelete(taskId) {
      this.$emit('deleteTask', taskId)
    },
    handleFinishTask(task) {

      const payload = {
        ...task,
        isFinished: true,
      }
      this.$emit('finishTask', payload)
    }
  }
}
</script>

<style scoped lang="scss">

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

</style>
