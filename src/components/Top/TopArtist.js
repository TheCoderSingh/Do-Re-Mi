import React from "react";
import { Link } from "react-router-dom";

const TopArtist = ({ id, name, image }) => {
	return (
		<div className="playlist">
			<Link to={`/playlists/${id}`}>
				<img src={image} alt="Playlist" />
				<h3>{name}</h3>
			</Link>
		</div>
	);
};

export default TopArtist;
