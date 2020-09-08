import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;

  .left-column,
  .right-column {
    display: none;
  }

  @media only screen and (min-width: 1180px) {
    main {
      display: flex;
      justify-content: center;
      margin: 100px 30px 0;

      .left-column,
      .right-column {
        display: unset;
      }

      .middle-column {
        margin: 0 25px 16px;
      }
    }
  }
`;
