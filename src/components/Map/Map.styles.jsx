/* eslint-disable react/prop-types */
import { Box, Paper } from "@mui/material";
import styled from "styled-components";

export const StyledBoxMapContainer = styled("div")`
	height: 80vh;
	width: 100%;
`;

export const StyledDivMarkContainer = styled(Box)`
	position: absolute;
	cursor: pointer;
	transform: translate(-50%, -50%);
	z-index: 10000;
	&:hover {
		z-index: 20000;
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
	cursor: "pointer" !important;
`;
