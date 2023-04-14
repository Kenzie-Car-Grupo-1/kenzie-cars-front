import styled from "styled-components";

export const StyledHeaderDesktop = styled.div`
  width: 100%;
  height: 80px;

  position: relative;
  z-index: 2 !important;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--grey10);
  border-bottom: 2px solid #dee2e6;

  img {
    margin-left: 60px;
  }
  svg {
    margin-right: 20px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
