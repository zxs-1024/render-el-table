import renderTable from './src/render-table.vue'

renderTable.install = function(Vue) {
  Vue.component(renderTable.name, renderTable)
}

export default renderTable
