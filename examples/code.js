const bashCode = `# main.js
import RenderTable from 'render-el-table'
Vue.use(RenderTable)`

const columnsCode = `const columns = [
  {
    prop: 'date',
    label: '日期',
    render(h, ctx) {
      const { row: { date } = {} } = ctx.props
      return <span style='color: #409eff'>{date}</span>
    }
  },
  { prop: 'name', label: '姓名' },
  { prop: 'address', label: '地址' }
]`

const useCode = `export default {
  data() {
    return {
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
  },
  methods: {
    onSubmit() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.total = 100
        this.tableData = []
      }, 500)
    },
    handleChange(params) {
      console.log('handleChange: ', params)
      this.params = params
      this.onSubmit()
    }
  }
}`

const javascriptCode = `export default {
  name: 'App',
  data() {
    return {
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
}`

const EventJavascriptCode = `export default {
  methods: {
    handleChange(params) {
      console.log('handleChange: ', params)
      this.params = params
      this.onSubmit()
    }
  }
}`

const htmlCode = `<RenderTable
  :columns="columns"
  :loading="loading"
  :total="total"
  :tableData="tableData"
  :currentPage="params.currentPage"
  :pageSize="params.pageSize"
  @change="handleChange" />`

const propsCode = `// render-el-table.vue
export default {
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => {}
    },
    loading: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40, 50]
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    }
  }
}`

const actionCode = `export default {
  created() {
    this.addCctionColumn()
  },
  methods: {
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
    }
  }
}`

export { bashCode, columnsCode, useCode, javascriptCode, EventJavascriptCode, htmlCode, propsCode, actionCode }
