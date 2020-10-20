import css from "styled-jsx/css";

export default css`
  .sectionUser {
    flex-direction: row;
    display: grid;
    grid-template-columns: 40% 60% /*repeat(2, 1fr)*/;
  }

  header {
    display: flex;
    width: 100%;
    padding: 2% 5%;
    justify-content: space-around;
  }
`;
