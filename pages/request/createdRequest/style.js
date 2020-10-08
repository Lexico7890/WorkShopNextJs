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
    top: 0;
    width: 100%;
    padding: 1%;
  }

  .articleMileage {
    width: 100%;
    margin-top: 4%;
    display: flex;
    padding: 0px 10px;
    justify-content: center;
    align-items: center;
  }

  .articleMileage label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid #000000;
  }

  .articleMileage input,
  select {
    width: 100%;
    height: 100%;
    background: none;
    color: #000000ee;
    padding-top: 20px;
    border: none;
    outline: 0px;
    margin-right: 4px;
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
  }

  .articleModalImg {
    width: 100%;
  }

  .articleModalImg img {
    margin: 10% 20%;
  }

  .articleFormLeft {
    width: 100%;
    margin-top: 4%;
  }

  .select-box {
    display: flex;
    width: 90%;
    flex-direction: column;
  }

  .select-box .options-container {
    background-color: #2f3648;
    color: #f5f6fa;
    max-height: 0;
    opacity: 0;
    width: 100%;
    transition: all 0.4s;
    border-radius: 8px;
    overflow: hidden;
    order: 1;
  }

  .selected {
    background: #2f3648;
    border-radius: 8px;
    margin-bottom: 8px;
    color: #f5f6fa;
    position: relative;
    width: 90%;
    order: 0;
    justify-content: space-between;
    display: flex;
    align-items: center;
  }

  .icon {
    float: right;
  }

  .selected p {
    margin: 0;
    font-weight: 700;
  }

  .selected::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 32px;
    right: 10px;
    top: 5px;
    transition: all 0.4s;
  }

  .select-box .options-container.active {
    max-height: 240px;
    opacity: 1;
    overflow-y: scroll;
  }

  .select-box .options-container.active + .selected::after {
    transform: rotateX(180deg);
    top: -6px;
  }

  .select-box .options-container::-webkit-scrollbar {
    width: 8px;
    background: #0d141f;
    border-radius: 0 8px 8px 0;
  }

  .select-box .options-container::-webkit-scrollbar-thumb {
    background: #525861;
    border-radius: 0 8px 8px 0;
  }

  .select-box .option,
  .selected {
    padding: 10px 24px;
    cursor: pointer;
  }

  .select-box .option:hover {
    background: #414b57;
  }

  .select-box label {
    cursor: pointer;
  }

  .select-box .option .radio {
    display: none;
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
    border: 1;
    font-size: 21px;
    padding: 15px;
    resize: none;
  }
`;
