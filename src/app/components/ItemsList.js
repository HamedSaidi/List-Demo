import React from 'react'
import PropTypes from 'prop-types'

import { Item } from './'

const ItemsList = React.memo(({items = [], editProduct, deleteProduct}) => (
  <table className="items-table">
    <thead className="items-table-head">
      <tr>
        <th className="items-table-head-element">ID</th>
        <th className="items-table-head-element left-align">Name</th>
        <th className="items-table-head-element">Post ID</th>
        <th className="items-table-head-element">Email</th>
      </tr>
    </thead>
    <tbody className="items-table-body">
      { items.map((item) => (<Item key={item.id} {...item} />)) }
    </tbody>
  </table>
))

ItemsList.propTypes = {
  items: PropTypes.array.isRequired
};


export default ItemsList
