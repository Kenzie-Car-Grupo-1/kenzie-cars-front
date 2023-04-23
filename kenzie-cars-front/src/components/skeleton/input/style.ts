import styled, { keyframes } from "styled-components";

const SkeletonAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const StyledSkeleton = styled.div`
  width: 100%;
  height: 48px;
  background: linear-gradient(to right, #f8f8f8 8%, #f0f0f0 18%, #f8f8f8 33%);
  background-size: 200px 100%;
  animation: ${SkeletonAnimation} 1.2s ease-in-out infinite;
`;
