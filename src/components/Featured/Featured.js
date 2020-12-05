import React, { useEffect, useState } from "react";
import axios from "axios";
import { setAuthHeader } from "../../utils/functions";
import Playlist from "../Playlist/Playlist";
import "./Featured.scss";

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
		<section id="featured">
			<div className="inner">
				<h1 className="section-head">Featured</h1>
				<div id="featured-playlists">
					{featured.map((feat) => {
						return (
							<Playlist
								key={feat.id}
								image={feat.images[0].url}
								name={feat.name}
								description={feat.description}
								tracks={feat.tracks.href}
							>
								{feat.name}
							</Playlist>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Featured;
