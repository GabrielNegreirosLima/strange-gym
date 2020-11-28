import React, { useState } from "react";
import { Form, Formik } from "formik";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { SignUpSchema } from "../validations";

import {
	SignInContainer,
	FormWrapper,
	Logo,
	LogoWrapper,
	ButtonWrapper,
	InputWrapper,
} from "../SignIn/styles";
import { signUp } from "../../../api/auth";
import { useHistory } from "react-router-dom";

interface UserType {
	name: string;
	value: number;
}

// enum for user type
// 0 - student
// 1 - teacher
// 2 - secretary
// 3 - doctor

function SignIn() {
	const history = useHistory();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [cred_card_issuers] = useState<Array<UserType>>([
		{
			name: "Mastercard",
			value: 0,
		},
		{
			name: "Visa",
			value: 1,
		},
		{
			name: "Elo",
			value: 2,
		},
	]);

	const [userTypes, setUserTypes] = useState<Array<UserType>>([
		{
			name: "Professor",
			value: 1,
		},
		{
			name: "Secretário(a)",
			value: 2,
		},
		{
			name: "Médico",
			value: 3,
		},
	]);
	function handleSubmit(values: any) {
		setIsLoading(true);

		const newValues = { ...values, enum_user: Number(values.userType) };

		const params = { ...newValues };
		console.log({ params });
		signUp(params)
			.then((result) => {
				history.push("/signin");
				alert("Usuário cadastrado com sucesso!");
			})
			.catch(() => {
				alert("Falha ao realizar o cadastro");
			})
			.finally(() => setIsLoading(false));
	}
	return (
		<SignInContainer>
			<Formik
				initialValues={{
					username: "",
					password: "",
					userType: undefined,
					name: "",
					cpf: "",
					rg: "",
					birth_date: "",
					cred_card_name: "",
					cred_card_number: "",
					cred_card_cvv: undefined,
					cred_card_issuer: undefined,
				}}
				enableReinitialize
				validationSchema={SignUpSchema}
				onSubmit={(values) => {
					handleSubmit(values);
				}}
			>
				{({ errors, touched, values }) => (
					<Form>
						<FormWrapper>
							<LogoWrapper>
								<Logo />
							</LogoWrapper>

							<InputWrapper>
								<Input label="Usuário" name="username" type="text" />
								<Input label="Senha" name="password" type="password" />
								<Input select label="Tipo" name="userType" type="text">
									<option value={undefined} selected>
										Escolha o tipo de usuário
									</option>
									{userTypes?.map((userType) => (
										<option value={userType.value}>{userType.name}</option>
									))}
								</Input>
								{values.userType ? (
									<Input label="Nome" name="name" type="text" />
								) : null}
							</InputWrapper>

							<ButtonWrapper>
								<Button
									title="SALVAR"
									primary
									type="submit"
									isLoading={isLoading}
								/>
							</ButtonWrapper>
						</FormWrapper>
					</Form>
				)}
			</Formik>
		</SignInContainer>
	);
}

export default SignIn;
