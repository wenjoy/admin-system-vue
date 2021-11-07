<template>
  <div class="nav">
    <Menu />
  </div>
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

.nav {
  flex: 1;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.content {
  flex: 8;
}
</style>
