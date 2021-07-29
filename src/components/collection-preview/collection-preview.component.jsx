import React from 'react';
import { withRouter,Link } from 'react-router-dom';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';


function CollectionPreview({title,items,match,routeName}){
    return (<div className="collection-preview">
        <Link to={`${match.path}/${routeName}`}><h4 className="title">{title}</h4></Link>
        <div className="items">
            {
                items.slice(0,4).map(item =>(
                     <CollectionItem item={item} key={item.id}/>   
                ))
            }
        </div>
    </div>);
}

export default withRouter(CollectionPreview);