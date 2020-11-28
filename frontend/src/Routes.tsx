import React from "react";
import { useSelector } from "react-redux";
import Class from "./pages/App/Class";
import Enrollment from "./pages/App/Enrollment";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/App/Home";
import Modality from "./pages/App/Modality";
import PhysicalFitnessTest from "./pages/App/PhysicalFitnessTest";
import Plan from "./pages/App/Plan";
import Schedule from "./pages/App/Schedule";
import StudentSignUp from "./pages/App/StudentSignUp";
import Training from "./pages/App/Training";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import { RootState } from "./redux";

function Routes() {
  const { user } = useSelector((state: RootState) => state.auth);
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
        <Route path="/physicalFitnessTest">
          <Home>
            <PhysicalFitnessTest />
          </Home>
        </Route>
        <Route path="/studentSignUp">
          <Home>
            <StudentSignUp />
          </Home>
        </Route>
        <Route path="/modality">
          <Home>
            <Modality />
          </Home>
        </Route>
        <Route path="/enrollment">
          <Home>
            <Enrollment />
          </Home>
        </Route>
        <Route path="/plan">
          <Home>
            <Plan />
          </Home>
        </Route>
        <Route path="/schedule">
          <Home>
            <Schedule />
          </Home>
        </Route>
        <Route path="/class">
          <Home>
            <Class />
          </Home>
        </Route>
        <Route path="/training">
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
