import { motion } from "framer-motion";
import styled from "styled-components";

export const StyleBackgroundModal = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  /* padding: 10px; */

  /* display: flex; */
  justify-content: center;
  align-items: flex-start;

  position: fixed;
  top: 0px;

  z-index: 100;

  background: rgba(0, 0, 0, 0.5);
  .form {
    margin-top: 20px;

    max-height: 90vh;
    overflow-y: scroll;

    display: flex;
    align-items: flex-start;
  }
`;

export const StyledButtonClose = styled.button`
  border: none;
  background-color: transparent;
  width: 30px;
  height: 30px;
  cursor: pointer;

  color: var(--grey4);

  position: absolute;
  top: 3%;
  right: 3%;

  svg {
    min-width: 100%;
    height: 100%;
  }
`;
