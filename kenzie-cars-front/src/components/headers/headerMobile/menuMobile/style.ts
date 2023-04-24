import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledNavMobile = styled(motion.nav)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 32px 12px;

  width: 100%;

  position: absolute;
  top: 80px;
  z-index: 1;

  background: var(--grey9);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  button {
    width: 100%;

    background: var(--grey9);

    padding: 10px;

    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    font-family: "Inter";
  }

  .btn-login {
    width: max-content;
    margin-bottom: 30px;
  }
  .grey {
    color: var(--grey2);
    border: transparent;
    margin-bottom: 0px;
    font-size: 16px;
  }

  @media (min-width: 700px) {
    display: none;
  }
`;
