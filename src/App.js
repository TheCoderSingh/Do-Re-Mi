import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Featured from "./components/Featured/Featured";
import NewReleases from "./components/NewReleases/NewReleases";
import TopTracks from "./components/Top/TopTracks";
import TopArtists from "./components/Top/TopArtists";
import { getCookie } from "./utils/functions";
import Login from "./components/Login/Login";
import Track from "./components/Tracks/Track";

function App() {
	const [token, setToken] = useState();

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
			<Router>
				{token ? (
					<div>
						<Header />
						<Switch>
							<Route path="/playlist/:id" component={Track} />

							<Route exact path="/">
								<Featured />
								<NewReleases />
								<TopArtists />
								<TopTracks />
							</Route>
						</Switch>
					</div>
				) : (
					<Login />
				)}
			</Router>
		</div>
	);
}

export default App;
