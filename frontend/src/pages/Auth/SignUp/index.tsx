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

	const [userTypes] = useState<Array<UserType>>([
		{
			name: "Estudante",
			value: 0,
		},
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
								{values.userType === 0 ? (
									<>
										<Input label="Nome" name="name" type="text" />
										<Input label="CPF" name="cpf" type="text" />
										<Input label="RG" name="rg" type="text" />
										<Input label="Nascimento" name="birth_date" type="date" />
										<Input
											label="Cartão de crédito - Nome"
											name="cred_card_name"
											type="text"
										/>
										<Input
											label="Cartão de crédito - Número"
											name="cred_card_number"
											type="text"
										/>
										<Input
											label="Cartão de crédito - CVV"
											name="cred_card_cvv"
											type="number"
										/>
										<Input
											select
											label="Bandeira"
											name="cred_card_issuer"
											type="text"
										>
											<option value={undefined} selected>
												Escolha a bandeira do cartão
											</option>
											{cred_card_issuers?.map((cred_card_issuer) => (
												<option
													key={cred_card_issuer.value}
													value={cred_card_issuer.name}
												>
													{cred_card_issuer.name}
												</option>
											))}
										</Input>
									</>
								) : values.userType ? (
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
