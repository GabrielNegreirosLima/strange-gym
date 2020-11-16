import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { createSchedule, fetchSchedules } from "../../../api/schedule";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import {
  ContentWrapper,
  FormTitle,
  FormWrapper,
} from "../../../components/ScreenComponents";

import { ScheduleContainer } from "./styles";
import { ScheduleSchema } from "./validations";

function Schedule() {
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(values: any) {
    setIsLoading(true);
    const newSchedule = {
      day_of_week: values.day_of_week,
      time_initial: values.time_initial,
      time_end: values.time_end,
    };

    createSchedule({ ...newSchedule })
      .then((result) => {
        alert("Horário cadastrado com sucesso!");
      })
      .catch((err) => {
        alert("Falha ao realizar o cadastro");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <ScheduleContainer>
      <FormTitle>Cadastro de plano</FormTitle>
      <ContentWrapper>
        <Formik
          initialValues={{
            day_of_week: null,
            time_initial: null,
            time_end: null,
          }}
          enableReinitialize
          validationSchema={ScheduleSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched, values }) => (
            <FormWrapper>
              <Form>
                <Input
                  select
                  label="Dia da semana"
                  name="day_of_week"
                  type="text"
                >
                  <option value={undefined} selected>
                    Selecione o dia da semana
                  </option>
                  <option value="monday">Segunda-feira</option>
                  <option value="thursday">Terça-feira</option>
                  <option value="wednesday">Quarta-feira</option>
                  <option value="tuesday">Quinta-feira</option>
                  <option value="friday">Sexta-feira</option>
                </Input>

                <Input label="Início" name="time_initial" type="time" />
                <Input label="Fim" name="time_end" type="time" />

                <Button
                  title="Salvar"
                  primary
                  type="submit"
                  isLoading={isLoading}
                />
              </Form>
            </FormWrapper>
          )}
        </Formik>
      </ContentWrapper>
    </ScheduleContainer>
  );
}

export default Schedule;
