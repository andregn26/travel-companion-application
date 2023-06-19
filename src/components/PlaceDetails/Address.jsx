import React from "react";
import { LocationOn } from "@mui/icons-material";
import { StyledTypoAddress } from "./PlaceDetails.styles";

const Address = ({ place }) => {
	return (
		<>
			{place?.address && (
				<StyledTypoAddress
					gutterBottom
					variant="body2"
					color="textSecondary">
					<LocationOn
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					/>
					{place.address}
				</StyledTypoAddress>
			)}
		</>
	);
};

export default Address;
