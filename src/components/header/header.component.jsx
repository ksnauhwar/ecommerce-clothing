import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.util";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOut } from "../../redux/user/user.actions";
import { selectCartDropdownHidden } from "../../redux/cart/cart.selector";
import {
  HeaderContainer,
  LogoLinkContainer,
  NavigationContainer,
  NavigationLinkContainer,
} from "./header.styles";

const Header = ({ currentUser, hideCartDropdown, dispatch }) => {
  return (
    <HeaderContainer>
      <LogoLinkContainer to="/">
        <Logo className="logo"></Logo>
      </LogoLinkContainer>
      <NavigationContainer>
        <NavigationLinkContainer to="/shop">Shop</NavigationLinkContainer>
        <NavigationLinkContainer to="/">Contact</NavigationLinkContainer>
        {currentUser ? (
          <NavigationLinkContainer
            as="a"
            href="#"
            onClick={() => dispatch(signOut())}
          >
            Sign Out
          </NavigationLinkContainer>
        ) : (
          <NavigationLinkContainer to="/signIn">
            Sign In
          </NavigationLinkContainer>
        )}
        <CartIcon />
      </NavigationContainer>
      {hideCartDropdown ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hideCartDropdown: selectCartDropdownHidden,
});

export default connect(mapStateToProps)(Header);
