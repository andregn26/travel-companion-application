/* eslint-disable no-unused-vars */
import { Autocomplete } from "@react-google-maps/api";
import {
	AppBar,
	Toolbar,
	Typography,
	InputBase,
	Box,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { StyledTypographyTitle } from "./Header.styles";

const Header = () => {
	return (
		<AppBar position="static">
			<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
				<StyledTypographyTitle variant={"h5"}>
					Travel Advisor
				</StyledTypographyTitle>
				<Box display={"flex"}>
					<StyledTypographyTitle variant={"h6"}>
						Explore new places
					</StyledTypographyTitle>
					{/* <Autocomplete>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search..."
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
							/>
						</div>
					</Autocomplete> */}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
