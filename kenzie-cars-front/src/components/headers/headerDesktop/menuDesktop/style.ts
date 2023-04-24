import styled from "styled-components";
import { motion } from "framer-motion";

interface iStyledNavDesktop {
  width: string;
}

export const StyledNavDesktop = styled.div<iStyledNavDesktop>`
  width: ${(props) => props.width || "300px"};
  height: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  border-left: 2px solid #dee2e6;
`;

export const StyledMenuDesktop = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: #f8f9fa;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  width: 200px;

  position: absolute;
  top: 65px;
  z-index: 1;

  border-radius: 4px;
  overflow: hidden;

  background: var(--grey9);

  button {
    width: 100%;
    border: none;
    color: var(--grey2);

    background: var(--grey9);

    padding: 10px;

    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    font-family: "Inter";
    :hover {
      background-color: var(--grey7);
    }
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const StyledDivUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;

    color: #495057;

    cursor: pointer;
  }
  img {
    width: max-content;
    margin-left: 0px;
    margin-right: 8px;
  }
`;
