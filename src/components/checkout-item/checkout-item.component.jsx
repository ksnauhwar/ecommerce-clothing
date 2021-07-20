import React from 'react';
import {connect} from 'react-redux';
import { addItem, removeItem, clearItemFromCart} from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';


const CheckoutItem = ({cartItem,dispatch})=>{
    return (<div className="checkout-item">
                 <div className="checkout-item__image">
                    <img  src={cartItem.imageUrl} alt="product"/>
                </div>
                <p className="checkout-item__text">{cartItem.name}</p>
                <div className="quantity"><span onClick={()=>dispatch(removeItem(cartItem))}>&#10094;</span>{cartItem.quantity}<span onClick={()=>dispatch(addItem(cartItem))}>&#10095;</span></div>
                <p className="price">${cartItem.price}</p>
                <div className="remove" onClick={()=>dispatch(clearItemFromCart(cartItem.id))}>&#10005;</div>
            </div>);

}

export default connect(null)(CheckoutItem);