<script>
import renderTableColumn from '../../render-table-column'

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
      const { children = [] } = column
      const noSlotsTypes = ['index', 'selection']
      const hasChildren = children && children.length
      let scopedSlots = {
        default: ({ row }) => {
          if (hasChildren) {
            return children.map((column) => <renderTableColumn row={row} column={column} />)
          }
          return <renderTableColumn row={row} column={column} />
        }
      }

      if (column.type && noSlotsTypes.includes(column.type)) {
        scopedSlots = null
      }

      return (
        <elTableColumn
          {...{ props: column, scopedSlots }}
          type={column.type}
          label={column.label}
          prop={column.prop}
          key={column.key}
        />
      )
    },

    handleSizeChange(pageSize) {
      this.$emit('change', { ...this.params, pageSize, currentPage: 1 })
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
          <elTable data={tableData} vLoading={loading} {...{ props: this.$attrs }} style='width: 100%'>
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
