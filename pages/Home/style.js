import css from "styled-jsx/css";
import { colors, breakpoints } from "../../styles/theme";
import { addOpacityToColor } from "../../styles/utils";

const background = addOpacityToColor(colors.third, 0.8);

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
    nav {
      flex-direction: column;
      height: 100vh;
      width: 49px;
      display: flex;
      position: fixed;
      padding: 45px 0px;
      transition-duration: 100ms;
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

    header {
      position: fixed;
    }

    .sectionFirts {
      margin-left: 49px;
      margin-top: 49px;
      width: 100%;
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

    .sectionModal {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0;
      background-image: radial-gradient(${background} 1.5px, transparent 1px),
        radial-gradient(${background} 1px, transparent 1px);
      background-position: 0 0, 25px 25px;
      background-size: 50px 50px;
    }

    .sectionModal button :hover {
      opacity: 0.7;
    }

    .articleModal {
      width: 100%;
    }

    .articleModalImg {
      width: 100%;
      padding: 10% 20%;
    }

    .articleFormLeft {
      width: 100%;
      margin-top: 4%;
    }

    .articleFormLeftRadio {
      width: 100%;
      margin-top: 4%;
      display: grid;
      grid-template-columns: 80% 20%;
    }

    .articleFormLeftRadio div {
      padding-left: 2%;
    }

    .articleFormLeft textarea {
      margin: 0% 5%;
    }

    .articleFormLeftRadio button {
      background-color: orangered;
      padding: 5%;
      border-radius: 999px;
      font-weight: 700;
      border: 0;
      font-size: 80%;
      margin-top: 50%;
    }

    select {
      width: 80%;
      padding: 1%;
      border-radius: 999px;
    }

    select :hover {
      border-color: ${colors.third};
    }

    label {
      font-weight: "800";
      font-size: 20px;
      margin: 0% 3%;
    }

    textarea {
      height: 20vh;
      width: 95%;
      border: 1;
      font-size: 21px;
      padding: 15px;
      resize: none;
    }

    .titleModal {
      font-size: 33px;
      text-align: center;
      font-weight: 600;
    }

    .articleFormButton {
      text-align: center;
    }

    .articleFormButton button {
      background-color: ${colors.third};
      padding: 2%;
      border-radius: 999px;
      font-weight: 600;
      border: 0;
      font-size: 120%;
      margin: 3%;
    }

    .spanModal {
      position: absolute;
      top: 6px;
      border: 0;
      right: 4px;
      border-radius: 999px;
      color: #000000;
      width: 30px;
      height: 30px;
      font-size: 20px;
      background-color: #f8f1f0;
    }

    .divTitleModal {
      border-bottom: 1px solid #eee;
      background: #f8f1f0aa;
      backdrop-filter: blur(5px);
      position: sticky;
      display: flex;
      top: 0;
      width: 100%;
      z-index: 1;
      padding: 1%;
    }
  }
`;
