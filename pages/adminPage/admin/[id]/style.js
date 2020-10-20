import css from "styled-jsx/css";

export default css`
  .sectionAdmin {
    display: grid;
    grid-template-columns: 40% 30% 30%;
  }

  .articleLeft {
    display: block;
    justify-content: center;
  }

  header {
    padding: 3%;
    text-align: center;
  }

  .imgAvatar {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 30vh;
    border-radius: 999px;
    margin-top: 5%;
  }
  .botones {
    justify-content: center;
    align-items: center;
    padding: 5%;
  }
  .headerList {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid #dedede;
  }

  .headerList > p {
    font-weight: 500;
    font-size: 23px;
    margin: 0;
  }
  .buttonPlus {
    border: 0;
    background-color: #fff;
    border-radius: 8px;
    padding: 4px;
    display: flex;
    align-items: center;
    width: 48px;
    transition: width 2s, background-color 2s;
  }
  .buttonPlus p {
    text-align: center;
    width: 100%;
    transform: translate(0px);
    -webkit-transition: all 500ms ease-in-out;
    -moz-transition: all 500ms ease-in-out;
    -ms-transition: all 500ms ease-in-out;
    -o-transition: all 500ms ease-in-out;
    opacity: 0;
    transition: transfom opacity 1.5s;
    margin: 0;
  }
  .buttonPlus:hover {
    border: 0;
    width: 110px;
    justify-content: space-between;
    align-items: center;
    padding: 4px 5px;
    transition: width 1s, backgroun-color 1s;
    background-color: #6c63ff;
  }
  .buttonPlus:hover p {
    font-weight: 500;
    transform: translate(0px, 0px);
    opacity: 1;
    margin: 0;
  }
`;
