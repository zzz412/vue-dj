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
          <el-table-column prop="jobTitle" label="职位名称" width="250" />
          <el-table-column prop="claDescription" label="职位类别" align="center" />
          <el-table-column prop="locationDescription" label="工作城市" align="center" />
          <el-table-column prop="approveTime" label="发布时间" align="center">
            <!-- slot-scope 通过作用域插槽 获取该行的数据 -->
            <template slot-scope="{ row }">
              {{dayjs(row.approveTime).format('YYYY-MM-DD')}}
            </template>
          </el-table-column>
          <el-table-column prop="sex" label="收藏" align="center">
            <!-- 定义template标签 自定义列内容 -->
            <template>
              <i class="el-icon-star-off fav"></i>
            </template>
          </el-table-column>
          <el-table-column prop="sex" label="操作">
            <!-- 定义template标签 自定义列内容 -->
            <template>
              <p class="info">
                查看详情<i class="el-icon-arrow-right fav"></i>
              </p>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    dayjs,
    async fetchData () { // 获取职位列表
      const { data } = await this.$http.post('/dj/position/queryUsingAndOldPositionVoList',
        {
          schoolFlag: 'N',
          showStatus: 'Y'
        })
      this.tableData = data.data.datas
    }
  },
  mounted () {
    this.fetchData()
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
    .fav {
      cursor: pointer;
      font-size: 16px;
    }
    .info {
      font-size: 14px;
      cursor: pointer;
      color: #707473;
      .fav {
        margin-left: 3px;
      }
      &:hover {
        color: #232425;
      }
    }
  }
}
</style>
