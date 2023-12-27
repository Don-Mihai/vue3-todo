<template>
  Добро пожаловать на страничке TODO
  <button @click="$router.push('/tasks')">Приступить к созданию задачки</button>
</template>
<script>

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      tasks: [],
      activeRow: null
    }
  },
  methods: {

}
}
</script>

<style lang="scss" scoped>
</style>
