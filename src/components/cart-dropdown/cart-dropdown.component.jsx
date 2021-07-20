import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

const onCheckoutClick = (dispatch,history) => {
    dispatch(toggleCartDropdown());
    history.push('/checkout');
}

const CartDropdown = ({cartItems,history,dispatch})=>{

    return (
        <div className="cart-dropdown">
            {cartItems.length ?
            <div className="cart-dropdown__items">
                
             {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} ></CartItem>)}
                    
            </div>
            : <p className="empty-message">Your Cart Is Empty</p>}
            <CustomButton onClick={(e)=>onCheckoutClick(dispatch,history)}>Go To Checkout</CustomButton>
        </div>
    );

}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));