import React from "react";

const NewRelease = ({ name, image, tracks }) => {
	return (
		<div className="playlist">
			<a href={tracks}>
				<img src={image} alt="Playlist" />
			</a>
			<h3>{name}</h3>
		</div>
	);
};

export default NewRelease;
