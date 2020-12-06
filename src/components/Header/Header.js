import React, { useState, useEffect } from "react";
import axios from "axios";
import { setAuthHeader } from "../../utils/functions";
import "./Header.scss";

const Header = () => {
	const [name, setName] = useState();
	const [imageUrl, setImageUrl] = useState();
	const [followers, setFollowers] = useState();

	useEffect(() => {
		setAuthHeader();

		axios
			.get("https://api.spotify.com/v1/me")
			.then((response) => {
				console.log(response.data);
				setName(response.data.display_name);
				setImageUrl(response.data.images[0].url);
				setFollowers(response.data.followers.total);
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<header>
			<div className="inner">
				<div id="header-container">
					<div id="header-left">
						<img src={imageUrl} alt="Profile" />
						<div id="header-content">
							<h1>Hello, {name}</h1>
							<p>Followers: {followers}</p>
						</div>
					</div>
					<div className="header-right">
						<a href="/">Logout</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
