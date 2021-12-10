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
