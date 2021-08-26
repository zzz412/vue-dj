<template>
  <div class="position">
    <div class="container">
      <div class="card">
        <div class="job-box">
          <!-- 职位标题 -->
          <div class="position-title">
            <h2>{{info.jobTitle}}</h2>
          </div>
          <!-- 职位信息 -->
          <div class="position-info">
            <el-row>
              <el-col :span="6">职位类别：{{info.claDescription}}</el-col>
              <el-col :span="6">
                <el-tooltip effect="dark" :content="info.locationDescription" placement="top-end" :offset="-40">
                  <span style="cursor: pointer;">工作城市：{{info.locationDescription}}</span>
                </el-tooltip>
              </el-col>
              <el-col :span="6">发布时间：{{dayjs(info.approveTime).format('YYYY-MM-DD')}}</el-col>
            </el-row>
          </div>
          <!-- 职位内容 -->
          <div class="job-content">
            <!-- 工作职责 -->
            <div class="job-content-article">
              <div class="article-title">工作职责</div>
              <div class="article-content">
                <p v-for="(item,index) in info.duty.split('\n')" :key="index">{{item}}</p>
              </div>
            </div>
            <!-- 任职要求 -->
            <div class="job-content-article">
              <div class="article-title">任职要求</div>
              <div class="article-content">
                  <p v-for="(item,index) in info.requirement.split('\n')" :key="index">{{item}}</p>
              </div>
            </div>
          </div>
          <!-- 操作按钮 -->
          <div class="job-button">
            <el-button class="white-btn">收藏职位</el-button>
            <el-button type="primary" class="black-btn">立即申请</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  data () {
    return {
      posistionId: 0,
      info: {
        duty: '',
        requirement: ''
      }
    }
  },
  methods: {
    dayjs,
    async getInfo () {
      const info = await this.$http.get('position/queryUsingAndOldPositionVo/' + this.posistionId)
      this.info = info
    }
  },
  mounted () {
    // 获取动态路由值
    this.posistionId = this.$route.params.id
    this.getInfo()
  }
}
</script>

<style lang="scss" scoped>
.position {
  min-height: 100vh;
  background: #f7f8f9;
  box-sizing: border-box;
  padding: 40px 0;
  .card {
    background: #FFF;
    padding: 24px 55px 100px;
    .job-box {
      width: 780px;
    }
    .position-title {
      margin-bottom: 16px;
      h2 {
        margin: 0;
        font-weight: 400;
        font-size: 22px;
        color: #707473;
        line-height: 30px;
      }
    }
    .position-info {
      color: #979797;
      line-height: 1.5;
    }
    .job-content {
      margin: 30px 0;
      border-top: 1px solid #ebebeb;
      color: #707473;
      .job-content-article {
        margin-top: 30px;
        .article-title {
          margin-bottom: 8px;
        }
        .article-content {
          margin-bottom: 8px;
          p {
            margin: 0;
            line-height: 28px;
          }
        }
      }
    }
    .job-button {
      .white-btn {
        &:hover {
          background: #FFF;
          border-color: #9fa3a6;
          color: #3b3e40;
        }
      }
      .black-btn {
        background-color: #3b3e40;
        border-color: #3b3e40;
        &:hover {
          background-color: #535759;
          border-color: #535759;
        }
      }
    }
  }
}
</style>
