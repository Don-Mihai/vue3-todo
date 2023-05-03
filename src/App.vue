<template>
      <router-view></router-view>
</template>
<script>
import CreateTask from '@/components/CreateTask.vue'
import Tasks from '@/components/Tasks.vue'
import TaskDetail from '@/components/TaskDetail.vue'
import AsideRoute from '@/components/AsideRoute.vue'

export default {
  name: 'App',
  components: {
    Tasks,
    TaskDetail,
    CreateTask,
    AsideRoute
  },
  data() {
    return {
      
    }
  },
  methods: {

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
</style>
