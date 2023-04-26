<template>
  <aside class="detail">
    <div class="main">
      <input type="text" class="input" v-model="text" @keyup="editTask">
      <span @click={onCLickDelete} class="icon-delete">X</span>
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
      console.log('click2')
      this.$emit('closeDetail', 'text' )
    },
    editTask(e) {
      if(e.keyCode === 13) {
      const payload = {
        id: this.activeRow.activeRow.id,
        text: this.text
      }

      this.$emit('editTask', payload)}
    }
  },
}
</script>

<style scoped lang="scss">
.detail {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #E8D5C4;
  height: 100%;
  padding: 15px;
}

.main {
  flex-grow: 1;
}

.icon-delete {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
