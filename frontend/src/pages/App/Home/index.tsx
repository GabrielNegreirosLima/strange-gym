import React from "react";

import Header from "../../../components/Header";
import LeftMenu from "./LeftMenu";
import MainContent from "./MainContent";

import { HomeContainer, ContentWrapper } from "./styles";

function Home() {
  return (
    <HomeContainer>
      <Header />
      <ContentWrapper>
        <LeftMenu />
        <MainContent />
      </ContentWrapper>
    </HomeContainer>
  );
}

export default Home;
