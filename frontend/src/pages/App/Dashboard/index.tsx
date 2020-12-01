import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTable } from "react-table";

import { fetchStudents } from "../../../api/student";

const Dashboard: React.FC = () => {
	const [students, setStudents] = useState([
		{
			name: "",
			id: -1,
			cpf: -1,
			rg: -1,
		},
	]);
	useEffect(() => {
		const fetch = async () => {
			const { data } = await fetchStudents();

			setStudents(data);
		};
		fetch();
	}, [setStudents]);

	return <Container>a</Container>;
};

const Container = styled.div`
	width: 100%;
	padding: 24px;
`;
export default Dashboard;
