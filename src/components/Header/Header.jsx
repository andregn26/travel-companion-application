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
import { StyledDivSearch, StyledDivSearchIcon, StyledTypographyTitle } from "./Header.styles";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
	const theme = useTheme();
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
					{/* <Autocomplete> */}
					<StyledDivSearch>
						<StyledDivSearchIcon>
							<SearchIcon />
						</StyledDivSearchIcon>
						<InputBase
							placeholder="Search..."
							classes={{
								root: { color: "inherit" },
								input: {
									padding: theme.spacing(
										3,
										1,
										1,
										0
									),
									paddingLeft: `calc(1em + ${theme.spacing(
										4
									)}`,
									transition: theme.transitions.create(
										"width"
									),
									width: "100%",
									[theme.breakpoints.up(
										"md"
									)]: { width: "20ch" },
								},
							}}
						/>
					</StyledDivSearch>
					{/* </Autocomplete> */}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
