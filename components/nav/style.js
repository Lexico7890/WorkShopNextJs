import css from "styled-jsx/css";
import { breakpoints } from "../../styles/theme";

export default css`
  header {
    align-items: center;
    border-bottom: 1px solid #eee;
    height: 49px;
    background: #ffffffaa;
    backdrop-filter: blur(5px);
    position: sticky;
    display: flex;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  h2 {
    font-size: 23px;
    font-weight: 800;
    padding-left: 15px;
  }

  @media (min-width: ${breakpoints.pc}) {
    header {
      position: fixed;
    }
  }
`;
