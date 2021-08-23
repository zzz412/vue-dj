<template>
  <div class="footer">
      <div class="container">
        <div class="copyright">
          Copyright © 2021 DJI 大疆创新 版权所有
        </div>
        <div class="link-list">
          <a href="#">DJI 大疆创新官网</a>
          <a href="#">DJI 大疆创新官方商城</a>
          <a href="#">天空之城</a>
          <a href="#">RoboMaster</a>
          <a href="#">DJI 大疆招聘公众号</a>
        </div>
        <div class="link-list switch-lang">
          <a href="#">简体中文</a>
          <a href="#">English</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  height: 50px;
  background: #FFF;
  line-height: 50px;
  font-size: 12px;
  .copyright {
    float: left;
    margin-right: 30px;
    color: #979797;
  }
  .link-list {
    float: left;
    a {
      color: #707473;
      display: inline-block;
      padding: 0 8px;
      border-right: 1px solid #707473;
      line-height: 18px;
      &:last-child {
        border-right: 0;
      }
    }
  }
  .switch-lang {
    float: right;
  }
}
</style>
