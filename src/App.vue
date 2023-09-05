<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alive: true,
    }
  },
  provide() {
    return {
      reload: this.reload,
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    reload() {
      this.alive = false
      this.$nextTick(() => {
        this.alive = true
      })
    },
  },
}
</script>


<style lang="scss" scoped>
#app {
  font-family: PingFang-SC-Regular, Helvetica Neue, Helvetica, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, '\5FAE\8F6F\96C5\9ED1', Arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
