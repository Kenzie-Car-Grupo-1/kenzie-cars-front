import styled from "styled-components";

export const Item = styled.li`
  cursor: pointer;
  width: 312px;
  max-width: 312px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .div-img {
    display: flex;
    height: 152px;
    width: 312px;

    background-color: var(--grey7);
    border: 2px solid var(--grey7);

    img {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      scale: 0.95;

      justify-content: center;
      align-items: end;
      object-fit: contain;
      transition: ease 0.5s;

      &:hover {
        scale: 1;
      }
    }

    &:hover {
      border: 2px solid var(--brand1);
    }
  }

  .div-info {
    padding: 16px 0 20px;
    align-items: center;

    .info-title {
      font-family: var(--font-family-1);
      font-size: var(--text-size-6);
      font-weight: var(--font-weight-2);
      color: var(--grey1);

      margin-bottom: 16px;
    }

    .info-text {
      font-family: var(--font-family-3);
      font-size: var(--text-size-8);
      font-weight: var(--font-weight-4);
      color: var(--grey2);
    }
  }

  .div-user {
    display: flex;
    margin-bottom: 16px;

    .user-initials {
      display: flex;
      margin-right: 16px;
      width: 32px;
      height: 32px;
      border-radius: 50%;

      align-items: center;
      justify-content: center;

      font-family: var(--font-family-3);
      font-size: var(--text-size-8);
      font-weight: var(--font-weight-3);
      color: var(--white-fixed);
      background-color: var(--brand1);
    }

    .user-fullname {
      font-family: var(--font-family-3);
      font-size: var(--text-size-8);
      font-weight: var(--font-weight-3);

      display: flex;
      align-items: center;
      text-decoration: none;
      color: var(--grey2);
    }
  }

  .div-extra {
    display: flex;
    justify-content: space-between;

    .extra-tags {
      display: flex;
      justify-content: space-between;

      gap: 12px;

      p {
        font-family: var(--font-family-3);
        font-size: var(--text-size-8);
        font-weight: var(--font-weight-3);

        color: var(--brand1);
        background-color: var(--brand4);

        background-size: cover;
        padding: 4px 8px;
        width: auto;
      }
    }

    p {
      font-family: var(--font-family-1);
      font-size: var(--text-size-7);
      font-weight: var(--font-weight-3);
    }
  }

  .div-space {
    display: flex;
    flex-direction: column;
  }
`;
