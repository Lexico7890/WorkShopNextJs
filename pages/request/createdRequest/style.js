import css from "styled-jsx/css";
import { colors, breakpoints } from "../../../styles/theme";

export default css`
  .titleModal {
    font-size: 33px;
    text-align: center;
    font-weight: 700;
    text-align: center;
  }

  .articleFormButton {
    text-align: center;
  }

  .articleFormButton button {
    background-color: ${colors.third};
    padding: 1% 2%;
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
    top: 0;
    width: 100%;
    padding: 1%;
  }

  .articleMileage {
    width: 100%;
    margin-top: 10%;
    display: flex;
    padding: 0px 10px;
    justify-content: center;
    align-items: center;
  }

  .articleMileage label {
    font-weight: 700;
    font-size: 20px;
    margin: 0% 3%;
  }

  .articleMileage input {
    border-radius: 8px;
    background-color: #2f3648;
    color: whitesmoke;
    text-align: center;
    max-width: 180px;
  }

  .sectionModal {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
  }

  .sectionModal button :hover {
    opacity: 0.7;
  }

  .articleModal {
    width: 100%;
    padding: 0% 3%;
    justify-content: center;
  }

  .articleModalImg {
    width: 100%;
    padding: 0% 3%;
  }

  .articleModalImg img {
    margin: 10% 20%;
  }

  .articleFormLeft {
    width: 100%;
    margin-top: 4%;
  }

  .articleModal select {
    width: 80%;
    padding: 1%;
    border-radius: 999px;
  }

  .articleModal select :hover {
    border-color: ${colors.third};
  }

  textarea {
    height: 20vh;
    width: 95%;
    font-size: 21px;
    padding: 15px;
    resize: none;
    color: whitesmoke;
    background-color: #2f3648;
    border-radius: 8px;
  }
`;
