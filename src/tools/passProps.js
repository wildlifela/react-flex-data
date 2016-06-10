import React, {cloneElement, Children} from 'react';

export default function(children, props) {

    const proppedChildren = Children.map(children, (child, i) => {
        if(React.isValidElement(child)) {
            return cloneElement(child, {...props, ...child.props, childIndex: i});
        }else{
            return child;
        }


    });

    return proppedChildren;
}
