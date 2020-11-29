import React from "react";
import { useSelector } from "react-redux";
import Class from "./pages/App/Class";
import Enrollment from "./pages/App/Enrollment";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Home from "./pages/App/Home";
import Modality from "./pages/App/Modality";
import PhysicalFitnessTest from "./pages/App/PhysicalFitnessTest";
import Plan from "./pages/App/Plan";
import Schedule from "./pages/App/Schedule";
import StudentSignUp from "./pages/App/StudentSignUp";
import Training from "./pages/App/Training";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Dashboard from "./pages/App/Dashboard";

import { RootState } from "./redux";

function Routes() {
	const { user } = useSelector((state: RootState) => state.auth);
	console.log({ user });
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
					<Home>
						<Dashboard />
					</Home>
				</Route>
				<Route path="/create/fisical-test" exact>
					<Home>
						<PhysicalFitnessTest />
					</Home>
				</Route>
				<Route path="/create/student">
					<Home>
						<StudentSignUp />
					</Home>
				</Route>
				<Route path="/create/modality">
					<Home>
						<Modality />
					</Home>
				</Route>
				<Route path="/create/enrollment">
					<Home>
						<Enrollment />
					</Home>
				</Route>
				<Route path="/create/plan">
					<Home>
						<Plan />
					</Home>
				</Route>
				<Route path="/create/schedule">
					<Home>
						<Schedule />
					</Home>
				</Route>
				<Route path="/create/class">
					<Home>
						<Class />
					</Home>
				</Route>
				<Route path="/create/drill">
					<Home>
						<Training />
					</Home>
				</Route>
				{!user && <Redirect to="/signin" />}
			</Switch>
		</Router>
	);
}

export default Routes;
