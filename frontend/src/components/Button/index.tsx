import React from "react";
import Spinner from "../Spinner";

import { Container, Text } from "./styles";

interface ButtonProps {
  title: string;
  onClick?: (e: any) => any | void;
  primary?: boolean;
  type?: any;
  isLoading?: boolean;
}

function Button({ title, primary, isLoading, ...props }: ButtonProps) {
  return (
    <Container {...props} primary={primary}>
      {isLoading ? (
        <Spinner color={primary ? "#FFF" : "#a38d65"} />
      ) : (
        <Text primary={primary}>{title}</Text>
      )}
    </Container>
  );
}

export default Button;
