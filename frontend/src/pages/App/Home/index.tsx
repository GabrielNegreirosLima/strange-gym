import React from "react";

import Header from "../../../components/Header";
import MainContent from "./MainContent";

import { HomeContainer, ContentWrapper } from "./styles";
interface Props {
	children?: React.ReactNode;
}
const Home: React.FC<Props> = ({ children }: Props) => {
	return (
		<HomeContainer>
			<Header />
			<ContentWrapper>{children}</ContentWrapper>
		</HomeContainer>
	);
};

export default Home;
