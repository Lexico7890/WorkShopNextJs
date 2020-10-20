import css from "styled-jsx/css";

export default css`
  .select-box {
    display: flex;
    width: 95%;
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
    width: 95%;
    order: 0;
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin: 3% 0%;
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
`;
