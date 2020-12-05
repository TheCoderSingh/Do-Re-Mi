import React from "react";

const NewRelease = ({ name, image, tracks }) => {
	return (
		<div className="playlist">
			<img src={image} alt="Playlist" />
			<h3>{name}</h3>
			<a href={tracks}>View tracks</a>
		</div>
	);
};

export default NewRelease;
