<template>
  <div id="app">
    <div class="page-header">
      <h1>RenderTable</h1>
      <h2>基于 Element Table 的二次封装</h2>
      <a href="https://github.com/zhanghao-zhoushan/render-el-table" class="btn" target="_blank">View on GitHub</a>
    </div>

    <div class="page-content">
      <h1>RenderTable</h1>
      <p>集成 Pagination、Table、 TableColumn、 Loading 组件，更快的开发 Table</p>

      <h2>Demo</h2>
      <RenderTable
        :columns="columns"
        :loading="loading"
        :total="total"
        :tableData="tableData"
        :currentPage="params.currentPage"
        :pageSize="params.pageSize"
        @change="handleChange"
      />

      <h2>Install</h2>
      <pre v-highlightjs="'$ npm install render-el-table -S'"><code class="bash"></code></pre>

      <h2>Usable</h2>
      <p>在 main.js 文件中引入</p>
      <pre v-highlightjs="code.bashCode"><code class="javascript"></code></pre>

      <p>在项目中使用 RenderTable</p>
      <pre v-highlightjs="code.htmlCode"><code class="html"></code></pre>
      <pre v-highlightjs="code.useCode"><code class="javascript"></code></pre>

      <h2>Set columns</h2>
      <p>你可以通过在 columns 配置自定义 column, 支持 JSX</p>
      <pre v-highlightjs="code.columnsCode"><code class="javascript"></code></pre>

      <h2>Event</h2>
      <p>监听 Pagination 的 change 事件触发</p>
      <pre v-highlightjs="code.htmlCode"><code class="html"></code></pre>
      <pre v-highlightjs="code.EventJavascriptCode"><code class="javascript"></code></pre>

      <h1>Action</h1>
      <pre v-highlightjs="code.actionCode"><code class="javascript"></code></pre>

      <h1>RenderTable Support Props</h1>
      <pre v-highlightjs="code.propsCode"><code class="javascript"></code></pre>
    </div>

    <div class="page-footer">
      RenderTable 插件由
      <a href="https://www.zhanghao-zhoushan.cn/" target="_blank">sailor</a>编写
    </div>
  </div>
</template>

<script>
import * as code from './code'

const columns = [
  {
    type: 'selection',
    width: 55
  },
  {
    prop: 'date',
    label: '日期',
    children: [
      {
        prop: 'date',
        label: '日期1'
      },
      {
        prop: 'date',
        label: '日期2'
      }
    ],
    render(h, ctx) {
      const { row: { date } = {} } = ctx.props
      date
      return <span>date</span>
    }
  },
  { prop: 'name', label: '姓名' },
  { prop: 'address', label: '地址' }
]
const tableData = [
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  },
  {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }
]

export default {
  name: 'App',
  data() {
    return {
      code,
      columns,
      tableData: [],
      total: 0,
      loading: false,
      params: {
        pageSize: 10,
        currentPage: 1
      }
    }
  },
  created() {
    this.onSubmit()
    this.addCctionColumn()
  },

  methods: {
    onSubmit() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.total = 100
        this.tableData = tableData
      }, 500)
    },
    addCctionColumn() {
      const self = this
      this.columns.push({
        prop: 'action',
        label: '操作',
        render(h, ctx) {
          const { row } = ctx.props
          return (
            <el-button size='small' type='primary' onClick={() => self.handleClick(row)}>
              主要按钮
            </el-button>
          )
        }
      })
    },
    handleClick(row) {
      console.log('handleClick: ', row)
    },
    handleChange(params) {
      console.log('handleChange: ', params)
      this.params = params
      this.onSubmit()
    }
  }
}
</script>

<style lang="less">
@import './style/index.less';
</style>
