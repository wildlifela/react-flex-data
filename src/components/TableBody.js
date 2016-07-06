import React, {Children, Component, PropTypes} from 'react';

import prefixer from '../tools/prefixer';

const BASE_STYLE = {
    display: 'flex',
    flexDirection: 'column'
};



class RowWrapper extends Component {
    static childContextTypes = {
        childIndex: PropTypes.number
    }
    getChildContext() {
        const {childIndex} = this.props;
        return {
            childIndex
        };
    }
    render() {
        return this.props.children;
    }
}



class TableBody extends Component {

    render() {

        const {style, bodyClass} = this.props;

        const compStyle = {
            ...BASE_STYLE,
            ...style
        };

        return ( 
            <div className={bodyClass} style={prefixer.prefix(compStyle)}>
                {Children.map(this.props.children, (Row, i) => {
                    return <RowWrapper childIndex={i}>
                        {Row}
                    </RowWrapper>;
                })}
            </div>
        );  
       
    }

}

TableBody.propTypes = {
    style: PropTypes.object,
    bodyClass: PropTypes.string
};

TableBody.defaultProps = {
    style: {}
};

export default TableBody;

