import React from 'react';

import './form-input.styles.scss';

function FormInput({type,handleChange,label,...otherProps}){
    return (
        <div className="form-group">
            <input className="form-input" type={type} onChange={handleChange} {...otherProps}/>
            {
                label ? <label className="form-label">{label}</label> : null
            }
        </div>
    );

}

export default FormInput;