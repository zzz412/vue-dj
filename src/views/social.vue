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
        <el-table :data="tableData">
          <el-table-column prop="jobTitle" label="职位名称" width="280" show-overflow-tooltip />
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
        <!-- el-pagination 分页器
            常用属性：
              total 总条数
              page-size 每页条数 (提供了总条数，每页数，会自动计算总页数)
              current-page 当前页
              layout 分页器布局
              background 设置分页背景色
         -->
         <!-- 1. 点击对应页码 进行页面跳转  -->
         <!-- 2. 页面刷新 分页器跳转到对应页  -->
         <el-pagination
          :total="pagination.totalCount"
          :page-size="pagination.pageSize"
          :current-page="pagination.currentPage"
          layout="prev,pager,next,total"
          background
          @current-change="pageChange"
         >
         </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  data () {
    return {
      tableData: [],
      pagination: { } // 分页器参数
    }
  },
  methods: {
    dayjs,
    async fetchData () { // 获取职位列表
      const { data } = await this.$http.post('/dj/position/queryUsingAndOldPositionVoList',
        {
          currentPage: this.pagination.currentPage,
          schoolFlag: 'N',
          showStatus: 'Y'
        })
      this.tableData = data.data.datas
      // 设置页码与总条数
      this.pagination = {
        currentPage: data.data.currentPage,
        pageSize: data.data.pageSize,
        totalCount: data.data.totalCount
      }
    },
    pageChange (page) {
      this.pagination.currentPage = page
      // 查询数据
      this.fetchData()
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
      margin: 0;
      .fav {
        margin-left: 3px;
      }
      &:hover {
        color: #232425;
      }
    }
  }
  // 修改组件样式 但是又不能 写全局样式
  // 深层选择器(选择子组件) https://vue-loader.vuejs.org/zh/guide/scoped-css.html#深度作用选择器
  ::v-deep .el-table {
   th {
      background-color: #F5F5F5;
      .cell {
        color: #616466;
        font-size: 18px;
        font-weight: 400;
      }
    }
  }
  ::v-deep .el-pagination {
    text-align: center;
    margin-top: 30px;
    button {
      margin: 0;
      background: #FFF;
      border: 1px solid #ebebeb;
      border-radius: 0;
      padding: 0 12px;
    }
    .btn-next {
      border-left: 0;
    }
    li {
      margin: 0;
      background: #FFF;
      border: 1px solid #ebebeb;
      border-radius: 0;
      border-left: 0;
      color: #616466;
      font-weight: 400;
      padding: 0 12px;
      &:hover {
        color: #232526 !important;
      }
      &.active {
        background: #616466 !important;
      }
      &.active:hover {
        color: #FFF !important;
      }
    }
    .el-pagination__total {
      margin-left: 20px;
    }
  }
}
</style>
