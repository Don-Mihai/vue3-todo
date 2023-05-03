<template>
   Вы открыли задачку: {{ $route.params.id }}
</template>
<script>
export default {
  name: 'Task',
  props: {
    
  },
  data() {
    return {
      
    }
  },
  watch: {
    activeRow: {
      handler: function(newActiveRow) {
        this.text = newActiveRow?.activeRow.text;
        this.time = newActiveRow?.activeRow.time;
      },
      immediate: true,
    },
  },
  methods: {
    
  }
}
</script>
<style scoped lang="scss">

</style>