import React from "react";

const TopArtist = ({ name, image }) => {
	return (
		<div className="playlist">
			<img src={image} alt="Playlist" />
			<h3>{name}</h3>
		</div>
	);
};

export default TopArtist;
