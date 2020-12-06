import React from "react";

const Tracks = (playlistId) => {
	const [tracks, setTracks] = useState([]);

	useEffect(() => {
		setAuthHeader();

		axios
			.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`)
			.then((response) => {
				console.log(response.data);
				// setTracks(response.data.items);
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
								image={track.images[0].url}
								name={track.name}
							></Track>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Tracks;
