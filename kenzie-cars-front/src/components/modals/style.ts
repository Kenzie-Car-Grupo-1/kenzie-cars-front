import { motion } from "framer-motion";
import styled from "styled-components";

export const StyleBackgroundModal = styled(motion.div)`
  width: 100%;
  height: 200%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  position: absolute;
  top: 80px;

  background: rgba(0, 0, 0, 0.5);
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
