import styled from "styled-components";

export const StyledComment = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background: var(--grey10);
  
  border-radius: 4px;

  padding: 36px 28px;

  h3 {
    /* Heading/Heading-6-600 */

    font-family: var(--font-family-1);
    font-weight: var(--font-weight-2);
    font-size: var(--text-size-6);
    line-height: 25px;
    /* identical to box height */

    /* Grey Scale/grey-1 */

    color: #212529;
  }
`;
