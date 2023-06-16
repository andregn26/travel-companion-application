/* eslint-disable react/prop-types */
import { Box, Paper } from "@mui/material";
import styled from "styled-components";

export const StyledBoxMapContainer = styled("div")`
	height: 85vh;
	width: 100%;
`;

export const StyledDivMarkContainer = styled(Box)`
	position: absolute;
	transform: translate(-50%, -50%);
	z-index: 1;
	&:hover {
		z-index: 2;
	}
`;

export const StyledPaper = styled(Paper)`
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100px !important;
`;

export const StyledImg = styled("img")`
	cursor: "pointer";
`;
