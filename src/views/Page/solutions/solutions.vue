<template>
  <div class="page">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  watch: {
    '$route.query.id': {
      handler(val, oldVal) {
        if (val) {
          this.gotoId(val)
        } else {
          this.gotoId('banner')
        }
      },
      deep: true, //true 深度监听
    },
  },
  props: {},
  mounted() {},
  components: {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
}
</style>
