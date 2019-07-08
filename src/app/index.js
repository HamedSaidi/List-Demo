import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ItemsList, Paginator } from './components'
import { loadItems } from '../store/actions'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.loadItems = this.loadItems.bind(this)
  }

  componentDidMount() {
    this.props.loadItems()
  }

  loadItems(page, per) {
    this.props.loadItems({page, per})
  }

  render() {
    const { pagination, items } = this.props
    return (
      <div>
        <h1 className="header-title"> Items List </h1>
        <ItemsList items={items} />
        <Paginator {...pagination} loadItems={this.loadItems} />
      </div>
    )
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
  loadItems: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  loadItems: (pagination) => dispatch(loadItems(pagination))
})

const mapStateToProps = state => state

export default connect(mapStateToProps, mapDispatchToProps)(App)
