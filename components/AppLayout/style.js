import css from "styled-jsx/css";
import { fonts, colors, breakpoints } from "../../styles/theme";
import { addOpacityToColor } from "../../styles/utils";

const background = addOpacityToColor(colors.third, 0.3);

export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(${background} 1px, transparent 1px),
      radial-gradient(${background} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: ${fonts.base};
  }

  section {
    margin-left: 49px;
    margin-top: 49px;
    width: 100%;
  }

  textarea,
  input {
    font-family: ${fonts.base};
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
    font-weight: 500;
    font-size: 19px;
  }
  * {
    box-sizing: border-box;
  }
  button {
    outline: none !important;
  }
`;

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }

  main {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    height: 100%;
    width: 100%;
    position: relative;
    overflow-y: auto;
    display: flex;
    overflow-x: hidden;
  }

  @media (min-width: ${breakpoints.pc}) {
    main {
      height: 100vh;
      width: 100%;
    }
  }
`;
