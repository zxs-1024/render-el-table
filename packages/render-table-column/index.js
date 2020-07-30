import renderTableColumn from './src/render-table-column.vue'

renderTableColumn.install = function(Vue) {
  Vue.component(renderTableColumn.name, renderTableColumn)
}

export default renderTableColumn
