import css from "styled-jsx/css";

export default css`
  .articleFormLeftRadio {
    width: 100%;
    margin-top: 4%;
    display: grid;
    grid-template-columns: 50% 50%;
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

  .select-box .options-container {
    background-color: #2f3648;
    color: #f5f6fa;
    max-height: 0;
    width: 100%;
    border-radius: 8px;
    order: 1;
    max-height: 240px;
    opacity: 1;
    overflow-y: scroll;
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

  .hearSelectServices {
    font-weight: 500;
  }

  .divArrayServices {
    margin: 0% 5%;
    border-radius: 8px;
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.5);
    padding: 2%;
  }

  .divCheck {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 5px 0px;
    border-bottom: 1px solid black;
  }

  .divCheck p {
    margin: 0% 3%;
    font-size: 15px;
    font-weight: 500;
  }
`;
