import React from "react";
import "./Track.scss";

const Track = ({ name, image }) => {
	return (
		<div className="track">
			<img src={image} alt="Playlist" />
			<h3>{name}</h3>
		</div>
	);
};

export default Track;
