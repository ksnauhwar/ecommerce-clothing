import React from 'react';
import {Route} from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Collection from '../collectionpage/collection.component';

function ShopPage({match}){
        return (<div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
                <Route path={`${match.path}/:collectionId`} component={Collection}/>
            </div>);
}


export default ShopPage;