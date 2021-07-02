import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';

function MenuItem({title,imageUrl,history,linkUrl,match}){
    return (<div style={{ backgroundImage:`url(${imageUrl})`} } className="menu-item"
        onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{ backgroundImage:`url(${imageUrl})`} } />
                <div className="content">
                    <h4 className="title">
                        {title}
                    </h4>
                    <p className="shop">Shop now</p>
                </div>
            </div>);
}

export default withRouter(MenuItem);