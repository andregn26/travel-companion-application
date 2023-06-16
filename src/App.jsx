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

	const [coords, setCoords] = useState({});
	const [bounds, setBounds] = useState({});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
			setCoords({ lat: latitude, lng: longitude });
		});
	}, []);

	useEffect(() => {
		getPlacesData(bounds.sw, bounds.ne).then((data) => {
			setPlaces(data);
		});
	}, [coords, bounds]);
	return (
		<>
			<Header />
			<Grid container padding={4} sx={{ width: "100%", border: "red solid 2px" }}>
				<Grid item xs={12} md={4}>
					<List places={places} />
				</Grid>
				<Grid item xs={12} md={8}>
					<Map
						setCoords={setCoords}
						setBounds={setBounds}
						coords={coords}
						places={places}
					/>
				</Grid>
			</Grid>
		</>
	);
}

export default App;
