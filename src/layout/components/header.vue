<template>
   <div class="header">
      <div class="header-fixed">
        <div class="container">
          <!-- logo -->
          <div class="logo">
            <router-link to="/">
              <img src="https://we2.djicdn.com/hire/public/img/logo.png?v=285545" alt="">
            </router-link>
          </div>
          <!-- 导航菜单 -->
          <div class="nav">
            <router-link to="/social" class="nav-link">社会招聘</router-link>
            <a href="#" class="nav-link">校园招聘</a>
            <a href="#" class="nav-link">关于大疆</a>
          </div>
          <!-- 用户菜单 -->
          <div class="user">
            <a href="#" class="nav-link">登录</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header-fixed {
  width: 100%;
  height: 60px;
  background: #FFF;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
.header {
  height: 60px;
  background: rgb(255, 255, 255);
  line-height: 60px;
  border-bottom: 1px solid #eee;
  .logo {
    float: left;
    img {
      height: 29px;
      vertical-align: middle;
    }
  }
  .nav {
    float: left;
    margin-left: 33px;
  }
  .user {
    float: right;
  }
  .nav-link {
    display: inline-block;
    padding: 0 18px;
    color: #3b3e40;
    &:hover, &.dj-active {
      color: #44a8f2;
    }
  }
}
</style>
