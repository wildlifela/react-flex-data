import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TableRow from './TableRow';


const BASE_STYLE = {
    color: '#9e9e9e'
};

function TableHeader(props) {
    return (
        <TableRow {...props} style={{...BASE_STYLE}} altColor={false}>
            {props.children}
        </TableRow>
    );
}

TableHeader.propTypes = {
    style: PropTypes.object
};

TableHeader.defaultProps = {
    style: {}
};

export default TableHeader;
