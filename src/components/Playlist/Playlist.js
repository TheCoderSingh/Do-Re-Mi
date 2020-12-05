import React from "react";
import "./Playlist.scss";

const Playlist = ({ name, description, image, tracks }) => {
	return (
		<div className="playlist">
			<img src={image} alt="Playlist" />
			<h3>{name}</h3>
			<p>{description}</p>
			<a href={tracks}>View tracks</a>
		</div>
	);
};

export default Playlist;
