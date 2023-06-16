/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Paper, Typography, useMediaQuery, Rating } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GoogleMapReact from "google-map-react";
import {
	StyledBoxMapContainer,
	StyledDivMarkContainer,
	StyledImg,
	StyledPaper,
} from "./Map.styles";

const Map = ({ coords, places, setCoords, setBounds }) => {
	const isDesktop = useMediaQuery("(min-width:600px)");
	return (
		<StyledBoxMapContainer>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
				}}
				margin={[50, 50, 50, 50]}
				defaultCenter={coords}
				center={coords}
				defaultZoom={14}
				options={""}
				onChange={(e) => {
					console.log("this is e-->", e);
					setCoords({ lat: e.center.lat, lng: e.center.lng });
					setBounds({
						ne: e.marginBounds.ne,
						sw: e.marginBounds.sw,
					});
				}}
				onChildClick={""}>
				{places?.map((place, i) => (
					<StyledDivMarkContainer
						lat={Number(place.latitude)}
						lng={Number(place.longitude)}
						key={i}>
						{!isDesktop ? (
							<LocationOnIcon
								color="primary"
								fontSize="large"
							/>
						) : (
							<StyledPaper elevation={3}>
								<Typography>
									{place.name}
								</Typography>
								<StyledImg
									src={
										place.photo
											? place
													.photo
													.images
													.large
													.url
											: "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
									}
									alt={place.name}
								/>
								<Rating
									size="small"
									value={Number(place.rating)}
									readOnly
								/>
							</StyledPaper>
						)}
					</StyledDivMarkContainer>
				))}
			</GoogleMapReact>
		</StyledBoxMapContainer>
	);
};

export default Map;
