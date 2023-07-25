/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Box, useTheme } from "@mui/material";
import {
	StyledDivSearch,
	StyledDivSearchIcon,
	StyledTypographyTitle,
	StyledInputBase,
} from "./Header.styles";
import SearchIcon from "@mui/icons-material/Search";

const Header = ({ setCoords }) => {
	const theme = useTheme();
	const [autocomplete, setAutocomplete] = useState(null);
	const onLoad = (autoC) => {
		setAutocomplete(autoC);
	};
	const onPlaceChanged = () => {
		const lat = autocomplete.getPlace().geometry.location.lat();
		const lng = autocomplete.getPlace().geometry.location.lng();
		setCoords({ lat, lng });
	};
	return (
		<AppBar position="static">
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "space-between",
				}}>
				<StyledTypographyTitle variant={"h5"}>Travel Advisor</StyledTypographyTitle>
				<Box display={"flex"} alignItems={"center"}>
					<StyledTypographyTitle variant={"h6"}>Explore new places</StyledTypographyTitle>
					<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
						<StyledDivSearch>
							<StyledDivSearchIcon>
								<SearchIcon />
							</StyledDivSearchIcon>
							<StyledInputBase placeholder="Search..." />
						</StyledDivSearch>
					</Autocomplete>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
