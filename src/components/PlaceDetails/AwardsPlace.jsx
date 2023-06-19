import React from "react";
import { Box, Typography } from "@mui/material";

const AwardsPlace = ({ place }) => {
	return (
		<>
			{place?.awards?.map((award, i) => (
				<Box
					my={1}
					display={"flex"}
					justifyContent={"space-between"}
					alignItems={"center"}
					key={i}>
					<img src={award.images.small} alt={award.display.name} />
					<Typography variant="subtitle2" color="textSecondary">
						{award.display_name}
					</Typography>
				</Box>
			))}
		</>
	);
};

export default AwardsPlace;
