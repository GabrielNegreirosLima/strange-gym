import React from "react";
import styled from "styled-components";

export const ErrorMessageContainer = styled.div``;

interface ErrorMessageProps {
  message: string;
}
function ErrorMessage({ message }: ErrorMessageProps) {
  return <ErrorMessageContainer />;
}

export default ErrorMessage;
