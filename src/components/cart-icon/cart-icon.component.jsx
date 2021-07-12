import React from 'react';
import {connect} from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';


const CartIcon = ({toggleCartDropdown}) => {
    return (
        <div className="cart-icon" onClick={()=>toggleCartDropdown()}>
            <ShoppingIcon className="cart-icon__bag"/>
            <span className="cart-icon__count">0</span>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdown:()=>dispatch(toggleCartDropdown())
})

export default connect(null,mapDispatchToProps)(CartIcon);
