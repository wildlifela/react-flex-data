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
        console.log('IndexWrapper Props', this.props);
        const content = this.props.children || false;

        return content;
    }
}

export default IndexWrapper;
