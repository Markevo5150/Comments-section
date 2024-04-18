import React from 'react';
import '../styles/Button.css';
function Button (props){
    return (
        <div className=''>
            {props.children}
        </div>
    );
}
export default Button;