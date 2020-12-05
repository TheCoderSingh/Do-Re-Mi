import React, { useEffect, useState } from "react";
import axios from "axios";
import { setAuthHeader } from "../../utils/functions";

const Featured = () => {
	const [featured, setFeatured] = useState([]);

	useEffect(() => {
		setAuthHeader();

		axios
			.get("https://api.spotify.com/v1/browse/featured-playlists")
			.then((response) => {
				console.log(response);
				setFeatured(response.data.playlists.items);
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<div>
			{featured.map((feat) => {
				return <h1>{feat.name}</h1>;
			})}
		</div>
	);
};

export default Featured;
