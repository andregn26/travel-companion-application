import { Paper, Typography, useMediaQuery } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";
import { Rating } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { StyledBoxMapContainer } from "./Map.styles";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
	const isMobile = useMediaQuery("(min-width:600px)");
	return (
		<StyledBoxMapContainer>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: "secret",
				}}
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={14}
				options={""}
				onChange={(e) => {
					setCoordinates({ lat: e.center.lat, lng: e.center.lng }),
						setBounds({
							ne: e.marginBounds.ne,
							sw: e.marginBounds.sw,
						});
				}}></GoogleMapReact>
		</StyledBoxMapContainer>
	);
};

export default Map;
