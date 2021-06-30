import React from 'react';
import './collection-item.styles.scss';

function CollectionItem({imageUrl,id,name,price}){
    return (<div className="collection-item">
        <div className="collection-item__img" style={{backgroundImage:`url(${imageUrl})`}}></div>
        <h3 className="collection-item__name">{name}</h3>
        <h3 className="collection-item__price"><span>$</span>{price}</h3>

    </div>);
}


export default CollectionItem;