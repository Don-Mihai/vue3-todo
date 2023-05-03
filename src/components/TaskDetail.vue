<template>
   <aside class="detail" v-if="activeRow">
    <div class="main">
      <input type="text" class="input" v-model="text" @keyup.enter="editTask">
      <span class="icon-delete" @click="onCLickDelete">X</span>
    </div>
    <footer class="footer">
      <div class="time">{{ time }}</div>
    </footer>
  </aside>
</template>
<script>
export default {
  name: 'TaskDetail',
  props: {
    activeRow: Object,
    hideDetail: Function,
  },
  data() {
    return {
      text: '',
      time: ''
    }
  },
  watch: {
    activeRow: {
      handler: function(newActiveRow) {
        this.text = newActiveRow?.activeRow.text;
        this.time = newActiveRow?.activeRow.time;
      },
      immediate: true, // вызывать обработчик немедленно при монтировании компонента
    },
  },
  methods: {
    onCLickDelete() {
      this.$emit('closeDetail', 'text' )
    },
    editTask() {
      if (this.text.trim()) {
        const payload = {
          id: this.activeRow.activeRow.id,
          text: this.text
        }

        this.$emit('editTask', payload)
      }
    }
  }
}
</script>
<style scoped lang="scss">
.detail {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #F1F6F9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.main {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.input {
  width: 100%;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #E8D5C4;
  font-size: 16px;
  color: #394867;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #9BA4B5;
  }
}

.icon-delete {
  margin-left: auto;
  font-size: 20px;
  color: #394867;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #9BA4B5;
  }
}

.footer {
  color: #9BA4B5;
  font-size: 14px;
  margin-top: auto;
}
</style>