import React, { Component, PropTypes} from 'react';



class IndexWrapper extends Component {
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

export default IndexWrapper;
