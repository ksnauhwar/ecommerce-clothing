import React from 'react';
import './custom-button.styles.scss';


function CustomButton({children,isGoogleSignIn,...otherProps}){
	return (<button className={`${isGoogleSignIn ? 'btn-google' : ''} custom-button`} {...otherProps}>{children}</button>);
}

export default CustomButton;