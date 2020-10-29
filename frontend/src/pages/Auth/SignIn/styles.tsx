import styled from "styled-components";

export const SignInContainer = styled.div`
  flex: 1;
  display: flex;
  width: 100vw;
  min-height: 100%;
  background-color: #76a38b;

  padding: 16px 0;

  align-items: center;
  justify-content: center;
`;
export const FormWrapper = styled.div`
  width: 400px;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
`;
export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
`;
export const Logo = styled.img.attrs({
  src: process.env.PUBLIC_URL + "/assets/logo.png",
})`
  /* width: 200px;
  height: 50px; */
`;
export const InputWrapper = styled.div`
  margin-bottom: 32px;
`;
export const ButtonWrapper = styled.div`
  margin-top: 16px;
`;
