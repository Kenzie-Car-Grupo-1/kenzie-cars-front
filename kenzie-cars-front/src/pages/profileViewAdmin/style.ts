import styled from "styled-components";

export const StyledAdsListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-top: 44px;
  background-color: var(--grey8);

  @media (min-width: 1024px) {
    padding-top: 71px;
  }
`;
