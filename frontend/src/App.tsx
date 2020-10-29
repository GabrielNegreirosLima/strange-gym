import React from "react";
import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";

import store from "./redux";
import Routes from "./Routes";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
