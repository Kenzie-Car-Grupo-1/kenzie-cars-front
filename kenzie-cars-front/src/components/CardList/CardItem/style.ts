import styled from "styled-components";

export const Item = styled.li`
  cursor: pointer;
  width: 312px;

  .div-img {
    display: flex;
    height: 152px;

    background-color: var(--grey7);
    border: 2px solid var(--grey7);

    img {
      width: auto;
      height: auto;
      max-width: 262px;
      max-height: 150px;
      margin: 0 auto;

      justify-content: center;
      align-items: center;
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
`;
