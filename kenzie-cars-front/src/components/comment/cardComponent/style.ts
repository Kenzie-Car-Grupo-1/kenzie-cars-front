import styled from "styled-components";

const colorVariables = [
  "--random-1",
  "--random-2",
  "--random-3",
  "--random-4",
  "--random-5",
  "--random-6",
  "--random-7",
  "--random-8",
  "--random-9",
  "--random-10",
  "--random-11",
  "--random-12",
];

const randomColor =
  colorVariables[Math.floor(Math.random() * colorVariables.length)];

export const StyledCardComment = styled.li`
  background: #fdfdfd;
  display: flex;
  flex-direction: column;

  font-family: var(--font-family-3);

  .div-user {
    display: flex;
    margin-bottom: 16px;

    .user-initials {
      display: flex;
      margin-right: 8px;
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
      gap: 8px;

      span {
        font-weight: 400;
        font-size: 12px;
        line-height: 24px;
        color: var(--grey3);
      }
    }
  }
  p {
    font-family: var(--font-family-4);
    font-size: var(--text-size-8);
    line-height: 24px;
    text-align: justify;
    color: var(--grey2);
  }
`;
