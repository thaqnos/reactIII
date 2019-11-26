import React from 'react';

const Button = (props) => {
    const { click, children } = props;
    return (
        <button onClick={click}> {children} </button>
    );
} 
export default Button;