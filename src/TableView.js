var React = require('react')
var cx = require('classnames')

class TableView extends React.Component {
  render() {
    return (
      <ul
        {...this.props}
        className={cx(this.props.className, "table-view")}
      />
    )
  }
}

module.exports = TableView
