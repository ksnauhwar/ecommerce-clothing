import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.util';

import './header.styles.scss';

const Header = ({currentUser})=>{
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
          
        </nav>
    </div>);
}

export default Header;