/* eslint-disable react/prop-types */
import { Box, Typography, useMediaQuery, useTheme, alpha, InputBase } from "@mui/material";
import styled from "styled-components";

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

export const StyledInputBase = styled(InputBase)`
	color: white !important;
	padding: ${(props) => props.theme.spacing(1, 1, 1, 0)} !important;
	padding-left: calc(1em + ${(props) => props.theme.spacing(4)}) !important;
	transition: ${(props) => props.theme.transitions.create("width")} !important;
	width: 100% !important;
	${(props) => props.theme.breakpoints.up("md")} {
		width: 20ch !important;
	}
`;
