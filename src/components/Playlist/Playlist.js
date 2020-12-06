import React from "react";
import "./Playlist.scss";

const Playlist = ({ name, description, image, tracks }) => {
	return (
		<div className="playlist">
			<a href={tracks}>
				<img src={image} alt="Playlist" />
			</a>
			<h3>{name}</h3>
			{/* <p>{description}</p> */}
		</div>
	);
};

export default Playlist;
