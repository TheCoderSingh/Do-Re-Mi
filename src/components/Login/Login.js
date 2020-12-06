import React from "react";
import logo from "../../assets/images/logo2.png";
import "./Login.scss";

const {
	REACT_APP_CLIENT_ID,
	REACT_APP_AUTHORIZE_URL,
	REACT_APP_REDIRECT_URI,
} = process.env;

const Login = () => {
	const handleLogin = () => {
		window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}&response_type=token&scope=user-top-read`;
	};

	return (
		<div id="login">
			<div id="login-content">
				<img src={logo} alt="Logo" />
				<button onClick={handleLogin}>Login with Spotify</button>
			</div>
		</div>
	);
};

export default Login;
