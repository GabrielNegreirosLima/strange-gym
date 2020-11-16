import * as Yup from "yup";

export const PhysicalFitnessTestSchema = Yup.object().shape({
  weight: Yup.string()
    .required("O campo peso é obrigatório")
    .typeError("O campo peso é obrigatório"),
  height: Yup.string()
    .required("O campo altura é obrigatório")
    .typeError("O campo altura é obrigatório"),
  blood_pressure: Yup.string()
    .required("O campo pressão sanguinia é obrigatório")
    .typeError("O campo pressão sanguinia é obrigatório"),
  body_fat_percentage: Yup.string()
    .required("O campo porcentagem de gordura é obrigatório")
    .typeError("O campo porcentagem de gordura é obrigatório"),
  body_mass_percentage: Yup.string()
    .required("O campo porcentagem de massa magra é obrigatório")
    .typeError("O campo porcentagem de massa magra é obrigatório"),
  studentId: Yup.string()
    .required("O campo estudante é obrigatório")
    .typeError("O campo estudante é obrigatório"),
});
