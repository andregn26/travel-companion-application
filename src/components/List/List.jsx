/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, Select } from "@mui/material";
import { StyledContainer, StyledFormControl, StyledGridList, StyledLoading } from "./List.styles";
import { useState, useEffect, createRef } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places, childClicked, isLoading }) => {
	console.log("🚀 ~ file: List.jsx:9 ~ List ~ childClicked:", childClicked);
	const [type, setType] = useState("restaurants");
	const [rating, setRating] = useState("");

	const [elRefs, setElRefs] = useState([]);

	useEffect(() => {
		const refs = Array(places?.length)
			.fill()
			.map((_, i) => elRefs[i] || createRef());
		setElRefs(refs);
	}, [places]);

	return (
		<StyledContainer>
			<Typography variant="h4">
				Restaurants, Hotels & Attractions around you
			</Typography>
			{isLoading ? (
				<StyledLoading>
					<CircularProgress size={"5rem"} />
				</StyledLoading>
			) : (
				<>
					<StyledFormControl>
						<InputLabel>Type</InputLabel>
						<Select
							variant="standard"
							value={type}
							onChange={(e) => setType(e.target.value)}>
							<MenuItem value="restaurants">
								Restaurants
							</MenuItem>
							<MenuItem value="hotels">Hotels</MenuItem>
							<MenuItem value="attractions">
								Attractions
							</MenuItem>
						</Select>
					</StyledFormControl>
					<StyledFormControl>
						<InputLabel>Rating</InputLabel>
						<Select
							variant="standard"
							value={rating}
							onChange={(e) => setRating(e.target.value)}>
							<MenuItem value={0}>All</MenuItem>
							<MenuItem value={3}>Above 3.0</MenuItem>
							<MenuItem value={4}>Above 4.0</MenuItem>
							<MenuItem value={4.5}>Above 4.5</MenuItem>
						</Select>
					</StyledFormControl>
					<StyledGridList container spacing={3}>
						{places?.map((place, i) => (
							<Grid ref={elRefs[i]} item key={i} xs={12}>
								<PlaceDetails
									place={place}
									selected={
										Number(
											childClicked
										) === i
									}
									refProp={elRefs[i]}
								/>
							</Grid>
						))}
					</StyledGridList>
				</>
			)}
		</StyledContainer>
	);
};

export default List;
