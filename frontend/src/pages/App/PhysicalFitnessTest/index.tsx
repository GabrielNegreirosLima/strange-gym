import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createPhysicalFitnessTest } from "../../../api/physicalFitnessTest";
import { fetchStudents } from "../../../api/student";
import { Student } from "../../../api/types";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import {
  ContentWrapper,
  FormTitle,
  FormWrapper,
  Row,
  TitleSection,
} from "../../../components/ScreenComponents";
import { RootState } from "../../../redux";

import { PhysicalFitnessTestContainer } from "./styles";
import { PhysicalFitnessTestSchema } from "./validations";

function PhysicalFitnessTest() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useSelector((state: RootState) => state.auth);

  function handleSubmit(values: any) {
    const newPhysicalFitnessTest = {
      weight: Number(values.weight),
      height: Number(values.height),
      blood_pressure: values.blood_pressure,
      body_fat_percentage: Number(values.body_fat_percentage),
      body_mass_percentage: Number(values.body_mass_percentage),
      result: values.result,
      doctorId: Number(user?.id),
      studentId: Number(values.studentId),
    };

    createPhysicalFitnessTest({ ...newPhysicalFitnessTest })
      .then((result) => {
        setIsLoading(true);
      })
      .catch((err) => {
        alert("Deu ruim");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchStudents().then((response) => {
      setStudents(response.data);
    });
  }, []);

  return (
    <PhysicalFitnessTestContainer>
      <FormTitle>Teste de aptidão física</FormTitle>
      <ContentWrapper>
        <Formik
          initialValues={{
            weight: null,
            height: null,
            blood_pressure: null,
            body_fat_percentage: null,
            body_mass_percentage: null,
            result: false,
            studentId: null,
          }}
          enableReinitialize
          validationSchema={PhysicalFitnessTestSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched, values }) => (
            <FormWrapper>
              <Form>
                <Input select label="Aluno" name="studentId" type="text">
                  <option value={undefined} selected>
                    Selecione o aluno
                  </option>
                  {students.map((student: Student) => (
                    <option value={student.id}>{student.name}</option>
                  ))}
                </Input>

                <Input
                  label="Peso"
                  name="weight"
                  type="number"
                  placeholder="Ex: 68kg"
                />
                <Input
                  label="Altura"
                  name="height"
                  type="number"
                  placeholder="Ex: 168cm"
                />
                <Input
                  label="Pressão sanguinia"
                  name="blood_pressure"
                  type="text"
                  placeholder="Ex: 12/8"
                />
                <Input
                  label="Porcentagem de gordura"
                  name="body_fat_percentage"
                  type="number"
                  placeholder="Ex: 22%"
                />
                <Input
                  label="Porcentagem de massa magra"
                  name="body_mass_percentage"
                  type="number"
                  placeholder="Ex: 68%"
                />
                <Input label="Aprovado" name="result" type="checkbox" />
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
    </PhysicalFitnessTestContainer>
  );
}

export default PhysicalFitnessTest;
