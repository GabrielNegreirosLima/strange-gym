import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/App/Home";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

// import { Container } from './styles';

function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/signin">
					<SignIn />
				</Route>
				<Route path="/signup">
					<SignUp />
				</Route>
				<Route path="/" exact>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default Routes;
