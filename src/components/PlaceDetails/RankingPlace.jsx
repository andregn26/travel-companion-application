import { Box, Typography } from "@mui/material";

const RankingPlace = ({ place }) => {
	return (
		<Box display={"flex"} justifyContent={"space-between"}>
			<Typography variant="subtitle1">Ranking</Typography>
			<Typography variant="subtitle1">{place.ranking}</Typography>
		</Box>
	);
};

export default RankingPlace;
