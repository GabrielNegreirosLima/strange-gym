import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { createTraining } from "../../../api/training";
import { fetchEnrollments } from "../../../api/enrollment";
import { Enrollment, Modality, Schedule } from "../../../api/types";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import {
  ContentWrapper,
  FormTitle,
  FormWrapper,
} from "../../../components/ScreenComponents";

import { TrainingContainer } from "./styles";
import { TrainingSchema } from "./validations";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

function Training() {
  const [isLoading, setIsLoading] = useState(false);
  const [enrollments, setEnrollments] = useState([]);

  const { user } = useSelector((state: RootState) => state.auth);

  function handleSubmit(values: any) {
    console.log({ user });
    if (user) {
      setIsLoading(true);
      const newTraining = {
        description: values.description,
        teacherId: user?.teacher?.id,
        enrollmentId: Number(values.enrollmentId),
      };

      createTraining({ ...newTraining })
        .then(() => {
          alert("Treino cadastrado com sucesso!");
        })
        .catch(() => {
          alert("Falha ao realizar o cadastro");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  useEffect(() => {
    fetchEnrollments().then((response) => {
      setEnrollments(response.data);
    });
  }, []);

  return (
    <TrainingContainer>
      <FormTitle>Cadastro de treino</FormTitle>
      <ContentWrapper>
        <Formik
          initialValues={{
            description: null,
            enrollmentId: null,
          }}
          enableReinitialize
          validationSchema={TrainingSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched, values }) => (
            <FormWrapper>
              <Form>
                <Input select label="Matricula" name="enrollmentId" type="text">
                  <option value={undefined} selected>
                    Selecione a matricula
                  </option>
                  {enrollments.map((enrollment: Enrollment) => (
                    <option value={enrollment.id}>
                      {enrollment.id} - {enrollment.student.name}
                    </option>
                  ))}
                </Input>

                <Input
                  textarea
                  label="Descrição"
                  name="description"
                  type="text"
                />

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
    </TrainingContainer>
  );
}

export default Training;
