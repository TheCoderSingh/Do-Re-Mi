import React, { useState, useEffect } from "react";
import axios from "axios";
import { setAuthHeader } from "../../utils/functions";
import TopArtist from "./TopArtist";

const TopArtists = () => {
	const [topArtists, setTopArtists] = useState([]);

	useEffect(() => {
		setAuthHeader();

		axios
			.get("https://api.spotify.com/v1/me/top/artists")
			.then((response) => {
				console.log(response.data.items);
				setTopArtists(response.data.items);
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<section id="top-artists">
			<div className="inner">
				<h1 className="section-head">Top Artists</h1>
				<div className="playlists">
					{topArtists.map((artist) => {
						return (
							<TopArtist
								key={artist.id}
								id={artist.id}
								image={artist.images[0].url}
								name={artist.name}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default TopArtists;
