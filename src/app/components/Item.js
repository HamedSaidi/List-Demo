import React from 'react'
import PropTypes from 'prop-types'

const Item = React.memo(({id, name, email, postId}) => (
  <tr key={id}>
    <td className="items-table-element">{id}</td>
    <td>{name}</td>
    <td className="items-table-element">{postId}</td>
    <td className="items-table-element">{email}</td>
  </tr>
))

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  postId: PropTypes.number.isRequired
}

export default Item
