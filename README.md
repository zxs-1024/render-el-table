# render-table

render element table

## Usable

```html
<RenderTable
  :columns="columns"
  :loading="loading"
  :total="total"
  :tableData="tableData"
  :currentPage="params.currentPage"
  :pageSize="params.pageSize"
  @change="handleChange"
/>
```

## Set columns

```js
import RenderTable from './components/RenderTable.vue'

const columns = [
  {
    prop: 'date',
    label: '日期',
    render(h, ctx) {
      const { row: { date } = {} } = ctx.props
      return <span style='color: red'>{date}</span>
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
  components: {
    RenderTable
  },
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
      }, 1000)
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
```
