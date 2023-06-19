/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import RatingPlace from "./RatingPlace";
import PriceLevel from "./PriceLevel";
import RankingPlace from "./RankingPlace";
import AwardsPlace from "./AwardsPlace";
import Cuisine from "./Cuisine";
import Address from "./Address";
import PhonePlace from "./PhonePlace";
import CtaActions from "./CtaActions";

const PlaceDetails = ({ place }) => {
	// console.log("place -->", place);
	return (
		<Card elevation={6}>
			<CardMedia
				sx={{ height: "350px" }}
				image={
					place.photo
						? place.photo.images.large.url
						: "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
				}
				title={place.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5">
					{place.name}
				</Typography>
				<RatingPlace place={place} />
				<PriceLevel place={place} />
				<RankingPlace place={place} />
				<AwardsPlace place={place} />
				<Cuisine place={place} />
				<Address place={place} />
				<PhonePlace place={place} />
				<CtaActions place={place} />
			</CardContent>
		</Card>
	);
};

export default PlaceDetails;
