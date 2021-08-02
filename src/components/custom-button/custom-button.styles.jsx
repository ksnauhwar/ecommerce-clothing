import styled, { css } from "styled-components";

const googleButtonStyles = css`
  background-color: #4285f4;
  border: 1px solid transparent;
  color: #eee;

  &:hover {
    background-color: #357ae8;
    color: #eee;
  }
`;

const ghostButtonStyles = css`
  background-color: #eee;
  opacity: 0.85;
  color: #000;
  border: 1px solid #000;
  transition: all 0.2s;

  &:hover {
    border: 1px solid transparent;
    background-color: #000;
    color: #eee;
  }
`;

const defaultButtonStyles = css`
  background-color: #000;
  color: #eee;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-2px);
    background-color: transparent;
    color: #000;
    border: 1px solid #000;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleButtonStyles;
  }

  return props.inverted ? ghostButtonStyles : defaultButtonStyles;
};

const collectionItemButtonStyles = css`
  display: none;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  transition: all 0.2s;

  &:hover {
    display: block;
  }
`;

export const CustomButtonContainer = styled.button`
  padding: 1.5rem 3.5rem;
  border-radius: 3px;

  font-family: "Open Sans Condensed";
  font-size: 1.4rem;
  cursor: pointer;

  transition: all 0.3s;
  text-transform: uppercase;

  ${getButtonStyles}
`;
