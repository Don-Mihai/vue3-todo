<template>
  <div class="tasks">
    <div v-for="task in tasks" :key="task.id" class="task" @click="() => handleTaskClick(task)">
      <div class="task-info">
        <input type="checkbox" class="checkbox" @click.stop="handleFinishTask(task)">
        <span class="task-text">{{ task.text }}</span>
      </div>
      <div class="task-actions">
        <button class="delete-btn" @click.stop="() => handleDelete(task.id)">Удалить</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tasks',
  props: {
    tasks: Array
  },
  data() {
    return {
      activeTaskId: null
    }
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
    },
    handleTaskClick(task) {
      this.openDetail(task.id)
    },
    openDetail(taskId) {
      this.activeTaskId = taskId;
      this.$emit('openDetail', taskId);
    }
  }
}
</script>
<style scoped lang="scss">

.tasks {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 15px;
}

.task {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #F1F6F9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}

.task-info {
  display: flex;
  align-items: center;
}

.checkbox {
  margin-right: 10px;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #394867;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:checked {
    background-color: #394867;
    border-color: #394867;
  }

  &:checked + .task-text {
    text-decoration: line-through;
    color: #9BA4B5;
  }
}

.task-text {
  color: #212A3E;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.task-actions {
  margin-left: auto;
}

.delete-btn {
  color: #394867;
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #212A3E;
  }
}

</style>