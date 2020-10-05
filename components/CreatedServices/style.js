import css from "styled-jsx/css";

export default css`
  article {
    display: flex;
    padding: 10px 15px;
    border-bottom: 2px solid #eee;
  }

  article :hover {
    background: #f5f8fa;
    cursor: pointer;
  }

  header {
    display: flex;
  }

  header p,
  span {
    float: left;
    margin-left: 5px;
  }

  img {
    border-radius: 10px;
    height: auto;
    width: 100%;
    margin-top: 10px;
  }

  div {
    padding-right: 10px;
  }
  p {
    margin: 0;
  }
  a {
    color: #555;
    font-size: 14px;
    text-decoration: none;
  }
  a :hover {
    text-decoration: underline;
  }
`;
