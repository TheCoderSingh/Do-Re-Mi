import React from "react";

const TopTrack = ({ name, image }) => {
	return (
		<div className="playlist">
			<img src={image} alt="Playlist" />
			<h3>{name}</h3>
		</div>
	);
};

export default TopTrack;
