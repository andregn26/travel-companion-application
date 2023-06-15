/* eslint-disable react/prop-types */
import { Box, Typography, useMediaQuery, useTheme, alpha } from "@mui/material";

export const StyledTypographyTitle = ({ variant, children }) => {
	const theme = useTheme();
	return (
		<Typography
			sx={
				useMediaQuery(theme.breakpoints.up("md"))
					? { display: "block" }
					: { display: "none" }
			}
			variant={variant}>
			{children}
		</Typography>
	);
};

export const StyledDivSearch = ({ children }) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				position: "relative",
				borderRadius: "3px",
				backgroundColor: alpha(theme.palette.common.white, 0.15),
				"&:hover": {
					backgroundColor: alpha(theme.palette.common.white, 0.25),
				},
				marginRight: theme.spacing(2),
				marginLeft: 0,
				width: "100%",
				[theme.breakpoints.up("sm")]: {
					marginLeft: theme.spacing(3),
					width: "auto",
				},
			}}>
			{children}
		</Box>
	);
};

export const StyledDivSearchIcon = ({ children }) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				padding: theme.spacing(0, 2),
				height: "100%",
				position: "absolute",
				pointerEvents: "none",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}>
			{children}
		</Box>
	);
};
