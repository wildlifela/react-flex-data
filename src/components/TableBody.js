import React, {Component, PropTypes} from 'react';
import passProps from '../tools/passProps';

import prefixer from '../tools/prefixer';

const BASE_STYLE = {
    display: 'flex',
    flexDirection: 'column'
};

class TableBody extends Component {

    render() {

        const {style} = this.props;

        const compStyle = {
            ...BASE_STYLE,
            ...style
        };

        return ( 
            <div style={prefixer.prefix(compStyle)}>
                {passProps(this.props.children, this.props)}
            </div>
        );  
       
    }

}

TableBody.propTypes = {
    style: PropTypes.object
};

TableBody.defaultProps = {
    style: {}
};

export default TableBody;
