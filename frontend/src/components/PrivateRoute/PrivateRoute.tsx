import React from "react";
import { Redirect, Route } from "react-router-dom";

interface Props {
	user: any;
	Component: any;
}

const PrivateRoute: React.FC<Props> = ({ user, Component, ...rest }: Props) => (
	<Route
		{...rest}
		render={(props) =>
			user.accessToken ? <Component {...props} /> : <Redirect to="/signin" />
		}
	/>
);

export default PrivateRoute;
