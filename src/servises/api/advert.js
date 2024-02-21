import axios from "axios";

axios.defaults.baseURL = "https://654b58a75b38a59f28eee925.mockapi.io";

export const fetchAllAdverts = async () => {
	const { data } = await axios.get('/adverts');
	return data;
};