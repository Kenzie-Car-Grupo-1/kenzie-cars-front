import styled from "styled-components";

export const StyledSection = styled.section`
  background: var(--grey8);
  padding: 18px auto 42px auto;
  margin: 0 auto;
  padding-top: 18px;
`;

export const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background: var(--grey10);
  /* margin: 18px auto 42px auto; */
  border-radius: 4px;
  width: 95%;
  margin: 0 auto;

  padding: 36px 20px;

  max-width: 751px;

  @media (min-width: 700px) {
    padding: 44px 36px;
  }

  h3 {
    font-family: var(--font-family-1);
    font-weight: var(--font-weight-2);
    font-size: var(--text-size-6);
    line-height: 25px;

    margin-bottom: 28px;

    color: var(--grey1);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
`;
