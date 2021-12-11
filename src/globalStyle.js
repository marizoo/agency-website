import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const mainColor = () => {
  return css`
    #7d7d7d
    `;
};

export const secondaryColor = () => {
  return css`
    #ccac00
    `;
};

export const centerAll = () => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
};

export const columnThis = () => {
  return css`
    display: flex;
    flex-direction: column;
  `;
};
