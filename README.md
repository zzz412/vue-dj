# vueDemo 案例

大疆招聘系列网站.

本项目共包含： 登录，注册，社会招聘，校园招聘

## 项目启动说明

- 运行 `yarn serve`
- 打包 `yarn build`

## 项目接口文档

### API V1 接口说明

- 接口基准地址: `https://we.dji.com/hire_front/api/common`
- 服务端不支持 跨域需要 前端进行代理
- 使用 HTTP Status Code 标识状态
- 数据返回格式统一使用 JSON

### 通用返回数据结构说明

- code 状态码 [S0000 成功, 其他均为失败]
- data 数据
- msg 信息
- success 是否成功 true || false
- timestamp 请求时间 毫秒值
- traceID 请求 ID

### 1. 用户管理

#### 1.1 验证登录

- 请求路径：member/web/isLogin
- 请求方法：get
- 响应数据:

```json
{
  "traceID": "4291a1b0-c3d2-4312-bfdc-46d40cdb9a55",
  "timestamp": 1629343475316,
  "data": null,
  "code": null,
  "msg": "未登录",
  "success": false
}
```

### 2. 社会招聘

#### 2.1 搜索关键词

- 请求路径：enumnote/query/socialKeyword
- 请求方法：get
- 响应参数

| 参数名        | 参数说明  | 备注 |
| ------------- | --------- | ---- |
| id            | 关键词 ID |      |
| enumLongNote  | 完整名    |      |
| enumShortNote | 缩写名    |      |
| type          | 类型      |      |

- 响应数据:

```json
{
  "traceID": "4291a1b0-c3d2-4312-bfdc-46d40cdb9a55",
  "timestamp": 1629343475316,
  "data": [
    {
      "id": 272,
      "beisenCode": null,
      "enumLongNote": "嵌入式",
      "enumShortNote": "嵌入式",
      "enNote": null,
      "code": "1",
      "type": "socialKeyword",
      "orderId": 1,
      "commonStatus": "Y",
      "validityStatus": "Y",
      "createBy": null,
      "createDate": null,
      "updateBy": null,
      "updateDate": null
    }
  ],
  "code": "S0000",
  "msg": "",
  "success": false
}
```

#### 2.2 职位列表

- 请求路径：position/queryUsingAndOldPositionVoList
- 请求方法：post
- 请求参数

| 参数名       | 参数说明   | 备注     |
| ------------ | ---------- | -------- |
| classCode    | 职位类别   |          |
| currentPage  | 当前页     | 不能为空 |
| keyWord      | 查询关键词 |          |
| locationList | 工作城市   |          |
| pageSize     | 每页条数   | 默认:10  |
| schoolFlag   | 校招岗位   | N Y      |
| showStatus   | 招聘中     | N Y      |

- 响应参数

| 参数名      | 参数说明 | 备注 |
| ----------- | -------- | ---- |
| currentPage | 当前页   |      |
| pageSize    | 每页条数 |      |
| totalCount  | 总条数   |      |
| totalPage   | 总页数   |      |
| datas       | 数据     |      |

- 响应数据:

```json
{
  "traceID": "4291a1b0-c3d2-4312-bfdc-46d40cdb9a55",
  "timestamp": 1629343475316,
  "data": {
    "currentPage": 1,
    "pageSize": 10,
    "totalCount": 543,
    "totalPage": 55,
    "datas": []
  },
  "code": "S0000",
  "msg": "",
  "success": false
}
```

#### 2.3 工作城市列表

- 请求路径：position/queryUsingAndOldCity/N
- 请求方法：get
- 响应参数

| 参数名    | 参数说明 | 备注 |
| --------- | -------- | ---- |
| cityList  | 城市列表 |      |
| cityName  | 城市名称 |      |
| locCode   | 城市码   |      |
| otherCode | 其他码   |      |

- 响应数据:

