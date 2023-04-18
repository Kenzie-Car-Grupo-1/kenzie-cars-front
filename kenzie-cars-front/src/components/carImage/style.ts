import styled from "styled-components";

export const StyledBoxImage = styled.div`
  width: 100%;
  height: 300px;
  z-index: 0;

  background-color: var(--brand1);

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const StyledBoxImageCar = styled.div`
  width: 95%;
  min-height: calc(90% - 20px);
  /* min-height: 250px; */
  max-width: 750px;
  max-height: 274px;

  border-radius: 4px;

  background-color: var(--white-fixed);

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  overflow: hidden;

  div {
    width: 100%;
    max-width: 260px;
    min-height: 239px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #e9ecef;
    border-radius: 4px;
  }

  img {
    /* width: 100%;
    height: auto; */
    max-height: 400px;
  }

  @media (min-width: 700px) {
    max-height: 355px;
  }
`;
