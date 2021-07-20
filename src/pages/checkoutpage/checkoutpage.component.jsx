import { create } from 'istanbul-reports';
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkoutpage.styles.scss';


const CheckoutPage = ({cartItems,total}) => {
    return (<div className="checkout-page">
                <div className="checkout-page__header">
                    <p className="header-text">Product</p>
                    <p className="header-text">Description</p>
                    <p className="header-text">Quantity</p>
                    <p className="header-text">Price</p>
                    <p className="remove">Remove</p>
                </div>
                {
                    cartItems.map(cartItem => <CheckoutItem cartItem={cartItem} key={cartItem.id}/>)
                }
                <p className="checkout-page__footer">Total: ${total}</p>
             </div>);
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);