```json
{
  "traceID": "4291a1b0-c3d2-4312-bfdc-46d40cdb9a55",
  "timestamp": 1629343475316,
  "data": {
    "regionList": [
      {
        "locCode": "1001",
        "cityName": "中国",
        "cityEnName": "China",
        "otherCode": null
      }
    ],
    "regionList": [
      {
        "locCode": "1001",
        "cityName": "中国",
        "cityEnName": "China",
        "otherCode": null
      }
    ]
  },
  "code": "S0000",
  "msg": "",
  "success": true
}
```

#### 2.4 职位类别列表

- 请求路径：position/queryUsingPositionClass/N

- 请求方法：get

- 响应参数

  | 参数名        | 参数说明 | 备注 |
  | ------------- | -------- | ---- |
  | classCode     | 类别 ID  |      |
  | description   | 类别描述 |      |
  | enDescription | 英文描述 |      |
  | sortNo        | 排序 ID  |      |

- 响应数据:

```json
{
  "traceID": "4291a1b0-c3d2-4312-bfdc-46d40cdb9a55",
  "timestamp": 1629343475316,
  "data": [
    {
      "classCode": 12,
      "description": "信息安全类",
      "enDescription": "IT",
      "sortNo": 3
    }
  ],
  "code": "S0000",
  "msg": "",
  "success": true
}
```

#### 2.4 职位详情

- 请求路径：position/queryUsingAndOldPositionVo/:id

- 请求方法：get

- 响应参数

  | 参数名 | 参数说明 | 备注        |
  | ------ | -------- | ----------- |
  | id     | 职位 ID  | 放在 URL 中 |

- 响应数据:

```json
{
  "traceID": "4291a1b0-c3d2-4312-bfdc-46d40cdb9a55",
  "timestamp": 1629343475316,
  "data": {
    "jobId": null,
    "jobTitle": "中级测试开发工程师（原点实验室）",
    "tenantid": null,
    "department": null,
    "jobStatus": 1,
    "category": 1,
    "kind": null,
    "headCount": null,
    "createdate": 1629279279000,
    "modifiedate": null,
    "postdate": null,
    "createby": null,
    "modifiedby": null,
    "jobProcess": null,
    "hrdutyuser": null,
    "showStatus": "Y",
    "inspectperson": null,
    "recommendFlag": "Y",
    "hotFlag": null,
    "chargeHr": null,
    "classCode": 1,
    "approveTime": 1629279285000,
    "overseaFlag": null,
    "duty": "1.负责无人机项目自动化测试用例设计、开发,包括功能测试、性能测试等；\n2.负责无人机项目软件测试,根据产品需求进行测试,包括测试方案和测试用例设计、测试执行、BUG提交和追踪、测试报告整理等；\n3.对测试过程中发现的问题进行跟踪分析和报告,推动问题及时解决；\n4.负责无人机项目测试用例挖掘及持续集成导入。",
    "requirement": "1.本科及以上学历,计算机软件工程/通讯工程/自动化相关专业；\n2.熟悉嵌入式软件测试流程及常用方法,能独立完成测试用例设计及编写； \n3.熟练掌握 python语言,熟悉持续集成技术,具有接口测试和自动化测试经验优先； \n4.熟悉常用持续集成工具如 Jenkins等,熟悉git、 gerrit； \n5.具备良好的学习、技术钻研、沟通及团队协调能力,工作态度积极主动,有强烈的责任心。",
    "positionId": "1427926908284559360",
    "claDescription": "研发类",
    "claEnDescription": "R&D",
    "locCode": null,
    "locationDescription": "深圳市",
    "locationEnDescription": "Shenzhen",
    "staDescription": "招聘中",
    "catDescription": "社会招聘",
    "kinDescription": null,
    "proDescription": null,
    "positionOtherStatus": 2,
    "positionRegion": "中国",
    "positionEnRegion": "China",
    "enShowStatus": "N"
  },
  "code": "S0000",
  "msg": "",
  "success": true
}
```