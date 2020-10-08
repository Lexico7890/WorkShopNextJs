import css from "styled-jsx/css";
import { colors } from "../../styles/theme";

export default css`
  nav {
    flex-direction: column;
    height: 100vh;
    width: 49px;
    display: flex;
    position: fixed;
    padding: 45px 0px;
    transition-duration: 100ms;
    background-color: ${colors.second};
  }

  nav a:hover {
    background: radial-gradient(#f5866e44 30%, transparent 16%);
    background-size: 180px 180px;
    background-position: center;
  }

  nav a :hover > :global(svg) {
    stroke: ${colors.fourd};
  }

  nav a {
    flex-direction: column;
    text-decoration: none;
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  nav p {
    display: none;
  }

  nav :hover {
    width: 100px;
    transition-duration: 100ms;
  }

  nav :hover p {
    display: inline-block;
    color: #000000;
    font-weight: 600;
  }
`;
