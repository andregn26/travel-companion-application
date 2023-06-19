import React from "react";
import { Box, Typography } from "@mui/material";

const PriceLevel = ({ place }) => {
	return (
		<Box display={"flex"} justifyContent={"space-between"}>
			<Typography variant="subtitle1">Price</Typography>
			<Typography variant="subtitle1">{place.price_level}</Typography>
		</Box>
	);
};

export default PriceLevel;
