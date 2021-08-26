<template>
  <div class="layout">
    <!-- 头部 -->
    <Header></Header>
    <!-- 内容 -->
    <router-view></router-view>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
export default {
  name: 'layout',
  components: { Header, Footer }
}
</script>

<style lang="scss" scoped>

</style>
