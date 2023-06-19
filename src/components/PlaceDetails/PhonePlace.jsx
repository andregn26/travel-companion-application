import React from "react";
import { Phone } from "@mui/icons-material";
import { StyledTypoAddress } from "./PlaceDetails.styles";

const PhonePlace = ({ place }) => {
	return (
		<>
			{place?.phone && (
				<StyledTypoAddress
					gutterBottom
					variant="body2"
					color="textSecondary">
					<Phone
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					/>
					{place.phone}
				</StyledTypoAddress>
			)}
		</>
	);
};

export default PhonePlace;
