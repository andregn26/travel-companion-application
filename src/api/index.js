import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
	try {
		const {
			data: { data },
		} = await axios.get(
			`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
			{
				params: {
					bl_latitude: sw.lat,
					bl_longitude: sw.lng,
					tr_longitude: ne.lng,
					tr_latitude: ne.lat,
				},
				headers: {
					"X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_WEATHER_KEY,
					"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
				},
			}
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const getWeatherData = async (lat, lng) => {
	try {
		const { data } = await axios.get(
			`https://ai-weather-by-meteosource.p.rapidapi.com/daily`,
			{
				params: {
					lat: lat,
					lon: lng,
					language: "en",
					units: "metric",
				},
				headers: {
					"X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_WEATHER_KEY,
					"X-RapidAPI-Host":
						"ai-weather-by-meteosource.p.rapidapi.com",
				},
			}
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};
