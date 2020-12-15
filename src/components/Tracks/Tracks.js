import React, { useState, useEffect } from "react";
import axios from "axios";
import { setAuthHeader } from "../../utils/functions";
import Track from "./Track";

const Tracks = (path) => {
	const [tracks, setTracks] = useState([]);

	useEffect(() => {
		setAuthHeader();
		let id = path.match.params.id;

		axios
			.get(`https://api.spotify.com/v1/playlists/${id}/tracks`)
			.then((response) => {
				console.log(response.data.items);
				setTracks(response.data.items);
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<div>
			<div className="inner">
				<div className="tracks">
					{tracks.map((track) => {
						return (
							<Track
								key={track.id}
								name={track.track.name}
								image={track.track.album.images[0].url}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Tracks;
