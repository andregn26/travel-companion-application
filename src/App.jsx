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

	const [coordinates, setCoordinates] = useState({});
	const [bounds, setBounds] = useState({});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) =>
			setCoordinates({ lat: latitude, lng: longitude })
		);
	}, []);

	useEffect(() => {
		getPlacesData(bounds.sw, bounds.ne).then((data) => {
			setPlaces(data);
		});
	}, [coordinates, bounds]);
	return (
		<>
			<Header />
			<Grid container padding={4} sx={{ width: "100%", border: "red solid 2px" }}>
				<Grid item xs={12} md={4}>
					<List places={places} />
				</Grid>
				<Grid item xs={12} md={8}>
					<Map
						setCoordinates={setCoordinates}
						setBounds={setBounds}
						coordinates={coordinates}
					/>
				</Grid>
			</Grid>
		</>
	);
}

export default App;
