import React from "react";

import Header from "../../../components/Header";
import MainContent from "./MainContent";

import { HomeContainer, ContentWrapper } from "./styles";

const Home: React.FC = () => {
	return (
		<HomeContainer>
			<Header />
			<ContentWrapper>
				<MainContent />
			</ContentWrapper>
		</HomeContainer>
	);
};

export default Home;
