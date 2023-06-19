import { Box, Typography, Rating } from "@mui/material";

const RatingPlace = ({ place }) => {
	return (
		<Box display={"flex"} justifyContent={"space-between"}>
			<Rating size="small" value={Number(place.rating)} readOnly />
			<Typography variant="subtitle1">
				out of {place.num_reviews} reviews
			</Typography>
		</Box>
	);
};

export default RatingPlace;
