import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';


function CollectionPreview({title,items}){
    return (<div className="collection-preview">
        <h4 className="title">{title}</h4>
        <div className="items">
            {
                items.slice(0,4).map(({id,...otherItemProps}) =>(
                     <CollectionItem {...otherItemProps} key={id}/>   
                ))
            }
        </div>
    </div>);
}

export default CollectionPreview;