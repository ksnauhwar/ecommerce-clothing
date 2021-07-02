import React from 'react';
import './collection-item.styles.scss';

function CollectionItem({imageUrl,id,name,price}){
    return (<div className="collection-item">
        <img className="collection-item__img" src={imageUrl}></img>
        <h3 className="collection-item__name">{name}</h3>
        <h3 className="collection-item__price"><span>$</span>{price}</h3>

    </div>);
}


export default CollectionItem;