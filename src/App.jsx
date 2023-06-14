import "./App.css";
//COMPONENTS
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
//MATERIAL UI
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";

function App() {
	return (
		<>
			<CssBaseline />

			<Header />
			<Grid container spacing={3} sx={{ width: "100%", border: "2px solid red" }}>
				<Grid item xs={12} md={4}>
					<List />
				</Grid>
				<Grid item xs={12} md={8}>
					<Map />
				</Grid>
			</Grid>
		</>
	);
}

export default App;
