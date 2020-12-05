import React, { useState, useEffect } from "react";
import axios from "axios";
import { setAuthHeader } from "../../utils/functions";
import TopTrack from "./TopTrack";

const TopTracks = () => {
	const [topTracks, setTopTracks] = useState([]);

	useEffect(() => {
		setAuthHeader();

		axios
			.get("https://api.spotify.com/v1/me/top/tracks?limit=12")
			.then((response) => {
				console.log(response.data);
				setTopTracks(response.data.items);
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<section id="top-tracks">
			<div className="inner">
				<h1 className="section-head">Top Tracks</h1>
				<div className="playlists">
					{topTracks.map((track) => {
						return (
							<TopTrack
								key={track.id}
								name={track.name}
								image={track.album.images[0].url}
							></TopTrack>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default TopTracks;
