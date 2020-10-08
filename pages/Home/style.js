import css from "styled-jsx/css";
import { breakpoints } from "../../styles/theme";
//import { addOpacityToColor } from "../../styles/utils";

//const background = addOpacityToColor(colors.third, 0.8);

export default css`
  section {
    flex: 1;
  }

  nav {
    bottom: 0;
    background: #fff;
    position: sticky;
    border-top: 1px solid #eee;
    height: 49px;
    width: 100%;
    display: flex;
  }

  @media (min-width: ${breakpoints.pc}) {
    .sectionFirts {
      flex-direction: row;
      display: grid;
      grid-template-columns: 40% 60% /*repeat(2, 1fr)*/;
    }

    .articleUser {
      width: 100%;
    }

    .articleServices {
      float: right;
      width: 100%;
    }
  }
`;
