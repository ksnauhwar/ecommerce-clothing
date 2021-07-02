import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ()=>{
    return (<div className="header">
        <Link to="/">
            <Logo className="logo"></Logo>
        </Link>
        <nav className="navigation">
            <Link className="navigation__link" to="/shop">Shop</Link>
            <Link className="navigation__link" to="/">Contact</Link>
            <Link className="navigation__link" to="/signIn">Sign In</Link>
        </nav>
    </div>);
}

export default Header;