import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// const NavigationLinkStyles = css`
//   text-decoration: none;
//   text-transform: uppercase;
//   font-size: 1.8rem;
//   letter-spacing: 1px;
//   color: #777;
//   padding: 1rem;
//   font-family: "Open Sans Condensed";
// `;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 2.5rem;
`;

export const LogoLinkContainer = styled(Link)`
  width: 7.5rem;
  height: 7.5rem;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 30vw;
`;

export const NavigationLinkContainer = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.8rem;
  letter-spacing: 1px;
  color: #777;
  padding: 1rem;
  font-family: "Open Sans Condensed";
`;

// export const NavigationLinkAnchor = styled.a`
//   ${NavigationLinkStyles}
// `;
