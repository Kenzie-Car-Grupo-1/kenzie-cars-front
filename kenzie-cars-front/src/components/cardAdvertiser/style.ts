import styled from "styled-components";

export const StyledAdvertiserCard = styled.div`
  width: 95%;
  max-width: 440px;
  height: 461px;

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
  }

  @media (min-width: 700px) {
    max-width: 1240px;
    height: 406px;

    .advertiser-bio {
      width: 100%;
    }
  }
`;

export const StyledDivBackground = styled.div`
  position: absolute;
  top: 0px;
  z-index: 0;
  height: 251px;
  width: 100%;
  background-color: var(--brand1);

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    height: 277px;
  }
`;

export const TagInitials = styled.p`
  width: 104px;
  height: 104px;
  background-color: var(--brand1);
  border-radius: 50%;
  margin-bottom: 24px;

  color: var(--white-fixed);
  font-family: var(--font-family-3);
  font-weight: var(--font-weight-3);
  font-size: var(--text-size-2);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCardDiv = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  width: 100%;

  span {
    width: 104px;
    height: 104px;
    font-size: 36px;
  }
`;

export const StyledCardInfo = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;

  width: 100%;
  gap: 9px;

  p {
    font-family: var(--font-family-1);
    font-weight: var(--font-weight-2);
    font-size: var(--text-size-6);
    line-height: 25px;
    align-content: center;
  }

  span {
    font-family: var(--font-family-3);
    font-size: var(--text-size-8);
    font-weight: var(--font-weight-3);

    color: var(--brand1);
    background-color: var(--brand4);
    border-radius: 4px;

    background-size: cover;
    padding: 4px 8px;
    width: auto;
    height: 25px;

    display: flex;
    align-items: center;
  }
`;
