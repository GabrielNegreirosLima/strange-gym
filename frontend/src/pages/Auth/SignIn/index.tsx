import { Form, Formik } from "formik";
import React, { useState } from "react";
import { signIn } from "../../../api/auth";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { SignInSchema } from "../validations";

import { useHistory } from "react-router-dom";

import {
	SignInContainer,
	FormWrapper,
	Logo,
	LogoWrapper,
	ButtonWrapper,
	InputWrapper,
} from "./styles";
import ErrorMessage from "../../../components/ErrorMessage";

function SignIn() {
	const history = useHistory();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	function handleSubmit(values: any) {
		const { username, password } = values;
		if (!username || !password) return;

		setIsLoading(true);
		signIn(username, password)
			.then((result) => {
				console.log({ result });
				history.push("/");
			})
			.catch((err) => {
				console.log({ err });
				setError(err?.message);
			})
			.finally(() => setIsLoading(false));
	}

	function handleGoToSignUp(e: any) {
		e.preventDefault();
		history.push("/signup");
	}
	return (
		<SignInContainer>
			<Formik
				initialValues={{
					username: "",
					password: "",
				}}
				enableReinitialize
				validationSchema={SignInSchema}
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
								{error && <ErrorMessage message={error} />}
							</InputWrapper>

							<ButtonWrapper>
								<Button
									title="Cadastro"
									type="text"
									onClick={handleGoToSignUp}
								/>
							</ButtonWrapper>
							<ButtonWrapper>
								<Button
									title="ENTRAR"
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
