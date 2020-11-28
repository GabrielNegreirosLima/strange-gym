import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { createClass } from "../../../api/class";
import { fetchModalities } from "../../../api/modality";
import { fetchSchedules } from "../../../api/schedule";
import { Modality, Schedule } from "../../../api/types";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import {
  ContentWrapper,
  FormTitle,
  FormWrapper,
} from "../../../components/ScreenComponents";

import { ClassContainer } from "./styles";
import { ClassSchema } from "./validations";

function Class() {
  const [isLoading, setIsLoading] = useState(false);
  const [modalities, setModalities] = useState([]);
  const [schedules, setSchedules] = useState([]);

  function handleSubmit(values: any) {
    setIsLoading(true);
    const newClass = {
      capacity: values.capacity,
      modalityId: values.time_initial,
      scheduleId: values.scheduleId,
    };

    createClass({ ...newClass })
      .then(() => {
        alert("Turma cadastrado com sucesso!");
      })
      .catch(() => {
        alert("Falha ao realizar o cadastro");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchModalities().then((response) => {
      setModalities(response.data);
    });
    fetchSchedules().then((response) => {
      setSchedules(response.data);
    });
  }, []);

  return (
    <ClassContainer>
      <FormTitle>Cadastro de turmas</FormTitle>
      <ContentWrapper>
        <Formik
          initialValues={{
            capacity: null,
            modalityId: null,
            scheduleId: null,
          }}
          enableReinitialize
          validationSchema={ClassSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched, values }) => (
            <FormWrapper>
              <Form>
                <Input select label="Modalidade" name="modalityId" type="text">
                  <option value={undefined} selected>
                    Selecione a modalidade
                  </option>
                  {modalities.map((modality: Modality) => (
                    <option value={modality.id}>{modality.name}</option>
                  ))}
                </Input>

                <Input select label="Horário" name="scheduleId" type="text">
                  <option value={undefined} selected>
                    Selecione o horário
                  </option>
                  {schedules.map((schedule: Schedule) => (
                    <option value={schedule.id}>
                      {schedule.day_of_week} - {schedule.time_initial} -{" "}
                      {schedule.time_end}
                    </option>
                  ))}
                </Input>

                <Input label="Capacidade" name="capacity" type="number" />

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
    </ClassContainer>
  );
}

export default Class;
