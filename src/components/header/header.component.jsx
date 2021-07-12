import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

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

const mapStateToProps = ({user : {currentUser},cart:{hideCartDropdown}}) => ({
    currentUser,
    hideCartDropdown
});

export default connect(mapStateToProps)(Header);