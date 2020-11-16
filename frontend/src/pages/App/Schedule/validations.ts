import * as Yup from "yup";

export const ScheduleSchema = Yup.object().shape({
  day_of_week: Yup.string()
    .required("O campo dia da semana é obrigatório")
    .typeError("O campo dia da semana é obrigatório"),
  time_initial: Yup.string()
    .required("O campo inicio é obrigatório")
    .typeError("O campo inicio é obrigatório"),
  time_end: Yup.string()
    .required("O campo fim é obrigatório")
    .typeError("O campo fim é obrigatório"),
});
