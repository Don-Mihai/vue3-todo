<template>
 <aside class="aside-route">

  <div class="user-container">
    <img src="" alt="">
    <div class="user-text">
      <h3>Михаил Палиенко</h3>
      <h4>mihai807@outlok.com</h4>
    </div>
  </div>

  <nav class="nav">
    <router-link class="link" to="my-day">Мой день</router-link>
    <router-link class="link" to="important">Важно</router-link>
    <router-link class="link" to="tasks">Задачи</router-link>
    <router-link class="link" to="tasks-finished">Завершенные</router-link>
  </nav>

 </aside>

</template>
<script>
export default {
  name: 'AsideRoute',
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>
<style scoped lang="scss">
.aside-route {
  width: 300px;
  height: 100%;
  background-color: #9BA4B5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.link {
  padding: 10px;
  font-size: 20px;
  letter-spacing: 3px;
  color: #212A3E;
  text-decoration: none;
  transition: 0.15s;

  &:hover {
    background-color: #fff;
  }
}

.router-link-active {
  background-color: #fff;
}

</style>