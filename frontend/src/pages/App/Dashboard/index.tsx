import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "primereact/card";

import { fetchStudents } from "../../../api/student";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { fetchTrainingsById } from "../../../api/training";

const Dashboard: React.FC = () => {
	const { user } = useSelector((state: RootState) => state.auth);
	const [training, setTraining] = useState({
		description: "",
	});
	const [students, setStudents] = useState([
		{
			name: "",
			id: -1,
			cpf: -1,
			rg: -1,
		},
	]);

	useEffect(() => {
		if (user?.enum_user === 0) {
			const fetch = async () => {
				const { data } = await fetchTrainingsById(user.id);

				setTraining(data);
			};
		}
	});
	useEffect(() => {
		const fetch = async () => {
			const { data } = await fetchStudents();

			setStudents(data);
		};
		fetch();
	}, [setStudents]);

	return (
		<Container>
			{user?.enum_user !== 0 ? (
				students.map(
					(s, i) =>
						s.id && (
							<Card title="Aluno" subTitle={`Referencia: ${s.id}`}>
								<CardContainer>
									<span>Aluno:</span>
									<span>{s.name}</span>
									<br />
									<span>CPF:</span>
									<span>{s.cpf}</span>
									<br />
									<span>RG:</span>
									<span>{s.rg}</span>
								</CardContainer>
							</Card>
						)
				)
			) : (
				<Card title="Aluno" subTitle={`Referencia: ${user.id}`}>
					<CardContainer>
						<span>Aluno:</span>
						<span>{user.username}</span>
						<br />
						<span>Treino: </span>
						<br />
						<span>
							{training?.description
								? "Treino de perna, 1, 2 3 5"
								: training.description}
						</span>
						<br />
						<span>Professor</span>
						<span>Professor</span>
					</CardContainer>
				</Card>
			)}
		</Container>
	);
};

const Container = styled.div`
	margin: 10px 30px;
	width: 100%;
	padding: 24px;
	border: 1px solid #a38d65;
	border-radius: 7px;
	box-shadow: 2px 4px 0 rgba(0, 0, 0, 0.24);
`;

const CardContainer = styled.div`
	padding-top: 5px;
`;
export default Dashboard;
