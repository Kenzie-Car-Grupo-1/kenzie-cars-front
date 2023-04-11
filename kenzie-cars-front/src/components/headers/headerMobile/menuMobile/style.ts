import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledNavMobile = styled(motion.nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

  position: fixed;
  top: 80px;
  z-index: 1;

  background: var(--grey10);

  button {
    width: 100%;
    border: none;

    background: var(--grey10);

    padding: 10px;

    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    font-family: "Inter";
    :hover {
      background-color: var(--grey7);
    }
  }

  @media (min-width: 700px) {
    display: none;
  }
`;
