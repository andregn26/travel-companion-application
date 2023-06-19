import React from "react";
import { Chip } from "@mui/material";
const Cuisine = ({ place }) => {
	return (
		<>
			{place?.cuisine?.map(({ name }) => (
				<Chip key={name} size="small" label={name} />
			))}
		</>
	);
};

export default Cuisine;
