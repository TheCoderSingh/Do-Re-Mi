import React from "react";
import { Link } from "react-router-dom";
import "./Playlist.scss";

const Playlist = ({ id, name, image }) => {
	return (
		<div className="playlist">
			<Link to={`/playlist/${id}`}>
				<img src={image} alt="Playlist" />
			</Link>
			<h3>{name}</h3>
		</div>
	);
};

export default Playlist;
