import "./App.css";
//COMPONENTS
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
//MATERIAL UI
import { Grid } from "@mui/material";

import { getPlacesData } from "./api/index";
import { useEffect, useState } from "react";

function App() {
	const [places, setPlaces] = useState([]);

	const [childClicked, setChildClicked] = useState(false);

	const [coords, setCoords] = useState({});
	const [bounds, setBounds] = useState({});

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
			setCoords({ lat: latitude, lng: longitude });
		});
	}, []);

	useEffect(() => {
		const filteredPlaces = places.filter((place) => place.rating > rating);
		setFilteredPlaces(filteredPlaces);
	}, [rating]);

	useEffect(() => {
		if (bounds.sw && bounds.ne) {
			setIsLoading(true);
			getWeatherData(coords.lat, coords.lng).then((data) => setWeatherData(data));
			getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
				setPlaces(
					data?.filter((place) => place.name && place.num_reviews > 0)
				);
				setFilteredPlaces([]);
				setIsLoading(false);
			});
		}
	}, [type, bounds]);
	return (
		<>
			<Header />
			<Grid
				container
				maxHeight={"90vh"}
				padding={4}
				sx={{ width: "100%", border: "red solid 2px" }}>
				<Grid item xs={12} md={4}>
					<List
						places={places}
						childClicked={childClicked}
						isLoading={isLoading}
					/>
				</Grid>
				<Grid item xs={12} md={8}>
					<Map
						setCoords={setCoords}
						setBounds={setBounds}
						coords={coords}
						places={places}
						setChildClicked={setChildClicked}
					/>
				</Grid>
			</Grid>
		</>
	);
}

export default App;
