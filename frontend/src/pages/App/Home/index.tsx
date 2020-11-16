import React from "react";

import Header from "../../../components/Header";
import LeftMenu from "./LeftMenu";
import MainContent from "./MainContent";

import { HomeContainer, ContentWrapper } from "./styles";

interface HomeProps {
  children?: React.ReactNode;
}

function Home({ children }: HomeProps) {
  return (
    <HomeContainer>
      <Header />
      <ContentWrapper>
        <LeftMenu />
        <MainContent>{children}</MainContent>
      </ContentWrapper>
    </HomeContainer>
  );
}

export default Home;
