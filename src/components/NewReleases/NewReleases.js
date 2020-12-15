import React, { useState, useEffect } from "react";
import axios from "axios";
import { setAuthHeader } from "../../utils/functions";
import NewRelease from "../NewRelease/NewRelease";

const NewReleases = () => {
	const [newReleases, setNewReleases] = useState([]);

	useEffect(() => {
		setAuthHeader();

		axios
			.get("https://api.spotify.com/v1/browse/new-releases?limit=12")
			.then((response) => {
				console.log(response.data.albums.items);
				setNewReleases(response.data.albums.items);
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<section id="new-releases">
			<div className="inner">
				<h1 className="section-head">New Releases</h1>
				<div className="playlists">
					{newReleases.map((newRelease) => {
						return (
							<NewRelease
								key={newRelease.id}
								image={newRelease.images[0].url}
								name={newRelease.name}
								tracks={newRelease.href}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default NewReleases;
