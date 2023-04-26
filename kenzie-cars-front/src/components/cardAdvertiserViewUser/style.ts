import styled from "styled-components";

export const StyledAdvertiserCard = styled.div`
  width: 95%;
  max-width: 440px;
  height: 397px;

  background: var(--grey10);
  border-radius: 4px;
  margin-top: 65px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  padding: 40px 29px;
  position: relative;

  .advertiser-bio {
    font-family: var(--font-family-3);
    font-weight: var(--font-weight-4);
    font-size: var(--text-size-7);
    line-height: 28px;
    color: var(--grey2);

    margin-top: 24px;
    margin-bottom: 16px;
    
    display: flex;
    align-items: start;
    width: 100%;
  }

  @media (min-width: 700px) {
    max-width: 1240px;
    height: 327px;

    .advertiser-bio {
      width: 100%;
    }
  }
`;