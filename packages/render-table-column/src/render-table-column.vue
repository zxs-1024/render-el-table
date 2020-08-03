<script>
export default {
  name: 'RenderTableColumn',
  functional: true,
  render(createElement, context) {
    const {
      row,
      column: { render, prop }
    } = context.props
    if (typeof render !== 'function') {
      return <div>{row[prop]}</div>
    }
    return render(createElement, context)
  }
}
</script>
