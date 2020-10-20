import css from "styled-jsx/css";

export default css`
  article {
    justify-content: space-around;
    display: flex;
    padding: 4px 5px;
    align-items: center;
    height: 70px;
    border-radius: 8px;
    margin: 5px 0px;
    box-shadow: 0px 8px 8px 0px #dedede;
    background-color: white;
    transition: background-color 0.3s;
  }

  article:hover {
    background-color: #6c63ff;
  }
  article p {
    font-weight: 500;
    margin: 0;
  }
`;
