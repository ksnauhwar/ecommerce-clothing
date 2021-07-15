import React from 'react';
import {connect} from 'react-redux';

import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';


const CartIcon = ({toggleCartDropdown,count}) => {
    return (
        <div className="cart-icon" onClick={()=>toggleCartDropdown()}>
            <ShoppingIcon className="cart-icon__bag"/>
            <span className="cart-icon__count">{count}</span>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdown:()=>dispatch(toggleCartDropdown())
})

const mapStateToProps = state => ({
    count:selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
