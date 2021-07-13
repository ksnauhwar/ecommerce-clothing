import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

function CollectionItem({item,addItem}){
    const {imageUrl,name,price} = item;
    return (<div className="collection-item">
        <img className="collection-item__img" src={imageUrl}></img>
        <h3 className="collection-item__name">{name}</h3>
        <h3 className="collection-item__price"><span>$</span>{price}</h3>
        <CustomButton inverted onClick={()=>addItem(item)}>Add to Cart</CustomButton>
    </div>);
}

const mapDispatchToProps = function(dispatch){
    return {
        addItem:function(item){
            return dispatch(addItem(item));
        }
    }
}

export default connect(null,mapDispatchToProps)(CollectionItem);