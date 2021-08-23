<template>
  <div class="social">
    <div class="container">
      <!-- 横幅 -->
      <div class="banner"></div>
      <!-- 内容 -->
      <div class="card">
        <!-- 筛选模块 -->
        <div class="filter"></div>
        <!-- 表格模块 -->
        <!-- el-table 表格组件
            常用属性：
              data 表格数据
            el-table-column 表格项
            常用属性：
              prop 渲染属性名
              label 项名
              width 宽度
              align 排列方向
         -->
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="id" label="职位名称" width="200" />
          <el-table-column prop="name" label="职位类别" align="center" />
          <el-table-column prop="age" label="工作城市" align="center" />
          <el-table-column prop="sex" label="发布时间" align="center"/>
          <el-table-column prop="sex" label="收藏" align="center"/>
          <el-table-column prop="sex" label="操作" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { id: 1, name: '小红1', age: 18, sex: '女' },
        { id: 2, name: '小红2', age: 18, sex: '女' },
        { id: 3, name: '小红3', age: 18, sex: '女' },
        { id: 4, name: '小红4', age: 18, sex: '女' },
        { id: 1, name: '小红1', age: 18, sex: '女' },
        { id: 2, name: '小红2', age: 18, sex: '女' },
        { id: 3, name: '小红3', age: 18, sex: '女' },
        { id: 4, name: '小红4', age: 18, sex: '女' },
        { id: 1, name: '小红1', age: 18, sex: '女' },
        { id: 2, name: '小红2', age: 18, sex: '女' },
        { id: 3, name: '小红3', age: 18, sex: '女' },
        { id: 4, name: '小红4', age: 18, sex: '女' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.social {
  background: #f7f8f9;
  min-height: calc(100vh - 61px - 50px);
  overflow: hidden; /* 解决外边距塌陷 */
  .banner {
    height: 300px;
    background: url(https://we2.djicdn.com/hire/public/img/social/search-banner.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .card {
    min-height: 500px;
    background-color: #FFF;
    padding: 40px 48px;
    margin: 24px auto;
  }
}
</style>
