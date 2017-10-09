import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TableRowColumn from './TableRowColumn';


const BASE_STYLE = {
    borderBottom: '1px solid #9e9e9e'
};


function TableHeaderColumn(props) {
    return (
        <TableRowColumn  {...props} style={{...BASE_STYLE}}>
            {props.children}
        </TableRowColumn>
    );
}

TableHeaderColumn.propTypes = {
    style: PropTypes.object
};

TableHeaderColumn.defaultProps = {
    style: {}
};

export default TableHeaderColumn;
