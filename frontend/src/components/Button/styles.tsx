import styled from "styled-components";

interface ContainerProps {
  primary?: boolean;
}
export const Container = styled.button<ContainerProps>`
  width: 100%;
  min-height: 64px;
  padding: 8px;

  align-items: center;
  justify-content: center;

  background-color: ${(props) => (props.primary ? "#A38D65" : "#FFF")};
  border: 1px solid #a38d65;
  border-radius: 4px;
`;

export const Text = styled.span<ContainerProps>`
  color: ${(props) => (props.primary ? "#fff" : "#A38D65")};
  font-weight: bold;
`;
