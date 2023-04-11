import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledFilter = styled(motion.div)`
  display: flex;
  flex-direction: column;
  font-family: var(--font-family-1);
  padding: 100px 27px 0 27px;
  width: 100vw;
  /* position: absolute;
  top: 0; */

  .div-filter {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
    }
    button {
      border: none;
      background-color: transparent;
    }
  }

  h2 {
    font-weight: var(--font-weight-2);
    font-size: var(--text-size-4);
    line-height: 35px;
    color: #000000;
    margin-top: 32px;
  }
  ul {
    padding: 10px;
  }

  li {
    font-weight: var(--font-weight-3);
    font-size: var(--text-size-6);
    color: var(--grey3);
    line-height: 25px;
  }

  .div-km {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 16px;
    margin-bottom: 16px;

    button {
      width: 141px;

      &:focus {
        background-color: var(--brand2);
        color: white;
      }
    }
  }

  .button {
    margin-top: 26px;
  }
`;
