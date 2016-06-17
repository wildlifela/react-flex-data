import React, {cloneElement, Children, Component, PropTypes} from 'react';
import passProps from '../tools/passProps';
import prefixer from '../tools/prefixer';



const BASE_STYLE = {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 300,
    fontSize: 14
};

class Table extends Component {
    render() {

        const {style, tableClass} = this.props;
        const compStyle = {
            ...BASE_STYLE,
            ...style
        };

        return ( 
            <div className={tableClass} style={prefixer.prefix(compStyle)}>
                {passProps(this.props.children, this.props)}
            </div>
        );  

    }

}


Table.propTypes = {
    rowHeight: PropTypes.number,
    columnRatio: PropTypes.array,
    altColor: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    style: PropTypes.object,
    tableClass: PropTypes.string
};


Table.defaultProps = {
    rowHeight: 50,
    columnRatio: [1],
    altColor: false,
    style: {}
};


export default Table;
