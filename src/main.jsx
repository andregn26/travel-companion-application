import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<CssBaseline />
			<StyledThemeProvider theme={theme}>
				<App />
			</StyledThemeProvider>
		</StyledEngineProvider>
	</React.StrictMode>
);
