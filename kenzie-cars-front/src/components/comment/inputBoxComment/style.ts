import styled from "styled-components";

export const StyledInputBoxComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background: var(--grey10);

  margin: 42px auto 45px auto;
  border-radius: 4px;

  width: 95%;

  padding: 36px 20px;

  max-width: 751px;

  @media (min-width: 700px) {
    padding: 44px 36px;
  }

  .div-user {
    display: flex;
    margin-bottom: 16px;

    .user-fullname {
      font-family: var(--font-family-3);
      font-size: var(--text-size-8);
      font-weight: var(--font-weight-3);

      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  .div-input {
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
    width: 100%;

    @media (min-width: 790px) {
    }
  }

  textarea {
    display: block;
    width: 100%;
    height: 128px;
    font-family: var(--font-family-3);
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    padding: 13px 16px;
    border: 1.5px solid #e9ecef;
    resize: none;
    border-radius: 4px;

    &::placeholder {
      vertical-align: top;
      color: var(--grey3);
    }

    &:focus:valid {
      outline: none;
      border: 1.5px solid #5126ea;
    }

    @media (min-width: 790px) {
      padding-right: 140px;
    }
  }

  button {
    width: 108px;

    @media (min-width: 790px) {
      position: absolute;
      right: 11px;
      bottom: 60px;
    }
  }

  .div-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    button {
      display: flex;
      align-items: center;
      width: max-content;
      border-radius: 24px;
      padding: 5px 12px;
      font-weight: 500;
      font-size: 12px;
      height: 24px;
      position: static;
    }
  }
`;
