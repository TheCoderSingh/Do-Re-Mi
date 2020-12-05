import React, { useEffect, useState } from "react";
import "./App.scss";
import Featured from "./components/Featured/Featured";
import NewReleases from "./components/NewReleases/NewReleases";
import TopArtists from "./components/Top/TopArtists";
import { getCookie } from "./utils/functions";

const {
	REACT_APP_CLIENT_ID,
	REACT_APP_AUTHORIZE_URL,
	REACT_APP_REDIRECT_URI,
} = process.env;

function App() {
	const [token, setToken] = useState();

	const handleLogin = () => {
		window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}&response_type=token&scope=user-top-read`;
	};

	useEffect(() => {
		let _token = getCookie("token");

		if (
			typeof _token === "undefined" ||
			!_token ||
			_token === "undefined"
		) {
			let hash = window.location.hash;

			if (hash) {
				hash = hash
					.substring(1)
					.split("&")
					.reduce(function (initial, item) {
						if (item) {
							var parts = item.split("=");
							initial[parts[0]] = decodeURIComponent(parts[1]);
						}
						return initial;
					}, {});

				window.location.hash = "";
				setToken(hash.access_token);

				let now = new Date();

				now.setTime(now.getTime() + 1 * 3600 * 1000);

				document.cookie =
					"token=" +
					hash.access_token +
					";expires=" +
					now.toUTCString() +
					";path=/";
			}
		} else {
			setToken(_token);
		}
	}, [token]);

	return (
		<div className="App">
			{token ? (
				<div>
					<Featured />
					<NewReleases />
					<TopArtists />
				</div>
			) : (
				<button type="submit" onClick={handleLogin}>
					Login with Spotify
				</button>
			)}
		</div>
	);
}

export default App;
