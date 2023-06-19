import { CardActions, Button } from "@mui/material";

const CtaActions = ({ place }) => {
	return (
		<CardActions>
			<Button
				size="small"
				color="primary"
				onClick={() => window.open(place.web_url, "_blank")}>
				TripAdvisor
			</Button>
			<Button
				size="small"
				color="primary"
				onClick={() => window.open(place.website, "_blank")}>
				Website
			</Button>
		</CardActions>
	);
};

export default CtaActions;
