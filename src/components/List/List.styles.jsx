/* eslint-disable react/prop-types */
import { FormControl, Grid } from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled("div")`
	padding: 25px;
`;

export const StyledFormControl = styled(FormControl)`
	margin: ${(props) => props.theme.spacing(1)};
	min-width: 120px;
	margin-bottom: 30px;
`;

export const StyledGridList = styled(Grid)`
	height: 100%;
	max-height: 500px;
	overflow: auto;
`;

export const StyledLoading = styled("div")`
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
