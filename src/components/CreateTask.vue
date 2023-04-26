<template>
  <div class="wrap">
    <input type="text" class="input" placeholder="Добавить задачу" v-model="text" @keyup="createTask" @focusin="isFocus = true" @focusout="isFocus = false">
    <span class="add-icon" v-if="!isFocus">+</span>
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
    createTask(e) {
      if(e.keyCode === 13) {

        const now = new Date();
        const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' };
        const dateTime = now.toLocaleDateString('en-US', options); // "April 26, 2023, 12:34 PM"

        const payload = {
          id: Math.random(),
          text: this.text,
          time: dateTime,
        }

        console.log(payload)

        this.$emit('createTask', payload)

        this.text = ''
      }
      
    },
  }
}

</script>

<style scoped lang="scss">
.wrap {
  position: relative;
}
.input {
  width: 100%;
  padding: 15px 20px;

  &::placeholder {
    font-size: 16px;
  }
}

.add-icon {
  position: absolute;
  left: 4px;
  top: 8px;
  font-size: 26px;
}
</style>
