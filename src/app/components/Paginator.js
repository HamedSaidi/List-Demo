import React from 'react'
import PropTypes from 'prop-types'
import Select from 'rc-select';
import localeInfo from 'rc-pagination/lib/locale/en_US';

import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import 'rc-select/assets/index.css';

const Paginator = React.memo(({per, page, totalItems, loadItems}) => (
  <Pagination
    className="pagination"
    total={totalItems}
    pageSize={per}
    defaultPageSize={20}
    selectComponentClass={Select}
    current={page}
    pageSizeOptions={['10', '20', '40', '80']}
    showSizeChanger
    defaultCurrent={1}
    showPrevNextJumpers
    locale={localeInfo}
    onShowSizeChange={loadItems}
    onChange={loadItems}
  />
))

Paginator.propTypes = {
  loadItems: PropTypes.func,
  per: PropTypes.number,
  totalItems: PropTypes.number,
  page: PropTypes.number
}

export default Paginator
