import React, {Component, PropTypes} from 'react';
import passProps, {passColRatio} from '../tools/passProps';
import prefixer from '../tools/prefixer';



const BASE_STYLE = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
};

class TableRow extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            altColor: false
        };

    }

    componentWillMount() {
        const {childIndex, altColor} = this.props;
        this.setState({
            altColor: altColor && childIndex%2 === 1 ? altColor : false
        });

    }

    render() {

        const {style, childIndex, rowInteraction} = this.props;
        const {altColor} = this.state;


        const compStyle = {
            ...BASE_STYLE,
            ...style,
            backgroundColor: altColor,
            cursor: typeof rowInteraction === 'function' ? 'pointer' : 'auto'
        };

        return ( 
            <div style={prefixer.prefix(compStyle)} onTouchTap={this.onInteraction(childIndex)}>
                {passProps(this.props.children, this.props)}
            </div>
        );  
       
    }

    /*
    * Handlers
    * */

    onInteraction = (rowIndex) => {
        const {rowInteraction} = this.props;
        return (e) => {
            if(typeof rowInteraction === 'function') rowInteraction(e, rowIndex);
        };
    }

}

TableRow.propTypes = {
    rowInteraction: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.bool
    ]),
    rowClass: PropTypes.string,
    style: PropTypes.object
};

TableRow.defaultProps = {
    rowInteraction: false,
    style: {}
};


export default TableRow;
