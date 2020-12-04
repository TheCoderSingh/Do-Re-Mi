import React, { useEffect, useState } from "react";
import axios from "axios";
import { setAuthHeader } from "../../utils/functions";

const Featured = () => {
	const [featured, setFeatured] = useState([]);

	useEffect(() => {
		setAuthHeader();

		axios
			.get("https://api.spotify.com/v1/browse/featured-playlists")
			.then((res) => {
				console.log(
					res.data.json().then((data) => {
						console.log(data);
					})
				);
			})
			.catch((error) => console.error(error));
	}, []);

	return <div></div>;
};

export default Featured;
