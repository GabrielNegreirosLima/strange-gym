import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
  username: Yup.string().required("O campo usuário é obrigatório"),
  password: Yup.string().required("O campo senha é obrigatório"),
});
export const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("O campo usuário é obrigatório"),
  password: Yup.string().required("O campo senha é obrigatório"),
  userType: Yup.number()
    .required("Selecione uma opção")
    .typeError("Selecione uma opção"),
  name: Yup.string().required("O campo nome é obrigatório"),
  // cpf: Yup.string().required("O campo CPF é obrigatório"),
  // rg: Yup.string().required("O campo RG é obrigatório"),
  // credCardName: Yup.string().required("O campo é obrigatório"),
  // credCardNumber: Yup.string().required("O campo é obrigatório"),
  // credCardCvv: Yup.number()
  //   .required("Selecione uma opção")
  //   .typeError("Selecione uma opção"),
  // credCardIssuer: Yup.number()
  //   .required("Selecione uma opção")
  //   .typeError("Selecione uma opção"),
});
