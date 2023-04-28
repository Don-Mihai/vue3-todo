<template>
  <div class="create-task">
    <div class="input-wrap">
      <input type="text" class="input" placeholder="Добавить задачу" v-model="text" @keyup.enter="createTask" @focusin="isFocus = true" @focusout="isFocus = false">
      <span class="add-icon" v-if="!isFocus">+</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CreateTask',
  data() {
    return {
      text: '',
      isFocus: false
    }
  },
  methods: {
    createTask() {
      if (this.text.trim()) {
        const now = new Date();
        const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' };
        const dateTime = now.toLocaleDateString('en-US', options); // "April 26, 2023, 12:34 PM"

        const payload = {
          id: Math.random(),
          text: this.text,
          time: dateTime,
        }

        this.$emit('createTask', payload)

        this.text = ''
      }
    }
  }
}
</script>
<style scoped lang="scss">
.create-task {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #212A3E;
}

.input-wrap {
  position: relative;
  width: 100%;
}

.input {
  width: 100%;
  padding: 15px 30px;
  background-color: #394867;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  color: #F1F6F9;

  &::placeholder {
    font-size: 16px;
    color: #9BA4B5;
  }
}

.add-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 26px;
  color: #F1F6F9;
  cursor: pointer;
  transition: 0.15s;
}

.add-icon:hover {
  color: #9BA4B5;
}
</style>