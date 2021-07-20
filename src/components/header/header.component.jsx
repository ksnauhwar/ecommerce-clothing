import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartDropdownHidden } from '../../redux/cart/cart.selector';

const Header = ({currentUser,hideCartDropdown})=>{
    return (<div className="header">
        <Link to="/">
            <Logo className="logo"></Logo>
        </Link>
        <nav className="navigation">
            <Link className="navigation__link" to="/shop">Shop</Link>
            <Link className="navigation__link" to="/">Contact</Link>
            {
                currentUser ? <a className="navigation__link" href="#" onClick={()=>auth.signOut()}>Sign Out</a>
                :   <Link className="navigation__link" to="/signIn">Sign In</Link>
            }
            <CartIcon/>
          
        </nav>
        { hideCartDropdown ? null : <CartDropdown/>}
        
    </div>);
}

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hideCartDropdown:selectCartDropdownHidden
});

export default connect(mapStateToProps)(Header);