import React, {Component, PropTypes} from 'react';
import TableRowColumn from './TableRowColumn';


const BASE_STYLE = {
    borderBottom: '1px solid #9e9e9e'
};


class TableHeaderColumn extends Component {
    render() {
        return <TableRowColumn  {...this.props} style={{...BASE_STYLE}}>
            {this.props.children}
        </TableRowColumn>;
    }
}

TableHeaderColumn.propTypes = {
    style: PropTypes.object
};

TableHeaderColumn.defaultProps = {
    style: {}
};

export default TableHeaderColumn;
