import React from 'react';
import {connect} from 'react-redux';
import { selectShopCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.scss';


const Collection = ({collection}) => {
    return (<div className="category">
               <h2 className="heading-secondary">{collection.items.length}</h2>
               {
                   
               }
            </div>);

}

const mapStateToProps = (state,ownProps) => ({
    collection:selectShopCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(Collection);