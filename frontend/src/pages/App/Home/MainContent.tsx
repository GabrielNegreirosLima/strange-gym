import React from "react";
import PhysicalFitnessTest from "../PhysicalFitnessTest";
import styled from "styled-components";

export const MainContentContainer = styled.div`
  /* max-width: 500px; */
  display: flex;
  flex: 1;

  justify-content: center;
`;

interface MainContentProps {
  children?: React.ReactNode;
}

function MainContent({ children }: MainContentProps) {
  return <MainContentContainer>{children}</MainContentContainer>;
}

export default MainContent;
