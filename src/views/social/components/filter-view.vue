<template>
  <div class="filter">
    <!-- 职位类别 -->
    <div class="filter-group cate">
      <!-- element-ui 提供的布局组件 -->
      <!-- el-row 行容器  将所有列划分为24列-->
      <el-row>
        <!-- el-col 列容器 span属性 指定列宽度 -->
        <el-col :span="2">职位类别:</el-col>
        <el-col :span="21">
          <span
            @click="activeCate = cate.classCode"
            :class="{active : activeCate === cate.classCode}"
            v-for="cate in cateList"
            :key="cate.classCode"
          >
            {{cate.description}}
          </span>
        </el-col>
      </el-row>
    </div>
    <!-- 城市列表 -->
    <div class="filter-group city">
      <el-row>
        <el-col :span="2">工作城市:</el-col>
        <el-col :span="21">
          <span
            @click="activeCity = city.locCode"
            :class="{ active: activeCity === city.locCode }"
            v-for="city in cityList"
            :key="city.locCode"
          >
          {{city.cityName}}
          </span>
        </el-col>
      </el-row>
    </div>
    <!-- 搜索框 -->
    <div class="filter-group serach">
      <el-row type="flex" justify="end">
        <el-col :span="7">
          <!-- el-input 搜索框组件
              常用属性:
                size 设置尺寸
                prefix-icon 设置首部图标
                suffix-icon 设置尾部图标
                clearable 清除图标
          -->
          <el-input
            v-model="input"
            placeholder="请输入职位关键词"
            size="small"
            suffix-icon="el-icon-search"
            clearable
          />
        </el-col>
      </el-row>
    </div>
    <!-- 关键词 -->
    <div class="filter-group keywords">
      <el-row type="flex" justify="end">
        <el-col :span="12">
          <span v-for="kw in keywords" :key="kw.id">{{kw.enumShortNote}}</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      activeCate: 0, // 当前激活类
      activeCity: 0, // 当前激活类
      cityList: [], // 城市列表
      cateList: [], // 类别列表
      keywords: [] // 关键词列表
    }
  },
  methods: {
    async init () { // 数据初始化
      // 查询城市
      const { cityList } = await this.$http.get('position/queryUsingAndOldCity/N')
      // 查询类别
      const cateList = await this.$http.get('position/queryUsingPositionClass/N')
      // 查询关键词
      const keywords = await this.$http.get('enumnote/query/socialKeyword')
      this.cityList = [{ cityName: '所有城市', locCode: 0 }, ...cityList]
      this.cateList = [{ description: '所有类别', classCode: 0 }, ...cateList]
      this.keywords = keywords
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.filter {
  padding-bottom: 30px;
  .filter-group {
    span {
      cursor: pointer;
      margin-right: 24px;
      color: #7f8382;
      &.active, &:hover {
        color: #232526;
      }
    }
  }
  .city {
    margin-top: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #ebebeb;
  }
  .serach {
    margin-top: 24px;
  }
  .keywords {
    margin-top: 8px;
    text-align: right;
    span {
      font-size: 13px;
      color: #b4b4b4;
      margin: 0 24px 0 12px;
    }
  }
}
</style>
