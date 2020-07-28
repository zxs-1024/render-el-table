<script>
import RenderTableColumn from './RenderTableColumn'

export default {
  name: 'RenderTable',
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
  },

  computed: {
    params() {
      return {
        currentPage: this.currentPage,
        pageSize: this.pageSize
      }
    }
  },

  methods: {
    renderElTableColumn(h, column) {
      const scopedSlots = {
        default: ({ row }) => {
          return <RenderTableColumn row={row} column={column} />
        }
      }
      return <elTableColumn {...{ scopedSlots }} prop={column.prop} label={column.label} key={column.key} />
    },
    handleSizeChange(pageSize) {
      this.$emit('change', { ...this.params, pageSize })
    },
    handleCurrentChange(currentPage) {
      this.$emit('change', { ...this.params, currentPage })
    }
  },

  render(h) {
    const { columns, loading, tableData, total, layout, currentPage, pageSize, pageSizes } = this
    return (
      <div class='render-table'>
        <div class='render-table__content' style='margin-bottom: 20px;'>
          <elTable data={tableData} vLoading={loading} style='width: 100%'>
            {columns.map((column) => this.renderElTableColumn(h, column))}
          </elTable>
        </div>
        <div class='render-table__pagination' style='text-align: center;'>
          <elPagination
            on-size-change={this.handleSizeChange}
            on-current-change={this.handleCurrentChange}
            currentPage={currentPage}
            pageSizes={pageSizes}
            pageSize={pageSize}
            layout={layout}
            total={total}
          />
        </div>
      </div>
    )
  }
}
</script>
